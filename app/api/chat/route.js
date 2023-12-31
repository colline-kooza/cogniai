import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { search } = await request.json();

    const url = "https://open-ai21.p.rapidapi.com/conversationmpt";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_KEYS,
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: `the response should be over 200 words ${search}`,
          },
        ],
        web_access: false,
      }),
    };
    const response = await fetch(url, options);
    const result = await response.json();
    const botDataResult = await result.MPT;

    const botData = {
      prompt: search,
      response: botDataResult,
    };

    return NextResponse.json({
      botData,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
