
"use client"

import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { FiMessageSquare } from 'react-icons/fi';
import DropDownSide from './DropDownSide';
import Link from 'next/link';
import { MdArrowUpward } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';

export default function SideBar({chats}) {
  // console.log(chats)
  const [showAll, setShowAll] = useState(false);

  const visibleChats = showAll ? chats : chats?.slice(0, 4);

  return (
    <div className=''>
      <div id="docs-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-[#1e1f20] border-e border-[#1e1f20] pt-7  overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-700 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <div className="w-[60%] ml-4">
          <a className="flex items-center gap-2 bg-[#1a1a1c] py-[8px] rounded-[20px] justify-center text-white font-[500] text-[14px] leading-[20px] hover:bg-slate-900" href="/chat">
            <IoIosAdd size={25} />
            New chat
          </a>
        </div>
       {
        chats.length === 0 ?(
          <p className='text-white text-sm p-5 animate-pulse'>Your Chats Will be Displayed Here...</p>
        ):(
          <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
          <h2 className="py-4 text-gray-100 font-bold text-sm">Recent</h2>
          <div>
            <div></div>
            <div></div>
          </div>
          <ul>
            {visibleChats.map((chat, i) => {
              const chatTitleWords = chat.prompt.split(' ');
              const truncatedTitle = chatTitleWords.slice(0, 3).join(' ');
              const remainingTitle = chatTitleWords.slice(3).join(' ');

              return (
                <li key={i} className="hs-accordion" id="users-accordion" style={{ whiteSpace: 'nowrap' }}>
                <div className="w-full text-start flex items-center justify-between gap-x-3.5 py-2 px-2.5 text-sm text-[#bac7c5] rounded-lg hover:bg-slate-800 hover:rounded-lg dark:bg-gray-800 dark:hover:bg-gray-900  dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  
                  <Link href={`/chat/DetailedPage/${chat.id}`}>
                    <button className="flex items-center gap-1">
                      <FiMessageSquare />
                      {truncatedTitle}...
                    </button>
                  </Link>
            
                  <DropDownSide chatId={chat.id} className="md:block hidden lg:block z-50 " />
               
                  
                </div>
              </li>
              );
            })}
          </ul>
          {!showAll && chats.length > 4 && (
            <button className="text-gray-500 items-center gap-2 hover:text-gray-700 flex justify-start text-sm mt-3" onClick={() => setShowAll(true)}> <FaChevronDown />See More</button>
          )}
          {showAll && (
            <button className="text-gray-500 items-center gap-2 hover:text-gray-700 flex justify-start text-sm mt-3" onClick={() => setShowAll(false)}><MdArrowUpward /> See Less</button>
          )}
        </nav>
        )
       }
      {
        chats.length < 3 ?(
          ""
        ):
          <div className="w-full md:mt-[19rem] lg:mt-[10rem] px-5 text-blue-200 text-[12px] py-[1rem] shadow-lg flex-col gap-2 lg:flex bg-slate-800" >
          <h2 className='text-white'>• Kampala, Uganda</h2>
          <p className="text-coloR">From your IP address • Update location</p>
        </div>

      }
      </div>
    </div>
  );
}
