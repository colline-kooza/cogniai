"use client";
import { useState } from "react";

import { GrMoreVertical } from "react-icons/gr";
import DeleteBtn from "./DeleteBtn";
import EditeBtn from "./EditeBtn";
import { useChat } from "./Context";
import { SelectTrigger, SelectValue } from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function DropDownSide({ chatId }) {
  
  return (
  <div className="">
  <Popover className="z-50">
  <PopoverTrigger> <GrMoreVertical /></PopoverTrigger>
  <PopoverContent className="text-white z-[10000]  border-none  shadow-2xl rounded-lg bg-gray-900 w-[100%]">
  <DeleteBtn chatId={chatId} />
 
  </PopoverContent>
</Popover>

  </div>
  );
}
