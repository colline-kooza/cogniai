import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(request, { searchParams }) {
  try {
    const userId = request.nextUrl.searchParams.get("userId");
    const chats = await db.chat.findMany({
      where: {
        userId: userId,
      },
      include: {
        conversations: true,
      },
    } ,{
      orderBy: {
       createdAt : "desc" 
      },
    });
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
    const { prompt, response, id , userId } = await request.json();
    // console.log(userId);
    if (id) {
      const conversation = await db.conversation.create({
        data: {
          prompt,
          response,
          chatId: parseInt(id)
        },
      });
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
      console.log(conversation);

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
