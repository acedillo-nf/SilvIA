import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { client } from '@/lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: '2024-06-20',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionChange(subscription)
        break

      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object as Stripe.Subscription
        await handleSubscriptionDeletion(deletedSubscription)
        break

      case 'invoice.payment_succeeded':
        const invoice = event.data.object as Stripe.Invoice
        await handleSuccessfulPayment(invoice)
        break

      case 'invoice.payment_failed':
        const failedInvoice = event.data.object as Stripe.Invoice
        await handleFailedPayment(failedInvoice)
        break
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  const customer = await stripe.customers.retrieve(subscription.customer as string) as Stripe.Customer
  const clerkId = customer.metadata?.clerkId
  
  if (!clerkId) return

  const planMap = {
    [process.env.STRIPE_STANDARD_PRICE_ID!]: 'STANDARD',
    [process.env.STRIPE_PRO_PRICE_ID!]: 'PRO',
    [process.env.STRIPE_ULTIMATE_PRICE_ID!]: 'ULTIMATE'
  }

  const priceId = subscription.items.data[0].price.id
  const plan = planMap[priceId] as 'STANDARD' | 'PRO' | 'ULTIMATE'
  const credits = plan === 'STANDARD' ? 10 : plan === 'PRO' ? 50 : 500

  await client.user.update({
    where: { clerkId },
    data: {
      subscription: {
        upsert: {
          create: {
            plan,
            credits,
            stripeSubscriptionId: subscription.id,
            status: subscription.status,
            currentPeriodEnd: new Date(subscription.current_period_end * 1000),
          },
          update: {
            plan,
            credits,
            stripeSubscriptionId: subscription.id,
            status: subscription.status,
            currentPeriodEnd: new Date(subscription.current_period_end * 1000),
          }
        }
      }
    }
  })
}

async function handleSubscriptionDeletion(subscription: Stripe.Subscription) {
  const customer = await stripe.customers.retrieve(subscription.customer as string) as Stripe.Customer
  const clerkId = customer.metadata?.clerkId

  if (!clerkId) return

  await client.user.update({
    where: { clerkId },
    data: {
      subscription: {
        update: {
          plan: 'STANDARD',
          credits: 10,
          stripeSubscriptionId: null,
          status: 'canceled',
          currentPeriodEnd: null,
        }
      }
    }
  })
}

async function handleSuccessfulPayment(invoice: Stripe.Invoice) {
  const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string)
  await handleSubscriptionChange(subscription)
}

async function handleFailedPayment(invoice: Stripe.Invoice) {
  const customer = await stripe.customers.retrieve(invoice.customer as string) as Stripe.Customer
  const clerkId = customer.metadata?.clerkId

  if (!clerkId) return

  await client.user.update({
    where: { clerkId },
    data: {
      subscription: {
        update: {
          status: 'past_due'
        }
      }
    }
  })
}
