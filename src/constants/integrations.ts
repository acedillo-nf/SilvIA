type IntegrationsListItemProps = {
    id: string
    name: 'stripe' | 'whatsapp'  // Updated to include 'whatsapp'
    logo: string
    description: string
    title: string
    modalDescription: string
  }
  
  export const INTEGRATION_LIST_ITEMS: IntegrationsListItemProps[] = [
    {
      id: '1',
      name: 'stripe',
      description:
        'Acepta pagos de tus productos con Stripe, siendo este un sistema de pago que permite a los usuarios pagar por tus productos de forma segura y sencilla.',
      logo: '914be637-39bf-47e6-bb81-37b553163945',
      title: 'Conectar cuenta de Stripe',
      modalDescription: 
        'Las plataformas mas exitosas del mundo como Shopify y DoorDash utilizan Stripe Connect.',
    },
    // New WhatsApp integration
    {
      id: '2',
      name: 'whatsapp',
      description:
        'WhatsApp es una aplicación de mensajería popular que permite a las empresas conectarse con los clientes a través de chats, llamadas de voz y video.',
      logo: 'whatsapp-logo-uuid',  // Replace with actual UUID for WhatsApp logo
      title: 'Conectar WhatsApp Business',
      modalDescription:
        'Integra el webhook de WhatsApp con Twilio para comunicarte con tus clientes, brindar soporte y enviar notificaciones directamente a través de WhatsApp.',
    },
  ]

  