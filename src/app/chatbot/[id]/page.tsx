import AiChatBot from '@/components/chatbot'

type Props = {
  params: {
    id: string
  }
}

const SharedChatbotPage = ({ params }: Props) => {
  const { id } = params

  return <AiChatBot id={id} />
}

export default SharedChatbotPage
