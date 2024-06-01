import mongoose from "mongoose";

const blogModel = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  updatedAt: Date,
});

export const Blog = mongoose.models.blogs || mongoose.model("blogs", blogModel);
