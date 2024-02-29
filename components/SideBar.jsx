import Link from "next/link";
import localFont from "next/font/local";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area";
import getChats from "@/libs/getChats";
import { auth } from "@clerk/nextjs";
import DropDown from "./DropDown";
import DropDownSide from "./DropDownSide";
const myFont = localFont({ src: "../ProductSans-Light.ttf" });

export default async function SideBar() {
  const { userId } = auth();
  const chats = await getChats(userId);
  
  return (
    <div className={myFont.className} class="">
      <div className="px-[2rem] py-[10px] flex flex-col gap-5 overflow-y-auto">
        <div className="w-[60%]">
          <Link
            className="flex items-center gap-2 bg-[#17191c] py-[8px] rounded-[20px] justify-center text-white font-[500] text-[14px] leading-[20px] hover:bg-slate-900"
            href="/chat"
          >
            <IoIosAdd size={25} />
            New chat
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-gray-300 font-[500] text-[13px]">Recent</h3>
          <ScrollArea className="overflow-y-auto min-h-[55vh]">
            <div className="text-white font-[500] text-[14px] flex flex-col gap-3">
              {
                chats && ( chats.map((chat) => {
                  return (
                    <div className="flex justify-between items-center overflow-y-auto">
                      <Link
                        key={chat.id}
                        href={`/chat/DetailedPage/${chat.id}`}
                        className="flex gap-3 items-center line-clamp-1 rounded-lg  hover:rounded-md hover:animate-pulse"
                      >
                        <MdOutlineMessage
                          className="bg-primaryColorbg line-clamp-1 text-[20px] p-[5px] shrink-0"
                          size={25}
                        />
                        {chat.prompt}
                      </Link>
                      <DropDownSide
                        chatId={chat.id}
                        className="md:block hidden lg:block"
                      />
                    </div>
                  );
                }))
              }
            </div>
          </ScrollArea>
        </div>
        <div className="w-[100%] h-[10%] absolute bottom-[9%] text-blue-200 text-[12px]  py-[.1rem] px-[1rem] shadow-lg  flex-col gap-2 lg:flex ">
          <h2>• Kampala, Uganda</h2>
          <p className="text-coloR">From your IP address • Update location</p>
        </div>
      </div>
    </div>
  );
}
