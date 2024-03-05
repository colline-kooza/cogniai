"use client";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiMessageSquare } from "react-icons/fi";
import localFont from "next/font/local";
import Link from "next/link";
import { MdArrowUpward, MdOutlineMessage } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import DropDownSide from "./DropDownSide";
import { FaChevronDown } from "react-icons/fa";

const myFont = localFont({ src: "../ProductSans-Light.ttf" });

export default function SideBarBtn({ chats }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSideBar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleSideBar() {
    setShowSideBar((prevShowSideBar) => !prevShowSideBar);
  }

  const visibleChats = showAll ? chats : chats?.slice(0, 4);

  return (
    <div className="relative">
      <button className="text-white relative" onClick={toggleSideBar}>
        <FiMenu size={25} />
      </button>
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity ${
          showSideBar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowSideBar(false)}
      ></div>
      <div
        ref={sidebarRef}
        className={`transform transition-transform ease-in-out ${
          showSideBar ? "translate-x-0" : "-translate-x-full"
        } w-[85%] min-h-screen bg-[#1e1f20] z-[10000] fixed top-0 left-0`}
      >
        <div className="w-[60%] ml-4 py-4">
          <a
            className="flex items-center gap-2 bg-[#1a1a1c] py-[8px] rounded-[20px] justify-center text-white font-[500] text-[14px] leading-[20px] hover:bg-slate-900"
            href="/chat"
          >
            <IoIosAdd size={25} />
            New chat
          </a>
        </div>
        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
          <h2 className="py-4 text-gray-100 font-bold text-sm">Recent</h2>
          <div>
            <div></div>
            <div></div>
          </div>
          <ul>
            {visibleChats.map((chat, i) => {
              const chatTitleWords = chat.prompt.split(" ");
              const truncatedTitle = chatTitleWords.slice(0, 3).join(" ");
              const remainingTitle = chatTitleWords.slice(3).join(" ");

              return (
                <li
                  key={i}
                  className="hs-accordion"
                  id="users-accordion"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <div className="w-full text-start flex items-center justify-between gap-x-3.5 py-2 px-2.5 text-sm text-[#bac7c5] rounded-lg hover:bg-slate-800 hover:rounded-lg dark:bg-gray-800 dark:hover:bg-gray-900  dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <Link href={`/chat/${chat.id}`}>
                      <button className="flex items-center gap-1">
                        <FiMessageSquare />
                        {truncatedTitle}...
                      </button>
                    </Link>
                    <DropDownSide
                      chatId={chat.id}
                      className="md:block hidden lg:block z-50"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          {!showAll && chats.length > 4 && (
            <button
              className="text-gray-500 items-center gap-2 hover:text-gray-700 flex justify-start text-sm mt-3"
              onClick={() => setShowAll(true)}
            >
              {" "}
              <FaChevronDown />See More
            </button>
          )}
          {showAll && (
            <button
              className="text-gray-500 items-center gap-2 hover:text-gray-700 flex justify-start text-sm mt-3"
              onClick={() => setShowAll(false)}
            >
              <MdArrowUpward /> See Less
            </button>
          )}
        </nav>
    
      </div>
    </div>
  );
}
