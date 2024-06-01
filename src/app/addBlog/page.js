"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/Components/Button/page";

export default function AddBlog() {
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    description: "",
    createdAt: "",
    updatedAt: "",
  });

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const addBlogHandler = async () => {
    let result = await fetch("http://localhost:8080/api/blogs", {
      method: "POST",
      body: JSON.stringify(data),
    });
    result = await result.json();
    if (result.success) {
      alert("New blog added");
      setData({
        title: "",
        description: "",
        createdAt: "",
        updatedAt: "",
      })
    }
  };
//   console.log("data", data);

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
        <input
          type="text"
          placeholder="Enter Title"
          className="input-text"
          name="title"
          value={data.title}
          onChange={(e) => changeHandler(e)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          className="input-text"
          name="description"
          value={data.description}
          onChange={(e) => changeHandler(e)}
        />
        <input
          type="date"
          placeholder="Created At"
          className="input-text"
          name="createdAt"
          value={data.createdAt}
          onChange={(e) => changeHandler(e)}
        />
        <input
          type="date"
          placeholder="Updated At"
          className="input-text"
          name="updatedAt"
          value={data.updatedAt}
          onChange={(e) => changeHandler(e)}
        />
        <Button
          className="addBtn"
          buttonText={"Add Blog"}
          clickHandler={addBlogHandler}
        />
      </div>
    </>
  );
}
