// src/app/api/replicate/start/route.ts
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Create a prediction instead of running the model directly
    // This returns a prediction object with an ID that can be polled for status
    const prediction = await replicate.predictions.create({
      // Use just the model name without specifying a version
      // Replicate will automatically use the latest version
      model: "black-forest-labs/flux-dev",
      input: {
        prompt: prompt,
        negative_prompt:
          "ugly, blurry, poor quality, distorted, oversaturated, overexposed, painting, drawing, sketch, anime, cartoon, grainy, illegible text, blurry text, messy text, poorly rendered text, misspelled text, fuzzy text",
        width: 1024,
        height: 1024,
        num_inference_steps: 35,
        guidance_scale: 9.0,
        scheduler: "dpmpp_2m",
        num_outputs: 1,
      },
    });

    console.log("Created prediction:", prediction);

    // Return the prediction object which includes the ID
    return NextResponse.json(prediction);
  } catch (error) {
    console.error("API Error Details:", {
      name: error instanceof Error ? error.name : "Unknown Error",
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to generate image",
        details: String(error),
      },
      { status: 500 }
    );
  }
}
