"use client";
import React, { useState } from "react";
import { GoPaperAirplane } from "react-icons/go";
import { AiOutlineAudio } from "react-icons/ai";
import { LuImagePlus } from "react-icons/lu";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
export default function SearchForm() {
  const { userId } = useAuth();
  const router = useRouter();

  const [chatId, setChatId] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  async function onSubmit(data) {
    setLoading(true);
    const search = data.search;
    try {
      const res = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search }),
      });
      if (res.ok) {
        const resultJSON = await res.json();
        const botData = resultJSON.botData;
        const botDataObject = {
          prompt: botData.prompt,
          response: botData.response,
          userId,
        };
        if (chatId) {
          const conv = {
            ...botDataObject,
            chatId,
          };

          const response = await fetch("http://localhost:3000/api/chats", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(conv),
          });
          if (response.ok) {
            window.location.reload();
          }
        } else {
          const response = await fetch("http://localhost:3000/api/chats", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(botDataObject),
          });
          if (response.ok) {
            const resultJSON = await response.json();
            const responseId = resultJSON.chatId;
            setChatId(responseId);
            router.push(`/chat/DetailedPage/${responseId}`);
          }
        }
        setLoading(false);
        reset();
      } else {
        throw new Error("something went wrong");
      }
    } catch (error) {
      prompt = "check your internet connections";
    }
  }
  return (
    <div className="flex flex-col gap-2 px-3 lg:px-0 md:px-0 ml-[.6rem] lg:ml-[2rem] md:ml-[2rem] py-[14px]">
      <form
        className="flex gap-5 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <LuImagePlus size={20} className="font-300 text-gray-300" />
        <input
          className="w-[95%] md:w-[90%] h-[8vh] relative p-[18px] rounded-[30px] ring ring-FormColorbggg ring-offset-0  bg-[#131314] text-white"
          type="search"
          placeholder="Enter a prompt here"
          {...register("search")}
        />
        <button type="submit">
          <GoPaperAirplane
            className="text-blue-300 hover:text-purple-600"
            size={20}
          />
        </button>
        <div className="absolute right-[17%] md:right-[7%] lg:right-[7%] top-[29px] lg:top-[25px]">
          {loading ? (
            <div className="">
              <Image src="/loading.gif" alt="" width={30} height={20} />
            </div>
          ) : (
            <AiOutlineAudio color="white" size={22} />
          )}
        </div>
      </form>
      <p className="text-gray-400 text-sm md:text-[10px] lg:text-[10px] flex items-center justify-center text-center">
        ColAi may display inaccurate or offensive information that doesn’t
        represent collinz views.
      </p>
    </div>
  );
}
