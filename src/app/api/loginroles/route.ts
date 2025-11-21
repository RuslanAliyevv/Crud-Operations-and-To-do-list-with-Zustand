import { NextResponse } from "next/server";

const USERS = [
  {
    email: "admin@portal.com",
    password: "12345",
    user: {
      name: "Admin",
      role: "admin",
      status: "active",
      privileges: ["ADD", "DELETE", "UPDATE", "VIEW", "ACTIVATE", "DISABLE"],
    },
  },
  {
    email: "user@portal.com",
    password: "54321",
    user: {
      name: "User",
      role: "user",
      status: "active",
      privileges: ["VIEW"],
    },
  },
  {
    email: "user2@mail.com",
    password: "11111",
    user: {
      name: "User 2",
      role: "manager",
      status: "active",
      privileges: ["VIEW", "ADD", "UPDATE"],
    },
  },
  {
    email: "user3@mail.com",
    password: "22222",
    user: {
      name: "User 3",
      role: "support",
      status: "disabled",
      privileges: ["VIEW"],
    },
  },
];

export async function POST(req) {
  const { email, password } = await req.json();

  const found = USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!found) {
    return NextResponse.json({ success: false });
  }

  return NextResponse.json({
    success: true,
    user: found.user,
  });
}
