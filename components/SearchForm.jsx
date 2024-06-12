"use client";
import React, { useState, useEffect } from "react";
import { GoPaperAirplane } from "react-icons/go";
import { LuImagePlus } from "react-icons/lu";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { RiImageAddLine } from "react-icons/ri";
import { UploadButton } from "@/utils/uploadThing";
// import { Input } from "./ui/input";
import { Skeleton } from "./ui/skeleton";
import { Sparkle } from "lucide-react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { Input } from "./ui/input";

export default function SearchForm() {
  const [image, setImage] = useState("");
  // console.log(image)
  const { userId } = useAuth();
  const router = useRouter();
  const url = usePathname();
  const parts = url.split('/');
  const id = parseInt(parts[3]);

  // const handleFileChange = async (e) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (event) => {
  //       setImage(event.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // console.log(file)
    const image = file.name
    setImage(image);
  };

  useEffect(() => {
    const storedChatIds = JSON.parse(localStorage.getItem("chatIds")) || [];
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data ) {
    setLoading(true);
    const search = data.search;
    try {
      if (image) {
        const response = await fetch(process.env.NEXT_PUBLIC_IMAGE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image , search }),
        });
        if (response.ok) {
        console.log(response)
        const data =await response.json()
        console.log(data)
        setImage("")
        const botData = {
          prompt: data.botData.prompt,
          response: data.botData.response,
          userId,
        };
        // console.log(botData)
        const storedChatIds = JSON.parse(localStorage.getItem("chatIds")) || [];
        if (storedChatIds.includes(id)) {
          const conv = {
            ...botData,
            id,
          };
          const response = await fetch(process.env.NEXT_PUBLIC_CHATS, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(conv),
          });
          if (response.ok) {
            reset();
            window.location.reload();
          }
        } else {
          const response = await fetch(process.env.NEXT_PUBLIC_CHATS, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(botData),
          });
          if (response.ok) {
            reset();
            const resultJSON = await response.json();
            const responseId = resultJSON.chatId;
            router.push(`${process.env.NEXT_PUBLIC_LOCALHOST}/${responseId}`);
            setLoading(false);
  
            const updatedChatIds = [...storedChatIds, responseId];
            localStorage.setItem("chatIds", JSON.stringify(updatedChatIds));
          } else {
            reset();
            setLoading(false);
          }
        }
        }else {
       console.log("something wrong happened ")
       toast.error("Failed to Process Image 😒")
        }
      }else{
        const res = await fetch(process.env.NEXT_PUBLIC_CHAT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ search, image }),
        });
    
        if (res.ok) {
          const resultJSON = await res.json();
          const botData = resultJSON.botData;
          const botDataObject = {
            prompt: botData.prompt,
            response: botData.response,
            userId,
          };
          const storedChatIds = JSON.parse(localStorage.getItem("chatIds")) || [];
          if (storedChatIds.includes(id)) {
            const conv = {
              ...botDataObject,
              id,
            };
            const response = await fetch(process.env.NEXT_PUBLIC_CHATS, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(conv),
            });
            if (response.ok) {
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
              reset();
              const resultJSON = await response.json();
              const responseId = resultJSON.chatId;
              router.push(`${process.env.NEXT_PUBLIC_LOCALHOST}/${responseId}`);
              setLoading(false);
    
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
          throw new Error("Something went wrong");
        }
      }

    } catch (error) {
      setLoading(false);
      console.error(error);
      prompt = "Check your internet connection";
    }
  }
  

  return (
    <div className="flex flex-col gap-2 px-3 lg:px-0 md:px-0 ml-[.6rem] lg:ml-[2rem] md:ml-[2rem] py-[14px]">
     {
      loading ? (
      <>
      <div className="flex flex-col space-x-4 w-full h-screen p-2 gap-6">
        <div className="flex w-full">
        <div className="">
        <Sparkle  className="animate-spin text-white w-[30px] h-[30px]"/>
        </div>
       <div className="w-[92%] flex flex-col gap-2">
      <Skeleton className="h-[15px] lg:w-[65%] w-[90%] rounded-xl bg-gray-700" /> 
      <Skeleton className="h-[15px] lg:w-[35%] w-[80%] rounded-xl bg-gray-700" /> 
       </div>
      </div>
      </div>
      </>
      ):(
       <div className="">
      <form className="flex gap-3 items-center" onSubmit={handleSubmit(onSubmit)}>
  <div className="">
    {/* <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // console.log(res)
        setImage(res[0].url);
        alert('Upload Completed');
      }}
      content={{
        button({ ready }) {
          if (ready) return <div><RiImageAddLine size={22}/></div>;
        },
        allowedContent({ ready, fileTypes, isUploading }) {
          return ``;
        },
      }}
      appearance={{
        button({ ready, isUploading }) {
          return `custom-button ${
            ready ? "custom-button-ready" : "custom-button-not-ready"
          } ${isUploading ? "custom-button-uploading" : ""}`;
        },
        container: "custom-container",
        allowedContent: "custom-allowed-content",
      }}
      onUploadError={(error) => {
        alert(`ERROR! ${error.message}`);
      }}
    /> */}
       {/* <button type="button" onClick={() => {
            // Open a file picker to select image
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = "image/png", "image/jpeg"," image/webp", "image/heic", "image/heif";
            input.onchange = (e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                  setImage(event.target.result);
                };
                reader.readAsDataURL(file);
              }
            };
            input.click();
          }}>
            <RiImageAddLine size={22} />
          </button> */}
            {/* <input type="file" accept="image/png, image/jpeg, image/webp, image/heic, image/heif" onChange={handleFileChange} style={{ display: 'none' }} />
      <button type="button" onClick={() => document.querySelector('input[type="file"]').click()}>
        <RiImageAddLine size={22} />
      </button> */}
     
      <input type="file" accept="image/*" onChange={handleImageChange} style={{  display: 'none' }} id="imageInput" />
       <label htmlFor="imageInput" className="cursor-pointer text-white hover:text-black">
    <RiImageAddLine size={22} />
      </label>

  </div>
  <div className="flex-grow relative">
    <div className="relative">
    <Input
  className={`w-full lg:h-[9vh] h-[6vh] text-sm p-[18px] rounded-[30px] ring ring-FormColorbggg ring-offset-0 bg-[#131314] text-white outline-none break-all ${
    image ? 'pl-[4rem]' : ''
  }`}
  type="search"
  placeholder="Enter a prompt here"
  {...register("search")}
  required
/>
      {image && (
       <div className="absolute top-1/2 transform -translate-y-1/2 left-[1rem] rounded-lg">
        <div className="relative">
          <Image
            src={`/${image}`}
            alt="Uploaded Image"
            width={40}
            height={40}
          />
          <div
            className="absolute top-0 left-0 cursor-pointer flex items-center justify-center w-full h-full"
            onClick={() => setImage(null)}
          >
            <AiOutlineClose size={15} className="text-white font-bold" />
          </div>
        </div>
       </div>
      )}
    </div>
  </div>
  <button type="submit">
    <GoPaperAirplane className="text-blue-300 hover:text-purple-600" size={24} />
  </button>
  <div className="absolute right-[17%] md:right-[7%] lg:right-[7%] top-[5 0px] lg:top-[25px]">
    {loading && (
      <div className="">
        <Image className="w-[30px] h-[30px]" src="/loading.gif" alt="" width={30} height={20} />
      </div>
    )}
  </div>
</form>

       <p className="text-gray-400 text-xs mt-4 lg:text-xs md:text-[10px] lg:text-[10px] flex items-center justify-center text-center">
        ColAi may display inaccurate or offensive information that doesn’t represent collinz views.
      </p>
    </div>
      )
     }
     <>
     </>
    </div>
  );
}
