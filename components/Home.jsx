import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import localFont from "next/font/local";
import {
  BiShareAlt,
  BiSolidChevronDown,
  BiSolidUserCircle,
  BiSolidVolumeFull,
} from "react-icons/bi";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { VscRefresh } from "react-icons/vsc";
import { FaRegThumbsUp, FaThumbsDown } from "react-icons/fa";
import { PiWarningCircleBold } from "react-icons/pi";
import { CgMoveRight } from "react-icons/cg";
import { LuMoreVertical } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

const myFont = localFont({ src: "../sans2.woff2" });
const myFont2 = localFont({ src: "../sans2.woff2" });

export default function Home() {
  return (
    <div className={myFont.className} class=" w-[100%] h-[90vh]">
      <div className="w-[100%] h-[86vh] bg-primaryColorbggg rounded-[20px] overflow-hidden ">
        <div className="w-[100%] h-[85vh]  bg-Bg rounded-[20px] font-[500] text-white flex flex-col items-center">
          <ScrollArea className="w-[100%] h-[100%] rounded-md flex ">
            <div className=" flex flex-col gap-2 p-[1.5rem]">
              <div className="w-[100%] flex  justify-between items-center">
                <Image src="/badi.gif" alt="" width={40} height={20} />
                <p className="">
                  <VscRefresh size={24} color="lightblue" />
                </p>
              </div>
              <div className="">
                <h2 className="text-[2.5rem] font-[700] text-helo">
                  Hello again
                </h2>
                <p className="text-slate-300 text-[20px] font-[500]">
                  Tell me what’s on your mind or pick a suggestion. I have
                  limitations and won't always get it right, but your feedback
                  will help me to improve.
                </p>
              </div>
            </div>
            <div className="w-[100%]  min-h-[100vh] flex flex-col gap-1 relative">
              <div className="flex px-[1rem] gap-3 items-center justify-center ">
                <div className="flex gap-8 items-center justify-center  w-[100%]">
                  <div className="w-[100%] h-[40vh] bg-blackG rounded-[30px] flex flex-col gap-4 justify-center px-[1rem]">
                    <h2 className="text-[25px] text-2xl font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-blue-500 bg-clip-text text-transparent">
                      Understand
                    </h2>
                    <p className="px-[7px] text-[14px] py-[10px] bg-primaryColorbggg rounded-[20px] flex justify-center items-center w-[90%]">
                      advancements in technology
                    </p>
                    <p className="px-[7px] text-[14px] py-[10px] bg-primaryColorbggg rounded-[20px] flex justify-center items-center w-[70%]">
                      debug python code{" "}
                    </p>
                    <p className="px-[7px] text-[14px] py-[10px] bg-primaryColorbggg rounded-[20px] flex justify-center items-center w-[60%]">
                      how something works
                    </p>
                  </div>
                  <div className="w-[100%] h-[40vh] bg-blackG rounded-[30px] flex flex-col gap-4 justify-center px-[1rem]">
                    <h2 className="text-[25px] text-2xl font-bold bg-gradient-to-r from-purple-500 via-red-600 to-blue-500 bg-clip-text text-transparent">
                      Create
                    </h2>
                    <p className="px-[7px] text-[14px] py-[10px] bg-primaryColorbggg rounded-[20px] flex justify-center items-center w-[90%]">
                      Taglines for my store
                    </p>
                    <p className="px-[7px] text-[14px] py-[10px] bg-primaryColorbggg rounded-[20px] flex justify-center items-center w-[70%]">
                      out-of-office message{" "}
                    </p>
                    <p className="px-[7px] text-[14px] py-[10px] bg-primaryColorbggg rounded-[20px] flex justify-center items-center w-[60%]">
                      revise my writing
                    </p>
                  </div>
                  <div className="w-[100%] h-[40vh] bg-blackG rounded-[30px] flex flex-col gap-4 justify-center px-[1rem]">
                    <h2 className="text-[25px] text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 bg-clip-text text-transparent">
                      Explore
                    </h2>
                    <p className="px-[7px] text-[14px] py-[10px] bg-primaryColorbggg rounded-[20px] flex justify-center items-center w-[60%]">
                      food hotspots
                    </p>
                    <p className="px-[7px] text-[14px] py-[10px] bg-primaryColorbggg rounded-[20px] flex justify-center items-center w-[60%]">
                      meal planning
                    </p>
                    <p className="px-[7px] text-[14px] py-[10px] bg-primaryColorbggg rounded-[20px] flex justify-center items-center w-[60%]">
                      career paths
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-24 w-[100%] h-[23vh]  flex flex-col px-[2rem] py-[.8rem] gap-5">
                <div className="w-[100%] h-[60%] flex justify-between rounded-[20px]  p-[1rem] text-[13px]">
                  <div>
                    <h4 className="flex flex-col">Sources</h4>
                    <a className="text-coloR" href="">
                      collinzdev.com
                    </a>
                  </div>
                  <div>
                    <PiWarningCircleBold size={20} />
                  </div>
                </div>
                <div className="flex gap-4 text-gray-300 justify-start">
                  <FaRegThumbsUp />
                  <FaThumbsDown />
                  <CgMoveRight />
                  <BiShareAlt />
                  <FcGoogle />
                  <LuMoreVertical />
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
