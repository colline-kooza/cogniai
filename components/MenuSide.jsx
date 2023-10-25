// "use client";
import Link from "next/link";
import localFont from "next/font/local";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area";
const myFont = localFont({ src: "../ProductSans-Light.ttf" });

export default function MenuSide() {
  //   const chats = await getChats();
  return (
    <div
      className={myFont.className}
      class="absolute left-0 top-[0%] lg:hidden w-[90%] h-[100vh] z-30 bg-black"
    >
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
          <h3 className="text-white text-[13px] font-[800]">Recent</h3>

          <ScrollArea className="overflow-auto max-h-[55vh]">
            <div className="text-white font-[500] text-[14px] flex flex-col gap-3">
              <p className="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                w{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                w{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                w{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                w{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Solutaw{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                w{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                w{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                w{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                w{" "}
              </p>
              {/* {chats?.map((chat) => {
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
              })} */}
            </div>
          </ScrollArea>
        </div>
        <div className="w-[100%] h-[10%] absolute bottom-[10%] text-blue-300 text-[10px]  py-[.1rem] px-[1rem] shadow-lg shadow-indigo-500/10 flex-col gap-2 lg:flex ">
          <h2>• Kampala, Uganda</h2>
          <p className="text-coloR">From your IP address • Update location</p>
        </div>
      </div>
    </div>
  );
}
