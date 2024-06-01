"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/Components/Button/page";

export default function AddBlog() {
  const router = useRouter();

  return (
    <>
      <Button
        className="link-btn"
        clickHandler={() => router.back()}
        buttonText={"Back"}
      />
      <div className="about-detail">
        <h1>Add Blog Form</h1>
      </div>
      <div className="add-blog-form">
        <input type="text" placeholder="Enter Title" className="input-text" />
        <input type="text" placeholder="Enter Description" className="input-text" />
        <input type="date" placeholder="Created At" className="input-text" />
        <input type="date" placeholder="Updated At" className="input-text" />
        <Button
        className="addBtn"
        clickHandler={''}
        buttonText={"Add Blog"}
      />
      </div>
    </>
  );
}
