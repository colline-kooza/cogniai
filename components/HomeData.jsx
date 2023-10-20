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
import { VscRefresh } from "react-icons/vsc";
import { FaRegThumbsUp, FaThumbsDown } from "react-icons/fa";
import { PiWarningCircleBold } from "react-icons/pi";
import { CgMoveRight } from "react-icons/cg";
import { LuMoreVertical } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import SearchForm from "@/components/SearchForm";

const myFont = localFont({ src: "../sans2.woff2" });
const myFont2 = localFont({ src: "../sans2.woff2" });
export default function HomeData({ data }) {
  console.log(data);
  return (
    <div className="w-[100%] h-[86vh] bg-primaryColorbggg rounded-[20px]  ">
      <div className="h-[85vh] rounded-[20px] font-[500] text-white flex flex-col items-center">
        <ScrollArea className="w-[100%] h-[100%] px-[2.5rem] pb-[5rem] flex bg-slate-700 rounded-lg">
          {data.map((conv) => {
            return conv.conversations.map((chat) => {
              return (
                <>
                  <div className=" flex justify-between px-[.7rem] py-[2rem]">
                    <div className="flex items-center gap-[.8rem]">
                      <BiSolidUserCircle className="text-green-400 text-[30px]" />
                      <h2>{chat.prompt}</h2>
                    </div>
                    <a href="/">
                      <FiEdit2 className="font-[700]" size={20} />
                    </a>
                  </div>
                  <div className=" bg-slate-900 flex flex-col justify-between rounded-[20px]">
                    <div className="flex justify-end mr-[1rem]">
                      <div></div>
                      <div className="flex gap-[2rem] items-start">
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full text-[14px] "
                        >
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="font-[500]">
                              View other drafts?
                            </AccordionTrigger>
                            <AccordionContent>loading...</AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        <BiSolidVolumeFull color="white pt-[1rem]" size={26} />
                      </div>
                    </div>
                    <div className="flex px-[2rem] justify-between">
                      <div className="relative max-w-[50px] lg:max-w-[55px] max-h-[400px] lg:max-h-[55px]">
                        <Image
                          src="/badi.gif"
                          alt=""
                          // fill
                          // className="object-cover w-full h-full"
                          width={40}
                          height={20}
                          objectFit="cover"
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p className="px-[9px] pb-[4rem] text-[1rem]">
                          {chat.response}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col px-[2rem] py-[.8rem] gap-5">
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
                </>
              );
            });
          })}
        </ScrollArea>
      </div>
     
    </div>
  );
}
