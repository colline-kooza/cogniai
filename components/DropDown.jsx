"use client";
import Link from "next/link";
import { useState } from "react";

import { GrMoreVertical } from "react-icons/gr";
import DeleteBtn from "./DeleteBtn";
import EditeBtn from "./EditeBtn";

export default function DropDown() {
  const [popUp, setPop] = useState(false);
  function changePop() {
    setPop(!popUp);
  }
  return (
    <div className="flex flex-col ">
      <button onClick={changePop}>
        <GrMoreVertical />
      </button>
      {popUp ? (
        <div className="lg:w-[50%] w-[40%] h-[10vh] lg:h-[15vh] bg-[#424242] absolute left-[50%] top-[10%] lg:top-[30%] z-[100] flex flex-col gap-2 rounded-[12px] justify-center p-5">
          <DeleteBtn />
          <EditeBtn />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
