import { connectionStr } from "@/lib/db";
import { Blog } from "@/lib/model/blog";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await Blog.find();
  console.log("data", data);
  return NextResponse.json({ result: data });
}
