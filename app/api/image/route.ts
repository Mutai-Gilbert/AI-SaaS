import axios from "axios";

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { parse } from "path";
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

export async function POST(
    req: Request,
){
    try{
        const { userId } = auth();
        const body = await req.json();
        const { prompt, amount = 1, resolution = "512x512"} = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });;
        }
        if (!configuration.apiKey) {
            return new NextResponse("OpenAi API Key not configured", { status: 401 })
        }
        if (!prompt) {
            return new NextResponse("prompt required", { status: 401 })
        }
        if (!amount) {
            return new NextResponse("amount required", { status: 401 })
        }
        if (!resolution) {
            return new NextResponse("resolution required", { status: 401 })
        }
        const response = await openai.createImage({
           prompt,
           n: parseInt(amount, 10),
           size: resolution
        });

        return NextResponse.json(response.data.data)

    } catch(error){
        console.log(error);
        return new NextResponse("Internal error", { status: 401 });;
    }
}