"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/Components/Button/page";

export default function EditBlog(props) {
  const router = useRouter();
  let [blog, setBlog] = useState(null);

  const [data, setData] = useState({
    title: "",
    description: "",
    createdAt: "",
    updatedAt: "",
  });
  useEffect(() => {
    getBlogDetail();
  }, []);

  const getBlogDetail = async () => {
    let blogData = await fetch(
      "http://localhost:8080/api/blogs/" + props.params.editBlog
    );
    blogData = await blogData.json();
    if (blogData.success) {
      let result = blogData.result;
      setData({
        // ...data,
        title: result.title,
        description: result.description,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
      });
    }
  };

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const editBlogHandler = async () => {
    let response = await fetch(
      "http://localhost:8080/api/blogs/" + props.params.editBlog,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );
    response = await response.json();
    if (response.result) {
      alert("Blog updated");
    }
  };
  return (
    <>
      <Button
        className="link-btn"
        clickHandler={() => router.back()}
        buttonText={"Back"}
      />
      <div className="about-detail">
        <h1>Edit Blog Form</h1>
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
          buttonText={"Edit Blog"}
          clickHandler={editBlogHandler}
        />
      </div>
    </>
  );
}
