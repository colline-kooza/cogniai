"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MenuSide from "./MenuSide";

export default function SideBarBtn() {
  const [showSideBar, setShowSideBar] = useState(false);
  function changeShow() {
    setShowSideBar(!showSideBar);
  }
  return (
    <div className="flex flex-col">
      <button className="text-white" onClick={changeShow}>
        <FiMenu size={25} />
      </button>

      {showSideBar ? (
        <div className="lg:hidden absolute left-[0%] top-[14%] h-[100vh] z-[120] w-[100%] ">
          <MenuSide />
        </div>
      ) : (
        <div className="absolute left-[-100px] ">
          <MenuSide />
        </div>
      )}
    </div>
  );
}
