import Link from "next/link";
import localFont from "next/font/local";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area";
import getChats from "@/libs/getChats";
const myFont = localFont({ src: "../ProductSans-Light.ttf" });

export default async function SideBar() {
  const chats = await getChats();
  return (
    <div className={myFont.className}>
      <div className="px-[2rem] py-[10px] flex flex-col gap-5 overflow-y-auto">
        <div className="w-[50%]">
          <Link
            className="flex items-center gap-2 bg-primaryColorbg py-[8px] rounded-[20px] justify-center text-white font-[500] text-[14px] leading-[20px] hover:bg-slate-900"
            href="/chat"
          >
            <IoIosAdd size={25} />
            New chat
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-gray-300 font-[500] text-[13px]">Recent</h3>

          <ScrollArea className=" ">
            <div className="text-white font-[500] text-[14px] flex flex-col gap-3 overflow-scroll">
              {chats?.map((chat) => {
                return (
                  <Link
                    key={chat.id}
                    href={`/DetailedPage/${chat.id}`}
                    className="flex gap-3 items-center line-clamp-1 rounded-lg"
                  >
                    <MdOutlineMessage
                      className="bg-primaryColorbg  text-[20px] p-[5px]"
                      size={25}
                    />
                    {chat.prompt}
                  </Link>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
