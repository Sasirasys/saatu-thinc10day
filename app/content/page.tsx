"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Content = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Content Page</h1>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
};

export default Content;
