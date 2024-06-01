"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/Components/Button/page";

function Blog({ params }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  let title = searchParams.get("title");
  let author = searchParams.get("author");
  let date_published = searchParams.get("date_published");
  let content = searchParams.get("content");

  const id = params.id;
  // console.log("blog", params, title, author);
  return (
    <>
      <Button 
      className="link-btn" 
      clickHandler={() => router.back()}
      buttonText={'Back'}
      />
        
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
