import { Skeleton } from "@/components/ui/skeleton"; 
import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
     <div className="flex flex-col space-x-4 w-full h-screen p-[3.5rem] gap-6">
      <div className="flex w-full">
      <div className="w-[8%]">
      <Image src="/loading.gif" alt="" width={40} height={40}/>
      </div>
     <div className="w-[92%] flex flex-col gap-2">
    <Skeleton className="h-[15px] w-[85%] rounded-xl bg-gray-700" /> 
    <Skeleton className="h-[15px] w-[55%] rounded-xl bg-gray-700" /> 
    <Skeleton className="h-[15px] w-[30%] rounded-xl bg-gray-700" /> 
     </div>
    </div>
    </div>
  );
}
