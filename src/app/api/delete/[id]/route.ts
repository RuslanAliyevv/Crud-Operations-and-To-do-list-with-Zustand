// app/api/delete/[id]/route.ts
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { role } = await req.json(); 

  if (role !== "admin") {
    return NextResponse.json({ success: false, message: "Only admin delete" }, { status: 403 });
  }

  const id = params.id;
 
  return NextResponse.json({ success: true, deletedId: id });
}