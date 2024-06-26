"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { VscRefresh } from "react-icons/vsc";
import Image from "next/image";
import { RedirectToSignIn, useUser } from "@clerk/nextjs";

export default function page() {
  const { user, isLoaded, isSignedIn } = useUser();
// console.log(user)
  return (
    <div className="flex flex-col h-screen sm:px-[1rem] lg:py-[1rem] md:px-[1rem] lg:px-[2rem] bg-black lg:rounded-[2rem] md:p-[1rem] p-[1rem]">
      <div className="lg:h-[40%] md:h-[30%] h-[40%] ">
        <div className="flex flex-col gap-2 items-start flex-wrap">
          <div className="w-[100%] flex justify-between items-center">
            <Image
              className="w-auto h-auto"
              src="/badi.gif"
              alt=""
              width={40}
              height={20}
            />
            <p className="">
              <VscRefresh size={24} color="lightblue" />
            </p>
          </div>
          <div className="">
            <h2 className="bg-gradient-to-r from-red-500 via-purple-700 to-blue-900 bg-clip-text text-transparent text-[50px] lg:text-[60px] font-[700]">
            Hello, {user?.firstName}
            </h2>
            <h1 className="text-[#444746] lg:leading-0 leading-[43px] text-[2.5rem] lg:text-[2rem] font-[500] ">
            How can I help you today?
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:h-[40%] lg:h-[45%] h-[40%]">
        <>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={20}
            pagination={{
              clickable: false,
            }}
            modules={[Pagination]}
            className="text-white"
          >
            <SwiperSlide className="bg-[#1e1f20]  rounded-[20px] pb-10 p-[1rem] gap-[2rem]">
              <div className="">
                <h2 className="bg-gradient-to-r from-red-500 via-purple-700 to-blue-900 bg-clip-text text-transparent text-[30px] font-[900] tracking-[.1rem] ">
                  Lastest
                </h2>
              </div>
              <div className="flex flex-col gap-2 lg:mt-[1rem] mt-[1rem]">
                <p className="py-[10px] px-[16px] md:px-[17px] lg:px-[20px] bg-black rounded-3xl w-[90%] ">
                  Economic concepts
                </p>
                <p className="py-[10px] px-[20px] bg-black rounded-[2rem] w-[80%]">
                  complex topic
                </p>
                <p className="py-[10px] px-[20px] bg-black  rounded-[2rem] w-[100%]">
                  compare college majors
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#1e1f20]  rounded-[20px] pb-10 p-[1rem]">
              <h2 className="bg-gradient-to-r from-red-500 via-purple-700 to-blue-900 bg-clip-text text-transparent text-[30px] font-[900] tracking-[.1rem] ">
                Create
              </h2>
              <div className="lg:mt-[1rem] mt-[1rem] flex flex-col gap-2">
                <p className="py-[10px] px-[20px] bg-black rounded-3xl w-[100%]">
                  Interview Questions
                </p>
                <p className="py-[10px] px-[20px] bg-black rounded-[2rem] w-[90%]">
                  Product name Ideas
                </p>
                <p className="py-[10px] px-[20px] bg-black rounded-[2rem] w-[80%]">
                  mocktail recipe
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#1e1f20]   rounded-[20px] pb-10 p-[1rem]">
              <h2 className="bg-gradient-to-l from-purple-800 via-blue-800 to-yellow-100 bg-clip-text text-transparent text-[30px] font-[900] tracking-[.1rem]">
                Explore
              </h2>
              <div className="lg:mt-[1rem] mt-[1rem] flex flex-col gap-2">
                <p className="py-[10px] px-[20px] bg-black rounded-3xl w-[70%]">
                  Education{" "}
                </p>
                <p className="py-[10px] px-[20px] bg-black rounded-[2rem] w-[80%]">
                  plant care tips{" "}
                </p>
                <p className="py-[10px] px-[20px] bg-black rounded-[2rem] w-[80%]">
                  cooking trends
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}
