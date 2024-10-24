'use client'
import React from 'react'
import { Label } from '../ui/label'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Check } from 'lucide-react'

type Props = {
  title: string
  description: string
  price: string
  payment: string
  onPayment: (plan: 'STANDARD' | 'PRO' | 'ULTIMATE') => void
  id: 'STANDARD' | 'PRO' | 'ULTIMATE'
  isActive?: boolean
}

const SubscriptionCard = ({
  title,
  description,
  price,
  payment,
  onPayment,
  id,
  isActive,
}: Props) => {
  return (
    <Label htmlFor={id}>
      <Card
        onClick={() => onPayment(id)}
        className={cn(
          'cursor-pointer transition-all hover:border-primary',
          payment === id && 'border-primary',
          isActive && 'bg-muted border-primary'
        )}
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
            {isActive && (
              <span className="px-2.5 py-0.5 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                Current Plan
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">${price}</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          {payment === id && !isActive && (
            <Check className="h-5 w-5 text-primary" />
          )}
        </CardContent>
      </Card>
    </Label>
  )
}

export default SubscriptionCard
