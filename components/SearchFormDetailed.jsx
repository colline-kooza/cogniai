"use client";
import React, { useState } from "react";
import { GoPaperAirplane } from "react-icons/go";
import { AiOutlineAudio } from "react-icons/ai";
import { LuImagePlus } from "react-icons/lu";
import { useForm } from "react-hook-form";
import Image from "next/image";
export default function SearchFormDetailed({ transporter }) {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  async function onSubmit(data) {
    setLoading(true);
    const search = data.search;
    const res = await fetch(process.env.NEXT_PUBLIC_CHATS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search }),
    });
    if (res.ok) {
      const resultJSON = await res.json();
      const botData = JSON.parse(resultJSON.botData);
      const botDataObject = {
        prompt: botData.prompt,
        response: botData.response,
      };
      const response = await fetch(process.env.NEXT_PUBLIC_CHATS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(botDataObject),
      });
      setLoading(false);
      reset();
    } else {
      throw new Error("something went wrong");
    }
  }
  return (
    <div className="flex flex-col gap-2 ml-[2rem]  py-[14px]">
      <form
        className="flex gap-5 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <LuImagePlus size={20} className="font-300 text-gray-300" />
        <input
          className="w-[95%] h-[8vh] relative p-[18px] rounded-[30px] ring ring-FormColorbggg ring-offset-0  bg-primaryColorbg text-white"
          type="search"
          placeholder="Enter a prompt here"
          {...register("search")}
        />
        <button type="submit">
          <GoPaperAirplane className="text-FormColorbggg" size={20} />
        </button>
        <div className="absolute right-[7%] top-[25px]">
          {loading ? (
            <div className="">
              <Image src="/loading.gif" alt="" width={30} height={20} />
            </div>
          ) : (
            <AiOutlineAudio color="white" size={22} />
          )}
        </div>
      </form>
      <p className="text-gray-300 text-[10px] flex items-center justify-center">
        ColAi may display inaccurate or offensive information that doesn’t
        represent collinz views.
      </p>
    </div>
  );
}
