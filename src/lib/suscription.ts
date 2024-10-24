import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  typescript: true,
  apiVersion: '2024-06-20',
})

export const createSubscription = async (
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
) => {
  try {
    const user = await currentUser()
    if (!user) return null

    // Get price ID based on plan
    const priceId = getPriceId(plan)
    if (!priceId) return null

    // Get or create customer
    const existingUser = await client.user.findUnique({
      where: { clerkId: user.id },
      select: { stripeId: true }
    })

    let stripeCustomerId = existingUser?.stripeId

    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.emailAddresses[0].emailAddress,
        metadata: {
          clerkId: user.id,
        },
      })
      stripeCustomerId = customer.id
      
      await client.user.update({
        where: { clerkId: user.id },
        data: { stripeId: customer.id }
      })
    }

    // Check for existing subscription
    const existingSubscription = await stripe.subscriptions.list({
      customer: stripeCustomerId,
      status: 'active',
      limit: 1,
    })

    if (existingSubscription.data.length > 0) {
      // Update existing subscription
      const subscription = await stripe.subscriptions.update(
        existingSubscription.data[0].id,
        {
          items: [{
            id: existingSubscription.data[0].items.data[0].id,
            price: priceId,
          }],
          proration_behavior: 'always_invoice',
        }
      )
      return {
        subscriptionId: subscription.id,
        clientSecret: null,
      }
    }

    // Create new subscription
    const subscription = await stripe.subscriptions.create({
      customer: stripeCustomerId,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.payment_intent'],
    })

    return {
      subscriptionId: subscription.id,
      clientSecret: (subscription.latest_invoice as any).payment_intent.client_secret,
    }
  } catch (error) {
    console.error('Error creating subscription:', error)
    return null
  }
}

const getPriceId = (plan: 'STANDARD' | 'PRO' | 'ULTIMATE') => {
  switch (plan) {
    case 'STANDARD':
      return process.env.STRIPE_STANDARD_PRICE_ID
    case 'PRO':
      return process.env.STRIPE_PRO_PRICE_ID
    case 'ULTIMATE':
      return process.env.STRIPE_ULTIMATE_PRICE_ID
    default:
      return null
  }
}