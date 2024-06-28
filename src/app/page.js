"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
// import Card from "@/Components/Card/page";

export default function Page() {
  const Card = dynamic(() => import("@/Components/Card/page"), {
    suspense: true,
  });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card />
    </Suspense>
  );
}
