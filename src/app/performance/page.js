"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import nextjsImg from "@/Assets/nextjs.jpeg";
import Button from "@/Components/Button/page";

export default function Performance() {
  const router = useRouter();
  return (
    <>
      <Button
        className="link-btn"
        clickHandler={() => router.back()}
        buttonText={"Back"}
      />
      <div className="about-detail">
        <h1>Performance Optimization</h1>
      </div>
      <div className="image">
        <Image src={nextjsImg} alt="Next js" />
      </div>
    </>
  );
}
