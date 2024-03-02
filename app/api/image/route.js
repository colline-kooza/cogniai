import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
const fs = require("fs");

export async function POST(request) {
  try {
    function fileToGenerativePart(path, mimeType) {
      return {
        inlineData: {
          data: Buffer.from(fs.readFileSync(path)).toString("base64"),
          mimeType
        },
      };
    }
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const { search , image } = await request.json();

    const imageParts = [
      fileToGenerativePart(image ,"image/png", "image/jpeg"," image/webp", "image/heic", "image/heif")
    ];
    const result = await model.generateContent([search , ...imageParts]);

    const responseText = await result.response.text();
    const responseData = {
      prompt: search,
      response: responseText,
    };
      console.log(responseData)
    return NextResponse.json({
      botData: responseData,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
