"use client";
import { useState } from "react";

import { GrMoreVertical } from "react-icons/gr";
import DeleteBtn from "./DeleteBtn";
import EditeBtn from "./EditeBtn";
import { useChat } from "./Context";

export default function DropDownSide({ chatId }) {
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
        <div className="lg:w-[50%] w-[40%] h-[10vh] lg:min-h-[15vh] bg-[#424242] absolute left-[50%] top-[10%] lg:top-[30%] z-[100] flex flex-col gap-2 rounded-[12px] justify-center p-5">
          <DeleteBtn chatId={chatId} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
