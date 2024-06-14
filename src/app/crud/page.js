"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/Components/Button/page";
import { useEffect, useState } from "react";

export default function Crud() {
  const router = useRouter();

  let [blogList, setBlogList] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/blogs",{cache:"no-cache"})
      .then((response) => response.json())
      .then((data) => setBlogList(data.result));
  }, []);

  const deleteHandler = async (blogId) => {
    let response = await fetch("http://localhost:8080/api/blogs/" + blogId, {
      method: "delete",
    });
    response = await response.json();
    if (response.result) {
      alert("Blog deleted successfully");
      router.push("/crud")
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
                <div className="list-title">
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </div>
                <div className="list-btn">
                  <Button
                    className="link-btn"
                    buttonText={"Edit"}
                    clickHandler={() =>
                      router.push("/crud/editBlog/" + item._id)
                    }
                  />
                  <Button
                    className="link-btn"
                    buttonText={"Delete"}
                    clickHandler={() => deleteHandler(item._id)}
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}
