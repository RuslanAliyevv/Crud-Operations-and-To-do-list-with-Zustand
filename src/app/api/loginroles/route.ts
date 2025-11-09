import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === "admin@portal.com" && password === "12345") {
    return Response.json({
      success: true,
      user: {
        name: "Admin",
        role: "admin",
        status: "active", 
      },
    });
  } else if (email === "user@portal.com" && password === "54321") {
    return Response.json({
      success: true,
      user: {
        name: "User",
        role: "user",
        status: "disabled",
      },
    });
  } else {
    return Response.json({ success: false });
  }
}
