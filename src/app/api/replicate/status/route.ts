// src/app/api/replicate/status/route.ts
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function GET(request: Request) {
  // Get the ID from the query parameters
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Prediction ID is required" },
      { status: 400 }
    );
  }

  try {
    const prediction = await replicate.predictions.get(id);

    // Return the prediction status and any output
    return NextResponse.json(prediction);
  } catch (error) {
    console.error("Error fetching prediction status:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch prediction status",
        details: String(error),
      },
      { status: 500 }
    );
  }
}
