import { connectionStr } from "@/lib/db";
import { Blog } from "@/lib/model/blog";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// get api data
export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Blog.find();
  } catch (error) {
    data = { success: false };
  }
  return NextResponse.json({ result: data, success: true });
}

// add data
export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  let blog = new Blog(payload);
  const result = await blog.save();
  return NextResponse.json({ result, success: true });
}
