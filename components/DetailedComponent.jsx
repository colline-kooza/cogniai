    "use client";
    import { useEffect, useRef, useState } from "react";
    import { BiShareAlt } from "react-icons/bi";
    import { ScrollArea } from "@/components/ui/scroll-area";
    import Image from "next/image";
    import { FaArrowCircleDown, FaRegThumbsUp, FaThumbsDown } from "react-icons/fa";
    import { PiWarningCircleBold } from "react-icons/pi";
    import { CgMoveRight } from "react-icons/cg";
    import { LuMoreVertical } from "react-icons/lu";
    import { FcGoogle } from "react-icons/fc";
    import { UserButton } from "@clerk/nextjs";
    import { useChat } from "@/components/Context";
    import EditeBtn from "@/components/EditeBtn";
    
    export default async function DetailedPage({ id, conversations, singleChat }) {
      const { setChatId } = useChat();
      setChatId(id);
    
      const [showScrollDownButton, setShowScrollDownButton] = useState(false);
      const scrollAreaRef = useRef(null);
    
      useEffect(() => {
        if (conversations?.length > 1) {
          setShowScrollDownButton(true);
        } else {
          setShowScrollDownButton(false);
        }
      }, [conversations]);
    
      const handleScrollDown = () => {
        if (scrollAreaRef.current) {
          const scrollHeight = scrollAreaRef.current.scrollHeight;
          scrollAreaRef.current.scrollTo({
            top: scrollHeight,
            behavior: 'smooth' 
          });
        }
      };
    
      const handleScroll = () => {
        if (scrollAreaRef.current) {
          const scrollTop = scrollAreaRef.current.scrollTop;
          const scrollHeight = scrollAreaRef.current.scrollHeight;
          const clientHeight = scrollAreaRef.current.clientHeight;
          const isAtBottom = scrollHeight - scrollTop === clientHeight;
        }
      };
    
      return (
        <div className="">
          <div className="w-[100%] overflow-auto max-h-[80vh] bg-[#0C0C0C] gap-9 rounded-[20px]" onScroll={handleScroll} ref={scrollAreaRef}>
            {conversations?.map((conv) => {
              const sections = conv.response.split("**");
              return (
                <ScrollArea
                  key={conv.id}
                  className="w-[100%] px-[.8rem] py-[1rem] rounded-lg bg-[#0C0C0C]"
                >
                  <div className="lg:min-h-[80vh] sm:h-[80vh] rounded-[20px] font-[500] text-white flex flex-col items-center">
                    <div className="flex p-4 lg:p-[2rem] w-[100%] ">
                      <div className="flex items-center gap-[.8rem] min-w-[100%] ml-2">
                        <UserButton
                          afterSignOutUrl="/"
                          className=" text-[25px] lg:flex md:flex hidden"
                        />
                        <EditeBtn
                          initialValue={conv.prompt}
                          onSave={(editedPrompt) => { }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between rounded-[20px] sm:gap-[2rem] py-[2rem] bg-[#011222] w-full">
                      <div className="flex px-[1rem] lg:px-[2rem] justify-between ">
                        <div className="relative max-w-[50px] lg:max-w-[55px] max-h-[400px] lg:max-h-[55px]">
                          <Image
                            className="w-auto h-auto"
                            src="/badi.gif"
                            alt=""
                            width={30}
                            height={20}
                            objectFit="cover"
                          />
                        </div>
                        <div style={{ flex: 1 }}>
                          {sections.map((section, index) => {
                            if (index % 2 === 0) {
                              return (
                                <h2
                                  key={index}
                                  className="px-[9px] pb-[1.4rem] lg:text-lg font-normal leading-7 text-lg"
                                >
                                  {section}
                                </h2>
                              );
                            } else {
                              return (
                                <p
                                  key={index}
                                  className="px-[9px] mb-2 text-lg lg:text-lg font-bold text-blue-100"
                                >
                                  {section}
                                </p>
                              );
                            }
                          })}
                        </div>
                      </div>
                      <div className="flex flex-col px-[2rem] py-[.8rem] gap-5 ">
                        <div className="w-[100%] h-[60%] bg-primaryColorbggg flex justify-between items-center   rounded-[20px] text-[13px]">
                          <div>
                            <h4 className="flex flex-col">Sources</h4>
                            <a className="text-coloR" href="">
                              collinzdev.com
                            </a>
                          </div>
                          <div>
                            <PiWarningCircleBold size={20} />
                          </div>
                        </div>
                        <div className="flex gap-4 text-gray-300 justify-start">
                          <FaRegThumbsUp />
                          <FaThumbsDown />
                          <CgMoveRight />
                          <BiShareAlt />
                          <FcGoogle />
                          <LuMoreVertical />
                        </div>
                      </div>
                    </div>
                  </div>
    
                </ScrollArea>
              );
            })}
            {showScrollDownButton && (
              <button
                className="fixed rounded-full text-lg bg-gray-800 hover:bg-slate-700 text-white px-3 py-3 lg:right-[40%] lg:bottom-[24%] bottom-[22%] right-[50%] shadow-xl"
                style={{
                  transform: 'translate(50%, 50%)',
                }}
                onClick={handleScrollDown}
              >
                <FaArrowCircleDown size={22} />
              </button>
            )}
          </div>
        </div>
      );
    }
    