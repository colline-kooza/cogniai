"use client";
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
import { FiEdit2 } from "react-icons/fi";
import { FaRegThumbsUp, FaThumbsDown } from "react-icons/fa";
import { PiWarningCircleBold } from "react-icons/pi";
import { CgMoveRight } from "react-icons/cg";
import { LuMoreVertical } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import getSingleChat from "@/libs/getSingleChat";
import SearchFormDetailed from "@/components/SearchFormDetailed";

export default async function DetailedPage({ params: { id } }) {
  const singleChat = await getSingleChat(id);
  return (
    <div class=" w-[100%] h-[90vh] relative">
      <div className="w-[100%] h-[86vh] bg-primaryColorbggg rounded-[20px] overflow-hidden ">
        <div className="w-[100%] h-[85vh]  bg-Bg rounded-[20px] font-[500] text-white flex flex-col items-center">
          <ScrollArea className="w-[100%] h-[100%] rounded-md flex ">
            <div className=" flex justify-between px-[.7rem] py-[2rem]">
              <div className="flex gap-[1rem]">
                <BiSolidUserCircle className="text-green-400 text-[30px]" />
                <h2 className="">{singleChat.prompt}</h2>
              </div>
              <a href="">
                <div>
                  <FiEdit2 className="font-[700]" size={20} />
                </div>
              </a>
            </div>
            <div className="w-[95%] min-h-[100vh] bg-primaryColorbg ml-[1.5rem] flex flex-col rounded-[20px] gap-1 relative">
              <div className="flex justify-end mr-[1rem]">
                <div></div>
                <div className="flex gap-[2rem] items-center">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full text-[14px] "
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="font-[500]">
                        Veiw other drafts?
                      </AccordionTrigger>
                      <AccordionContent>loading...</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <BiSolidVolumeFull color="white" size={26} />
                </div>
              </div>
              <div className="flex p-[1.7rem] mr-[10rem] gap-3 ">
                <div className="w-[40%] flex flex-col gap-3 items-center">
                  <Image src="/badi.gif" alt="" width={40} height={20} />
                  <p className="bg-primaryColorbgg px-[9px] py-[4px] text-[9px] rounded-[50%] font-[800]">
                    1
                  </p>
                </div>
                <div>
                  <h2 className="font-[400] text-sm tracking-[1px] leading-[27px]">
                    {singleChat.response}
                  </h2>
                </div>
              </div>
              <div className="absolute bottom-24 w-[100%] h-[23vh]  flex flex-col px-[2rem] py-[.8rem] gap-5">
                <div className="w-[100%] h-[60%] bg-primaryColorbggg flex justify-between rounded-[20px]  p-[1rem] text-[13px]">
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
        <div className="w-[72%] h-[14vh] bg-primaryColorbggg  fixed bottom-3 rounded-b-[39px]">
          <SearchFormDetailed />
        </div>
      </div>
    </div>
  );
}
