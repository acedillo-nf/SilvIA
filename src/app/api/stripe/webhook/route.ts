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

  switch (event.type) {
    case 'account.updated':
      const account = event.data.object as Stripe.Account
      const stripeInfo = JSON.stringify({
        id: account.id,
        status: account.charges_enabled ? 'active' : 'inactive'
      })
      await client.user.updateMany({
        where: { stripeId: account.id },
        data: { 
          stripeId: stripeInfo
        },
      })
      break
    // Add more cases as needed
  }

  return NextResponse.json({ received: true })
}
