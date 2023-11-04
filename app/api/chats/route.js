import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(request, { searchParams }) {
  try {
    const userId = request.nextUrl.searchParams.get("userId");
    console.log(userId);
    const chats = await db.chat.findMany({
      where: {
        userId: userId,
      },
      include: {
        conversations: true,
      },
    });
    // console.log(chats);
    return NextResponse.json(chats);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
export async function POST(request) {
  try {
    const { prompt, response, chatId, userId } = await request.json();
    console.log(userId);
    if (chatId) {
      const conversation = await db.conversation.create({
        data: {
          chatId,
          prompt,
          response,
        },
      });
      console.log(conversation);
      return NextResponse.json(
        {
          conversation,
        },
        {
          status: 201,
        }
      );
    } else {
      const chat = await db.chat.create({
        data: { prompt: prompt, userId: userId },
      });

      const conversation = await db.conversation.create({
        data: {
          chatId: chat.id,
          prompt,
          response,
        },
      });
      // console.log(conversation);

      return NextResponse.json(conversation);
    }
  } catch (error) {
    console.log("error ", error);
    return NextResponse.json(
      {
        message: "Failed ",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
