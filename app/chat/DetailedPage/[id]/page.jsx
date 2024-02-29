"use client"
import DetailedPage from '@/components/DetailedComponent';
import getSingleChat from '@/libs/getSingleChat';
import React from 'react'

export default async function Page({ params: { id } }) {
  const singleChat = await getSingleChat(id);
  const conversations = singleChat.conversations;
//  console.log(conversations)

  return (
    <div>
      <DetailedPage id={id } conversations={conversations} singleChat={singleChat}/>
    </div>
  )
}
