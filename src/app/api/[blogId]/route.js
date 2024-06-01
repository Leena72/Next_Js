import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { Blog } from "@/lib/model/blog";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  const blogId = content.params.blogId;
  const filter = { _id: blogId };
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  const result = await Blog.findOneAndUpdate(filter, payload);
//   console.log("content", content, blogId, payload);
  return NextResponse.json({ result, success: true });
}

export async function GET(request, content) {
    const blogId = content.params.blogId;
    const filter = { _id: blogId };

    await mongoose.connect(connectionStr);
    const result = await Blog.findById(filter);
  //   console.log("content", content, blogId, payload);
    return NextResponse.json({ result, success: true });
  }
