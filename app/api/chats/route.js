import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const chats = await db.chat.findMany({
      include: {
        conversations: true,
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
    const { prompt, response, chatId } = await request.json();
    console.log(prompt, response, chatId);
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
        data: { prompt: prompt },
      });

      const conversation = await db.conversation.create({
        data: {
          chatId: chat.id,
          prompt,
          response,
        },
      });
      console.log(conversation, chat);
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
