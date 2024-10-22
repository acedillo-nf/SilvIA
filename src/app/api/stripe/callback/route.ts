import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: '2024-06-20',
})

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const user = await currentUser()

  if (!code || !user) {
    return NextResponse.redirect('/settings?error=Invalid request')
  }

  try {
    const response = await stripe.oauth.token({
      grant_type: 'authorization_code',
      code,
    })

    await client.user.update({
      where: { clerkId: user.id },
      data: { stripeId: response.stripe_user_id },
    })

    return NextResponse.redirect('/settings?success=Stripe account connected')
  } catch (error) {
    console.error('Error connecting Stripe account:', error)
    return NextResponse.redirect('/settings?error=Failed to connect Stripe account')
  }
}