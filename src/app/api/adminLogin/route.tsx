import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { hash } = body;

  const response = NextResponse.json({ message: "Hash received" });
  response.cookies.set("hash", hash, {
    httpOnly: true,
    path: "/",
  });

  return response;
}
