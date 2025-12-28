import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      {
        message: "API v1 endpoint",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
}
