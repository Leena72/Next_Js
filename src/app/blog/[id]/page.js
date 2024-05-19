"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function Blog({ params }) {
  const searchParams = useSearchParams();
  let title = searchParams.get("title");
  let author = searchParams.get("author");
  let date_published = searchParams.get("date_published");
  let content = searchParams.get("content");

  const id = params.id;
  console.log("blog", params, title, author);

  return (
    <>
      <Link className="link-btn" href={"/"}>
        Back
      </Link>
      <div className="blog-body">
        <div className="blog">
          <h1 className="blog-title">{title}</h1>
          <div className="blog-detail">
            <p>{author}</p>
            <p>{date_published.split("-").reverse().join("-")}</p>
          </div>
          <div className="blog-summary">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
