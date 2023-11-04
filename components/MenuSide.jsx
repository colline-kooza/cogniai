import Link from "next/link";
import localFont from "next/font/local";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@clerk/nextjs";
import getChats from "@/libs/getChats";
const myFont = localFont({ src: "../ProductSans-Light.ttf" });

export default async function MenuSide() {
  const { userId } = useAuth();
  const chats = await getChats(userId);
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
        <div className="flex flex-col gap-5">
          <h3 className="text-white text-[13px] font-[800]">Recent</h3>
        </div>
        <div className="w-[80%] h-[10%] absolute bottom-[6%]  bg-gradient-to-r from-pink-500 via-pink-600 to-blue-500 bg-clip-text text-transparent  text-[10px]  py-[.1rem] px-[.3rem] flex-col gap-3 lg:flex ">
          <h2>• Kampala, Uganda</h2>
          <p className="text-coloR">From your IP address • Update location</p>
        </div>
      </div>
    </div>
  );
}
