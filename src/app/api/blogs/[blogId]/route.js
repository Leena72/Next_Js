import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { Blog } from "@/lib/model/blog";
import { NextResponse } from "next/server";

// update specific record
export async function PUT(request, content) {
  const blogId = content.params.blogId;
  const filter = { _id: blogId };
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  const result = await Blog.findOneAndUpdate(filter, payload);
  return NextResponse.json({ result, success: true });
}

// get specific record
export async function GET(request, content) {
  const blogId = content.params.blogId;
  const record = { _id: blogId };
  await mongoose.connect(connectionStr);
  const result = await Blog.findById(record);
  return NextResponse.json({ result, success: true });
}
