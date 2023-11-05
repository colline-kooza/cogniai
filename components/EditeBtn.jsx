"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import { VscSaveAs } from "react-icons/vsc";

export default function EditeBtn({ initialValue, onSave }) {
  const { userId } = useAuth();
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(initialValue);
  async function onSubmit(editedValue) {
    const search = editedValue;
    // console.log(search);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CHAT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search }),
      });
      if (res.ok) {
        const resultJSON = await res.json();
        const botData = resultJSON.botData;
        const botDataObject = {
          prompt: botData.prompt,
          response: botData.response,
          userId,
        };
        console.log(botDataObject);
        if (chatId) {
          const conv = {
            ...botDataObject,
            chatId,
          };

          const response = await fetch(process.env.NEXT_PUBLIC_CHATS, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(conv),
          });
          if (response.ok) {
            // console.log(response);

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
            // console.log(response);

            const resultJSON = await response.json();
            const responseId = resultJSON.chatId;
            setChatId(responseId);
            router.push(`${process.env.NEXT_PUBLIC_LOCALHOST}/${responseId}`);
          } else {
          }
        }
      } else {
        throw new Error("something went wrong");
      }
    } catch (error) {
      prompt = "check your internet connections";
    }
  }
  useEffect(() => {
    setEditedValue(initialValue);
  }, [initialValue]);
  const handleSave = () => {
    onSave(editedValue);
    setIsEditing(false);
  };
  return (
    <div className="w-full">
      {isEditing ? (
        <div className="flex justify-between items-center">
          <textarea
            className="w-[90%] bg-[#222327] outline-none"
            type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button
            onClick={() => {
              onSubmit(editedValue);
              handleSave();
            }}
            className="shrink-0"
          >
            <VscSaveAs size={25} />
          </button>
        </div>
      ) : (
        <div className="flex justify-between ">
          {editedValue}
          <button onClick={() => setIsEditing(true)}>
            <FiEdit2 className="font-[700]" size={23} />
          </button>
        </div>
      )}
    </div>
  );
}
