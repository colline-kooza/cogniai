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
  <>
  <Popover>
  <PopoverTrigger> <GrMoreVertical /></PopoverTrigger>
  <PopoverContent className="text-white z-50  border-none bg-[#000000d6] shadow-2xl rounded-lg">
  <DeleteBtn chatId={chatId} />
  </PopoverContent>
</Popover>

  </>
  );
}
