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
import HomeData from "@/components/HomeData";
import getChats from "@/libs/getChats";

export default function Compo() {
  return (
    <div classNameName="w-full overflow-hidden md:h-[86vh] max-h-[80vh] bg-[#222327] lg:rounded-[20px] md:rounded-[20px] rounded-[0px]">
      <div classNameName="w-[100%] bg-Bg rounded-[20px] font-[500] text-white flex flex-col gap-5 items-center max-h-[100%] px-3">
        <div classNameName="flex flex-col gap-2 p-[1.5rem]">
          <div classNameName="w-[100%] flex justify-between items-center">
            <Image src="/badi.gif" alt="" width={40} height={20} />
            <p classNameName="">
              <VscRefresh size={24} color="lightblue" />
            </p>
          </div>
          <div>
            <h2 classNameName="text-[2.5rem] text-[#e3e3e3] font-[700]">
              Hello again
            </h2>
            <p classNameName="text-[#abadb1] text-[21px] font-[500]">
              Tell me what’s on your mind or pick a suggestion. I have
              limitations and won't always get it right, but your feedback will
              help me to improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
