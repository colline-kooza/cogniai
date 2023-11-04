"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import localFont from "next/font/local";
import Link from "next/link";
import { MdOutlineMessage } from "react-icons/md";

const myFont = localFont({ src: "../ProductSans-Light.ttf" });

export default function SideBarBtn({ chats }) {
  const [showSideBar, setShowSideBar] = useState(false);

  function changeShow() {
    setShowSideBar(!showSideBar);
  }

  function setFalse() {
    setShowSideBar(false);
  }

  return (
    <div className="flex flex-col">
      <button className="text-white" onClick={changeShow}>
        <FiMenu size={25} />
      </button>

      <div
        className={`lg:hidden ${
          showSideBar
            ? "transform translate-x-0 transition-transform ease-in-out duration-700"
            : "transform -translate-x-full transition-transform ease-in-out duration-700"
        } absolute left-0 top-[10%] h-[100vh] z-[120] w-[100%] bg-black`}
      >
        <div
          className={myFont.className}
          class="absolute left-0 top-[0%] lg:hidden w-[90%] h-[100vh] z-30 bg-black"
        >
          <div className="px-[2rem] py-[1rem] flex flex-col gap-5 overflow-y-auto">
            <div className="flex flex-col gap-[2rem]">
              <h3 className="text-white text-[13px] font-[800] bg-blue-400 px-[10px] py-[10px] rounded-[10px] shadow-md">
                Recent
              </h3>
              <div className="overflow-auto max-h-[55vh]">
                <div className="text-white font-[500] text-[14px] flex flex-col gap-3">
                  {chats.length > 0 ? (
                    chats.map((chat) => {
                      return (
                        <div className="flex justify-between items-center">
                          <Link
                            key={chat.id}
                            href={`/chat/DetailedPage/${chat.id}`}
                            className="flex gap-3 items-center line-clamp-1 rounded-lg hover:bg-[#7e57c16b] hover:animate-pulse hover:rounded-md"
                            onClick={setFalse}
                          >
                            <MdOutlineMessage
                              className="bg-primaryColorbg  text-[20px] p-[5px] shrink-0"
                              size={25}
                            />
                            {chat.prompt}
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <h2> something went wrong😒😒</h2>
                  )}
                </div>
              </div>
            </div>
            <div className="w-[80%] h-[10%] absolute bottom-[6%]  bg-gradient-to-r from-pink-500 via-pink-600 to-blue-500 bg-clip-text text-transparent  text-[10px]  py-[.1rem] px-[.3rem] flex-col gap-3 lg:flex">
              <h2>• Kampala, Uganda</h2>
              <p className="text-coloR">
                From your IP address • Update location
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
