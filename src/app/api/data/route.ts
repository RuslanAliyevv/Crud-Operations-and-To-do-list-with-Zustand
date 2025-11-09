import { NextResponse } from "next/server";
import mockData from "../data/mockdata.json";

export async function GET() {
  return NextResponse.json({ success: true, data: mockData });
}