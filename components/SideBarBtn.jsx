"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MenuSide from "./MenuSide";

export default function SideBarBtn() {
  const [showSideBar, setShowSideBar] = useState(false);
  // console.log(showSideBar);
  function changeShow() {
    setShowSideBar(!showSideBar);
    // console.log("btn clicked");
  }
  return (
    <div className="flex flex-col">
      <button onClick={changeShow}>
        <FiMenu size={25} />
      </button>
      {showSideBar ? (
        <div className="lg:hidden absolute left-[0%] bg-white top-[14%] h-[100vh] z-[120] w-[100%] ">
          <MenuSide />
        </div>
      ) : (
        <div className="absolute left-[-1000px] ">
          <MenuSide />
        </div>
      )}
    </div>
  );
}
