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
import { UserButton } from "@clerk/nextjs";

export default async function DetailedPage({ params: { id } }) {
  const singleChat = await getSingleChat(id);
  const conversations = singleChat.conversations;

  return (
    <div className="">
      <div className="w-[100%]overflow-hidden overflow-auto max-h-[80vh] bg-[#222327] gap-9 rounded-[20px]">
        {conversations.length > 0 ? (
          conversations.map((conv) => {
            return (
              <ScrollArea
                key={conv.id}
                className="w-[100%] px-[.8rem] py-[1rem] rounded-lg "
              >
                <div className="lg:h-[80vh] sm:h-[80vh] rounded-[20px] font-[500] text-white flex flex-col items-center">
                  <div className="flex justify-between py-[2rem] w-[100%]">
                    <div className="flex items-center gap-[.8rem]">
                      <UserButton
                        afterSignOutUrl="/"
                        className=" text-[25px] lg:flex md:flex  hidden"
                      />
                      <h2>{conv.prompt}</h2>
                    </div>
                    <a href="/chat">
                      <FiEdit2 className="font-[700]" size={20} />
                    </a>
                  </div>
                  <div className="flex flex-col justify-between rounded-[20px] sm:gap-[2rem] py-[2rem] h-[100%] bg-[#131314]">
                    <div className="flex justify-end mr-[1rem]">
                      <div></div>
                      <div className="flex gap-[2rem] items-start">
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full text-[14px] hidden "
                        >
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="font-[500]">
                              View other drafts?
                            </AccordionTrigger>
                            <AccordionContent>loading...</AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        <BiSolidVolumeFull color="white  pt-[3rem]" size={24} />
                      </div>
                    </div>
                    <div className="flex px-[1rem] lg:px-[2rem] justify-between ">
                      <div className="relative max-w-[50px] lg:max-w-[55px] max-h-[400px] lg:max-h-[55px]">
                        <Image
                          src="/badi.gif"
                          alt=""
                          width={30}
                          height={20}
                          objectFit="cover"
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 className="px-[9px] pb-[4rem] text-[1rem]">
                          {conv.response}
                        </h4>
                      </div>
                    </div>
                    <div className="flex flex-col px-[2rem] py-[.8rem] gap-5 ">
                      <div className="w-[100%] h-[60%] bg-primaryColorbggg flex justify-between items-center   rounded-[20px] text-[13px]">
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
                </div>
              </ScrollArea>
            );
          })
        ) : (
          <div className="w-[100%] h-[100vh] text-center py-4 flex items-center justify-center text-orange-700 font-[400]">
            <h1> some thing wrong happened , try Again 😒😒</h1>
          </div>
        )}
      </div>
    </div>
  );
}
