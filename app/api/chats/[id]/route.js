import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function DELETE(request, { params: { id } }) {
  const chatId = parseInt(id);
  try {
    console.log(chatId);
    await db.chat.delete({
      where: { id: chatId },
    });
    return NextResponse.json({
      message: "Chat deleted successfully",
    });
  } catch (error) {
    console.log("Failed to delete Chat", error);
    return NextResponse.json(
      {
        message: "Failed to Delete Chat",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
export async function GET(request, { params: { id } }) {
  try {
    const chat = await db.chat.findUnique({
      where: { id: parseInt(id) },
      include: {
        conversations: true,
      },
    });
    // console.log(chat);
    if (!chat) {
      return NextResponse.json(
        {
          message: "Failed to fetch a single chat",
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }
    return NextResponse.json(chat);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch a single chat",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
