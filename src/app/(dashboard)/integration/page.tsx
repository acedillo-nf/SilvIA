export const dynamic = 'force-dynamic'
import { onGetPaymentConnected } from '@/actions/settings'
import InfoBar from '@/components/infobar'
import IntegrationsList from '@/components/integrations'


const IntegrationsPage = async () => {
  const payment = await onGetPaymentConnected()
  // For now, we'll set whatsapp to false as a default
  const whatsapp = false  // You can replace this with actual logic later

  const connections = {
    stripe: payment ? true : false,
    whatsapp: whatsapp,  // This ensures whatsapp is always boolean
  }

  return (
    <>
      <InfoBar />
      <IntegrationsList connections={connections} />
    </>
  )
}

export default IntegrationsPage