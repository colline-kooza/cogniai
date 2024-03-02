import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro-latest" });
    const { search } = await request.json();
    const result = await model.generateContent(search);
    const responseText = await result.response.text();
    const responseData = {
      prompt: search,
      response: responseText,
    };
      // console.log(responseData)
    return NextResponse.json({
      botData: responseData,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
