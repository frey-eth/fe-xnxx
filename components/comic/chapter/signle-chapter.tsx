"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SingleChapter = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("jujutsu-kaisen/read?chapter=101")}
      className="flex cursor-pointer flex-row justify-between py-1 border w-full px-3 hover:text-orange-500"
    >
      <h2 className="text-md font-medium">Chapter 101</h2>
      <p>2022-02-02</p>
    </div>
  );
};

export default SingleChapter;
