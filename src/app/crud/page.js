"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/Components/Button/page";
import { about } from "../../Constant/data";
import { useEffect, useState } from "react";

export default function About() {
  const router = useRouter();

  let [blogList, setBlogList] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/blogs")
      .then((response) => response.json())
      .then((data) => setBlogList(data.result));
  }, []);
  const editHandler = () => {};
  const deleteHandler = () => {};

  return (
    <>
      <Button
        className="link-btn"
        clickHandler={() => router.back()}
        buttonText={"Back"}
      />
      <div className="about-detail">
        <h1>CRUD Application</h1>
      </div>
      <Button
        className="link-btn crud-btn"
        buttonText={"Add Blog"}
        clickHandler={() => router.push("/addBlog")}
      />
      <ul className="crud-list">
        {blogList &&
          blogList.map((item, idx) => {
            return (
              <li key={idx}>
                <div className="list-title">{item.title}</div>
                <div className="list-btn">
                  <Button
                    className="link-btn"
                    buttonText={"Edit"}
                    clickHandler={() => router.push("/crud/editBlog/"+item._id)}
                  />
                  <Button
                    className="link-btn"
                    buttonText={"Delete"}
                    clickHandler={deleteHandler}
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}
