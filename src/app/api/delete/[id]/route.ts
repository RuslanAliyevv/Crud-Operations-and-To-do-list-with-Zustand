// app/api/delete/[id]/route.ts
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  // Frontend-də role localStorage-dandır, request içində gəlmir
  const url = new URL(req.url);
  const role = url.searchParams.get("role"); // ?role=admin

  if (role !== "admin") {
    return NextResponse.json(
      { success: false, message: "Only admin can delete" },
      { status: 403 }
    );
  }

  return NextResponse.json({ success: true, deletedId: id });
}