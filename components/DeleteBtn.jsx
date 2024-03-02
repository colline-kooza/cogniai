"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";


export default function DeleteBtn({ chatId }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  async function handleDelte() {
    setLoading(true);
    const confirmed = confirm("Are you sure, your want Delete this Chat?");
    if (confirmed) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_CHATS}/${chatId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.push("/chat");
        toast.success("Chat deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        router.push("/chat");
        // window.location.reload();
      } else {
        console.log("something wrong happened");
      }
      setLoading(false);
    }
  }

  return (
    <Link
      className="text-[#bbbbbb] flex gap-2 items-center tracking-[1px] text-sm hover:animate-pulse hover:text-red-500"
      href=""
      onClick={handleDelte}
    >
      <RiDeleteBin6Line className="shrink-0" />{" "}
      Delete
    </Link>
  );
}
