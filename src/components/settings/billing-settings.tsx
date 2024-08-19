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

type Props = {}

const BillingSettings = async (props: Props) => {
  const plan = await onGetSubscriptionPlan()
  const planFeatures = pricingCards.find(
    (card) => card.title.toUpperCase() === plan?.toUpperCase()
  )?.features
  if (!planFeatures) return

  console.log(planFeatures)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <Section
          label="Ajustes de facturación"
          message="Añade medios de pago, maneja tu suscripción, revisa tus datos"
        />
      </div>
      <div className="lg:col-span-2 flex justify-start lg:justify-center ">
        <Modal
          title="Choose A Plan"
          description="Tell us about yourself! What do you do? Let’s tailor your experience so it best suits you."
          trigger={
            plan && plan === 'STANDARD' ? (
              <Card className="border-dashed bg-cream border-gray-400 w-full cursor-pointer h-[270px] flex justify-center items-center">
                <CardContent className="flex gap-2 items-center">
                  <div className="rounded-full border-2 p-1">
                    <Plus className="text-gray-400" />
                  </div>
                  <CardDescription className="font-semibold">
                    Cambiar plan
                  </CardDescription>
                </CardContent>
              </Card>
            ) : (
              <Image
                src="/images/creditcard.png"
                width={400}
                height={400}
                alt="image"
              />
            )
          }
        >
          <SubscriptionForm plan={plan!} />
        </Modal>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-xl font-semibold mb-2">Plan Actual</h3>
        <p className="text-sm font-semibold">{plan}</p>
        <p className='text-sm font-light'>
          {plan == "PRO"
          ? 'Start growing your business today'
          : plan =='ULTIMATE'
          ? 'The ultimate growth plan that sets you up for sucess'
          : 'Perfect if you´re just getting started with SilvIA'}
        </p>
        </div>
      </div>
  )
}

export default BillingSettings