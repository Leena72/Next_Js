"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/Components/Button/page";
import { about } from "../../Constant/data";

export default function About() {
  const router = useRouter();

  return (
    <>
      <Button
        className="link-btn"
        clickHandler={() => router.back()}
        buttonText={"Back"}
      />
      <div className="about-detail">
        <h1>Next Js Application</h1>
        <ul>
          {about.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
