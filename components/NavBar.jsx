import React from "react";
import { FiMenu } from "react-icons/fi";
import { GiBackwardTime } from "react-icons/gi";
import { PiPuzzlePieceBold } from "react-icons/pi";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { BiSolidUserCircle } from "react-icons/bi";

export default async function NavBar() {
  return (
    <div className="flex justify-between py-[1rem] px-[2rem] items-center text-white primary">
      <div className="flex text-[20px] items-center gap-4 ">
        <FiMenu />
        <h2 className="text-primaryColor">ColAi</h2>
        <p className="text-[12px] experiment">Experiment</p>
      </div>
      <div className="flex gap-6 text-[18px] ">
        <GiBackwardTime />
        <PiPuzzlePieceBold />
        <BsFillPatchQuestionFill />
        <FiSettings />
        <CgMenuGridR />
        <BiSolidUserCircle className="text-green-400 text-[30px]" />
      </div>
    </div>
  );
}
