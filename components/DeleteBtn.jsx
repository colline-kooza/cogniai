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
        toast("chat deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        console.log("something wrong happened");
      }
      setLoading(false);
    }
  }

  return (
    <Link
      className="text-[#bbbbbb] flex gap-3 items-center tracking-[1px] text-[15px] hover:animate-bounce hover:text-blue-500"
      href=""
      onClick={handleDelte}
    >
      <RiDeleteBin6Line className="shrink-0" />{" "}
      {loading ? "Deleting...." : "Delete"}
    </Link>
  );
}
