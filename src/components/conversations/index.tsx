'use client'
import React from 'react'
import { TABS_MENU } from '@/constants/menu'
import { TabsContent } from '../ui/tabs'
import { Loader } from '../loader'
// import ChatCard from './chat-card'
import { CardDescription } from '../ui/card'
import { Separator } from '../ui/separator'
import { useConversation } from '@/hooks/conversations/use-conversation'
import TabsMenu from '../tabs'
import ConversationSearch from './search'
import ChatCard from './chat-card'


type Props = {
  domains?:
    | {
        name: string
        id: string
        icon: string
      }[]
    | undefined
}

const ConversationMenu = ({ domains }: Props) => {
  const { register, chatRooms, loading, onGetActiveChatMessages } =
    useConversation()

  return (
    <div className="py-3 px-0">ConversationMenu
      <TabsMenu triggers={TABS_MENU}>
        <TabsContent value="No leídos">
          <ConversationSearch
            domains={domains}
            register={register}
          />
          <div className="flex flex-col">
            <Loader loading={loading}>
              {chatRooms.length ? (
                chatRooms.map((room) => (
                  <ChatCard
                    seen={room.chatRoom[0].message[0]?.seen}
                    id={room.chatRoom[0].id}
                    onChat={() => onGetActiveChatMessages(room.chatRoom[0].id)}
                    createdAt={room.chatRoom[0].message[0]?.createdAt}
                    key={room.chatRoom[0].id}
                    title={room.email!}
                    description={room.chatRoom[0].message[0]?.message}
                  />
                ))
              ) : (
                <CardDescription>Ningún mensaje en tu chatbot</CardDescription>
              )}
            </Loader>
          </div>
        </TabsContent>
        <TabsContent value="Todos">
          <Separator
            orientation="horizontal"
            className="mt-5"
          />
          all
        </TabsContent>
        <TabsContent value="Expirados">
          <Separator
            orientation="horizontal"
            className="mt-5"
          />
          expired
        </TabsContent>
        <TabsContent value="Destacados">
          <Separator
            orientation="horizontal"
            className="mt-5"
          />
          starred
        </TabsContent>
      </TabsMenu>
    </div>
  )
}

export default ConversationMenu