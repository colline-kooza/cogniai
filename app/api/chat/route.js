import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { search } = await request.json();
    const url = "https://open-ai21.p.rapidapi.com/conversationgpt35";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "b77d306e9fmshd48c5250670e7f3p152d8ejsn981f314ba400",
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: `For all the prompts that i will be asking you , and the response should be over 100words and shoud not begin with i. give the response as object with keys:prompt,response. ${search}`,
          },
        ],
        web_access: false,
        stream: false,
      }),
    };
    const response = await fetch(url, options);
    const result = await response.json();
    const botDataResult = await result.BOT;
    const botData = {
      prompt: search,
      response: botDataResult,
    };
    // console.log(botData);
    return NextResponse.json({
      botData,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
