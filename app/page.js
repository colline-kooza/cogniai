import { TypedScript } from "@/components/TypedScript";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function page() {
  return (
    <div className=" w-[100%] h-screen relative dm">
      <div className="w-[100%] bg h-full flex-col md:flex-row lg:flex-row flex ">
        <div className="lg:w-[60%] md:w-[60%] w-[100%] h-[100%] gap-[3rem] flex flex-col md:gap-[4rem] lg:gap-[4rem] ">
          <div className="lg:ml-[7rem]">
            <img className="w-[20%] object-contain" src="/logo.png" alt="" />
          </div>
          <div className="flex flex-col lg:ml-[7rem] lg:gap-[3rem] gap-[2rem] px-[2rem] lg:px-[4rem] w-[100%] lg:w-[80%]">
            <h1
              id="text3d"
              className="lg:text-6xl text-4xl font-[900] text-slate-100 lg:text-slate-300 tracking-[2px]  roboto"
            >
              ColGPT
            </h1>
            <TypedScript className="lg:text-[20px] text-[23px] text-[#ffffff] lg:text-[#c1c1c1] w-[100%] lg:w-[80%] tracking-[1px] leading-5" />
          </div>
          <div className="lg:px-[4rem] px-[2rem] lg:ml-[7rem] ">
            <Link
              href="/chat"
              className="border  border-green-300 text-green-300 py-[12px] w-[60%] md:w-[30%] lg:w-[30%] flex items-center justify-center gap-3 hover:bg-slate-700 "
            >
              TryColGPT
              <AiOutlineArrowRight />
            </Link>
          </div>
        </div>
        <div className="lg:w-[50%] md:w-[50%] w-[100%] h-[100%] flex flex-col items-center justify-center gap-[2rem]">
          <h1 className="text-3xl font-[700] text-white lg:text-white">
            Get started
          </h1>
          <div className="flex flex-col lg:flex-row  gap-3">
            <Link
              className="py-[10px] px-[80px] bg-blue-700 text-lg font-[700] rounded-[10px] text-white hover:bg-blue-900 animate-pulse"
              href="/chat"
            >
              Log in
            </Link>
            <Link
              className="py-[10px] px-[80px] bg-blue-700 text-lg font-[700] rounded-[10px] text-white hover:bg-blue-900"
              href="/chat"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
