import { CheckCircle2Icon } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { StripeConnect } from '../settings/stripe-connect'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

type IntegrationModalBodyProps = {
  type: 'stripe' | 'whatsapp'
  connections: {
    stripe: boolean
    whatsapp: boolean  // Make this required
  }
}

export const IntegrationModalBody = ({
  type,
  connections,
}: IntegrationModalBodyProps) => {
  const [accountSid, setAccountSid] = useState('')
  const [authToken, setAuthToken] = useState('')

  switch (type) {
    case 'stripe':
      return (
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Stripe would like to access</h2>
          {[
            'Payment and bank information',
            'Products and services you sell',
            'Business and tax information',
            'Create and update Products',
          ].map((item, key) => (
            <div
              key={key}
              className="flex gap-2 items-center pl-3"
            >
              <CheckCircle2Icon />
              <p>{item}</p>
            </div>
          ))}
          <div className="flex justify-between mt-10">
            <Button variant="outline">Learn more</Button>
            <StripeConnect connected={connections[type]} />
          </div>
        </div>
      )
    case 'whatsapp':
      return (
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Connect WhatsApp Business API</h2>
          <div>
            <Label htmlFor="accountSid">Account SID</Label>
            <Input
              id="accountSid"
              value={accountSid}
              onChange={(e) => setAccountSid(e.target.value)}
              placeholder="ACb0bb441a3a222fc2bbb3435dafeb5382"
              disabled
            />
          </div>
          <div>
            <Label htmlFor="authToken">Auth Token</Label>
            <Input
              id="authToken"
              value={authToken}
              onChange={(e) => setAuthToken(e.target.value)}
              placeholder="75f09e8a4721d97cf1e194134ce5da54"
              type="password"
              disabled
            />
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outline">Learn more</Button>
            <Button>Connected</Button>
          </div>
        </div>
      )
    default:
      return <></>
  }
}
