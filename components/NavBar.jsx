// "use client";
// import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GiBackwardTime } from "react-icons/gi";
import { PiPuzzlePieceBold } from "react-icons/pi";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { BiSolidUserCircle } from "react-icons/bi";
import SideBarBtn from "./SideBarBtn";

export default async function NavBar() {
  return (
    <div className="flex justify-between py-[.8rem] lg:py-[1rem] px-[1rem] lg:px-[2rem] items-center text-white primary overflow-hidden w-full m-auto">
      <div className="flex text-[20px] lg:text-[20px] items-center gap-2 lg:gap-4 ">
        <h2 className="text-[#9d9ea0] md:text-[#9d9ea0] lg:text-primaryColor flex items-center gap-2 tracking-[3px] font-[800] bg-gradient-to-r from-pink-500 via-pink-600 to-blue-500 bg-clip-text text-transparent ">
          <SideBarBtn />
          ColAi
        </h2>
        <p className="text-[9px] lg:text-[12px] experiment">Experiment</p>
      </div>
      <div className="lg:flex md:flex flex gap-6 text-[18px]">
        <GiBackwardTime
          className="flex md:hidden gap-6 text-[18px] lg:hidden items-center"
          size={25}
        />
        <BiSolidUserCircle className="text-green-600 text-[30px] flex md:hidden gap-6 lg:hidden items-center" />
        <GiBackwardTime className="lg:flex md:flex  text-[18px] hidden" />
        <PiPuzzlePieceBold className="lg:flex md:flex  text-[18px] hidden" />
        <BsFillPatchQuestionFill className="lg:flex md:flex  text-[18px] hidden" />
        <FiSettings className="lg:flex md:flex  text-[18px] hidden" />
        <CgMenuGridR className="lg:flex md:flex  text-[18px] hidden" />
        <BiSolidUserCircle className="text-green-400 text-[30px] lg:flex md:flex  hidden" />
      </div>
    </div>
  );
}
