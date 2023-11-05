import { GiBackwardTime } from "react-icons/gi";
import { PiPuzzlePieceBold } from "react-icons/pi";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { UserButton, auth } from "@clerk/nextjs";
import SideBarBtn from "./SideBarBtn";
import Link from "next/link";
import DropDown from "./DropDown";
import getChats from "@/libs/getChats";

export default async function NavBar() {
  const { userId } = auth();
  const chats = await getChats(userId);

  return (
    <div className="flex justify-between py-[.8rem] lg:py-[1rem] px-[1rem] lg:px-[2rem] items-center text-white primary overflow-hidden w-full m-auto ">
      <div className="flex text-[20px] lg:text-[20px] items-center gap-2 lg:gap-4 ">
        <h2 className="text-[#9d9ea0] md:text-[#9d9ea0] lg:text-primaryColor flex items-center gap-2 tracking-[3px] font-[800] bg-gradient-to-r from-pink-500 via-pink-600 to-blue-500 bg-clip-text text-transparent ">
          <SideBarBtn chats={chats} />
          ColAi
        </h2>
        <p className="lg:block md:block hidden text-[9px] lg:text-[12px] experiment">
          Experiment
        </p>
      </div>
      <div className="lg:flex md:flex flex gap-6 text-[18px] items-center">
        <Link
          className="text-sm py-1 font-[700] px-6 rounded-[10px] bg-slate-500 text-black hover:bg-orange-500 lg:hidden"
          href="/chat"
        >
          New +
        </Link>
        <div className="lg:hidden md:hidden block">
          <DropDown />
        </div>

        <GiBackwardTime className="lg:flex md:flex  text-[25px] hidden" />
        <PiPuzzlePieceBold className="lg:flex md:flex  text-[25px] hidden" />
        <BsFillPatchQuestionFill className="lg:flex md:flex  text-[25px] hidden" />
        <FiSettings className="lg:flex md:flex  text-[25px] hidden" />
        <CgMenuGridR className="lg:flex md:flex  text-[25px] hidden" />
        <UserButton afterSignOutUrl="/" className=" text-[25px] " />
      </div>
    </div>
  );
}
