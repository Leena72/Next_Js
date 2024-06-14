"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/Components/Button/page";
import { useEffect, useState } from "react";

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
      
    </>
  );
}
