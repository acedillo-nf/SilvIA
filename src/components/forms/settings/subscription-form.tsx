'use client'
import { Loader } from '@/components/loader'
import { StripeElements } from '@/components/settings/stripe-elements'
import SubscriptionCard from '@/components/settings/subscription-card'
import { Button } from '@/components/ui/button'
import { useSubscriptions } from '@/hooks/billing/use-billing'
import React from 'react'
import { toast } from 'sonner'

type Props = {
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
  currentPeriodEnd?: Date | null
  status?: string | null
}

const SubscriptionForm = ({ plan, currentPeriodEnd, status }: Props) => {
  const { loading, onSetPayment, payment } = useSubscriptions(plan)

  const handleSubscriptionChange = async (newPlan: 'STANDARD' | 'PRO' | 'ULTIMATE') => {
    if (status === 'past_due') {
      toast.error('Please update your payment method first')
      return
    }
    
    if (newPlan === 'STANDARD' && plan !== 'STANDARD') {
      if (confirm('Are you sure you want to downgrade to the free plan?')) {
        onSetPayment(newPlan)
      }
    } else {
      onSetPayment(newPlan)
    }
  }

  return (
    <Loader loading={loading}>
      <div className="flex flex-col gap-5">
        {currentPeriodEnd && status === 'active' && (
          <div className="text-sm text-muted-foreground">
            Your current plan ({plan}) will renew on {new Date(currentPeriodEnd).toLocaleDateString()}
          </div>
        )}
        
        {status === 'past_due' && (
          <div className="text-sm text-red-500 font-medium">
            Your payment is past due. Please update your payment method.
          </div>
        )}

        <div className="flex flex-col gap-3">
          <SubscriptionCard
            title="STANDARD"
            description="Perfecto si estas empezando con MarIA"
            price="20.00"
            payment={payment}
            onPayment={handleSubscriptionChange}
            id="STANDARD"
            isActive={plan === 'STANDARD'}
          />

          <SubscriptionCard
            title="PRO"
            description="Perfecto para negocios que están escalando"
            price="40.00"
            payment={payment}
            onPayment={handleSubscriptionChange}
            id="PRO"
            isActive={plan === 'PRO'}
          />

          <SubscriptionCard
            title="ULTIMATE"
            description="Para negocios con agendas grandes"
            price="70.00"
            payment={payment}
            onPayment={handleSubscriptionChange}
            id="ULTIMATE"
            isActive={plan === 'ULTIMATE'}
          />
        </div>

        {/* Only show payment elements when changing plans */}
        {payment !== plan && payment !== 'STANDARD' && (
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Complete Your Subscription</h3>
            <StripeElements payment={payment} />
          </div>
        )}

        {/* Show cancel subscription button for paid plans */}
        {plan !== 'STANDARD' && status === 'active' && (
          <Button 
            variant="outline" 
            onClick={() => handleSubscriptionChange('STANDARD')}
            className="mt-4"
          >
            <Loader loading={loading}>Cancel Subscription</Loader>
          </Button>
        )}
      </div>
    </Loader>
  )
}

export default SubscriptionForm
