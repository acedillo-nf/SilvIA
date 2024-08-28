'use server'

import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  typescript: true,
  apiVersion: '2024-06-20',
})

export const onCreateCustomerPaymentIntentSecret = async (
  amount: number,
  stripeId: string
) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create(
      {
        currency: 'usd',
        amount: amount * 100,
        automatic_payment_methods: {
          enabled: true,
        },
      },
      { stripeAccount: stripeId }
    )

    if (paymentIntent) {
      return { secret: paymentIntent.client_secret }
    }
  } catch (error) {
    console.log(error)
  }
}

export const onUpdateSubscription = async (
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
) => {
  try {
    const user = await currentUser()
    if (!user) return
    const update = await client.user.update({
      where: {
        clerkId: user.id,
      },
      data: {
        subscription: {
          update: {
            data: {
              plan,
              credits: plan === 'STANDARD' ? 10 : plan === 'PRO' ? 50 : 500,
            },
          },
        },
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    })
    if (update) {
      return {
        status: 200,
        message: 'subscription updated',
        plan: update.subscription?.plan,
      }
    }
  } catch (error) {
    console.log(error)
  }
}

const setPlanAmount = (item: 'STANDARD' | 'PRO' | 'ULTIMATE') => {
  switch (item) {
    case 'STANDARD':
      return 799  // $7.99
    case 'PRO':
      return 999  // $9.99
    case 'ULTIMATE':
      return 2000 // $20.00
    default:
      return 0
  }
}

export const onGetStripeClientSecret = async (
  item: 'STANDARD' | 'PRO' | 'ULTIMATE'
) => {
  try {
    const amount = setPlanAmount(item)
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'usd',
      amount: amount,
      automatic_payment_methods: {
        enabled: true,
      },
    })

    if (paymentIntent) {
      return { secret: paymentIntent.client_secret }
    }
  } catch (error) {
    console.log(error)
  }
}