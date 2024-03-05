import getChats from '@/libs/getChats';
import { auth } from '@clerk/nextjs';
import React from 'react'
import SideContent from './SideContent';

export default async function SideBar() {
  const { userId } = auth();
  const chats = await getChats(userId);

  return (
    <div>
      <SideContent chats={chats} userId={userId}/>
    </div>
  )
}
