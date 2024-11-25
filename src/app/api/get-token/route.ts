import { getMe } from "@/lib/auth/me";
import streamServerClient from "@/lib/stream/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const me = await getMe();

    if (!me) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60;

    const issuedAt = Math.floor(Date.now() / 1000) - 60;

    const token = streamServerClient.createToken(
      me.id,
      expirationTime,
      issuedAt,
    );

    return NextResponse.json(token);
  } catch (error) {
    console.error("GET_TOKEN_STREAM:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
