export const dynamic = 'force-dynamic'
import React from 'react'

import { Card, CardContent, CardDescription } from '../ui/card'
import { Check, CheckCircle2, Plus } from 'lucide-react'
import { pricingCards } from '@/constants/landing-page'

import Image from 'next/image'
import { onGetSubscriptionPlan } from '@/actions/settings'
import Section from '../section-label'
import Modal from '../modal'
import SubscriptionForm from '../forms/settings/subscription-form'
import { currentUser } from '@clerk/nextjs'
import { client } from '@/lib/prisma'

type Props = {}

const BillingSettings = async () => {
  const user = await currentUser()
  if (!user) return null

  const userData = await client.user.findUnique({
    where: { clerkId: user.id },
    select: {
      subscription: {
        select: {
          plan: true,
          currentPeriodEnd: true,
          status: true,
        },
      },
    },
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <Section
          label="Ajustes de facturación"
          message="Añade medios de pago, maneja tu suscripción, revisa tus datos"
        />
      </div>
      <div className="lg:col-span-4">
        <SubscriptionForm 
          plan={userData?.subscription?.plan || 'STANDARD'}
          currentPeriodEnd={userData?.subscription?.currentPeriodEnd}
          status={userData?.subscription?.status}
        />
      </div>
    </div>
  )
}

export default BillingSettings
