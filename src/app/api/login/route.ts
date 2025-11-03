import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "admin@portal.com" && password === "12345") {
    const response = NextResponse.json({ success: true, user: { name: "Admin" } });
    response.cookies.set({
      name: "adminhub-user",
      value: "true",
      httpOnly: true,   // middleware read
      path: "/",
      maxAge: 60 * 60 * 24, // 1 gün
    });
    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}