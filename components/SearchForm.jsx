"use client";
import React, { useState, useEffect } from "react";
import { GoPaperAirplane } from "react-icons/go";
import { LuImagePlus } from "react-icons/lu";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

export default function SearchForm() {
  // const [chatId, setChatId] = useState(null);
  //  console.log(chatId)
  const { userId } = useAuth();
  const router = useRouter();
  const url = usePathname();
  const parts = url.split('/');
  const id = parseInt(parts[3]);
  // console.log(id)
  // useEffect(()=>{
    // setChatId
// },[])

  useEffect(() => {
    const storedChatIds = JSON.parse(localStorage.getItem("chatIds")) || [];
    console.log(storedChatIds)
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const search = data.search;
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CHAT, {
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
        const storedChatIds = JSON.parse(localStorage.getItem("chatIds")) || []
        // console.log(storedChatIds)
        if (storedChatIds.includes(id))  {
          const conv = {
            ...botDataObject,
            id,
          };
          console.log(conv)
          const response = await fetch(process.env.NEXT_PUBLIC_CHATS, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(conv),
          });
          if (response.ok) {
            console.log(response)
            reset();
            window.location.reload();
          }
        } else {
          const response = await fetch(process.env.NEXT_PUBLIC_CHATS, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(botDataObject),
          });
          if (response.ok) {
            console.log(response)
            reset();
            const resultJSON = await response.json();
            const responseId = resultJSON.chatId;
            router.push(`${process.env.NEXT_PUBLIC_LOCALHOST}/${responseId}`);
            setLoading(false);
            
            const storedChatIds = JSON.parse(localStorage.getItem("chatIds")) || [];
            const updatedChatIds = [...storedChatIds, responseId]; 
            localStorage.setItem("chatIds", JSON.stringify(updatedChatIds));
          } else {
            reset();
            setLoading(false);
          }
        }
      } else {
        setLoading(false);
        reset();
        throw new Error("something went wrong");
      }
    } catch (error) {
      setLoading(false);
      prompt = "check your internet connections";
    }
  }

  return (
    <div className="flex flex-col gap-2 px-3 lg:px-0 md:px-0 ml-[.6rem] lg:ml-[2rem] md:ml-[2rem] py-[14px]">
      <form className="flex gap-3 items-center" onSubmit={handleSubmit(onSubmit)}>
        <LuImagePlus size={20} className="font-300 text-gray-300" />
        <input
          className="w-[95%] md:w-[100%] h-[9vh] relative p-[18px] rounded-[30px] ring ring-FormColorbggg ring-offset-0 bg-[#131314] text-white outline-none"
          type="search"
          placeholder="Enter a prompt here"
          {...register("search")}
          required
        />
        <button type="submit">
          <GoPaperAirplane className="text-blue-300 hover:text-purple-600" size={24} />
        </button>
        <div className="absolute right-[17%] md:right-[7%] lg:right-[7%] top-[30px] lg:top-[25px]">
          {loading && (
            <div className="">
              <Image className="w-[40px] h-[40px]" src="/loading.gif" alt="" width={30} height={20} />
            </div>
          )}
        </div>
      </form>
      <p className="text-gray-400 text-sm md:text-[10px] lg:text-[10px] flex items-center justify-center text-center">
        ColAi may display inaccurate or offensive information that doesn’t represent collinz views.
      </p>
    </div>
  );
}
