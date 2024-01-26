import axios from "axios";

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage } from "openai";
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);
const instructionMessage: ChatCompletionRequestMessage ={
    role: "system",
    content: "You are a code generator you just answer. You must answer in markdown format. Use code comments for exaplanations"
}
export async function POST(
    req: Request,
){
    try{
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });;
        }
        if (!configuration.apiKey) {
            return new NextResponse("OpenAi API Key not configured", { status: 401 })
        }
        if (!messages) {
            return new NextResponse("Messages required", { status: 401 })
        }
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage,...messages]
        });

        return NextResponse.json(response.data.choices[0].message)

    } catch(error){
        console.log(error);
        return new NextResponse("Internal error", { status: 401 });;
    }
}