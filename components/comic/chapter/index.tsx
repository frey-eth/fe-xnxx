import React from "react";
import SingleChapter from "./signle-chapter";

const ChapterList = () => {
  return (
    <div className="flex flex-col h-[300px] overflow-y-auto w-full border rounded overflow-hidden">
      <SingleChapter />
      <SingleChapter /> <SingleChapter /> <SingleChapter /> <SingleChapter />
      <SingleChapter /> <SingleChapter /> <SingleChapter /> <SingleChapter />
      <SingleChapter /> <SingleChapter /> <SingleChapter /> <SingleChapter />
      <SingleChapter /> <SingleChapter /> <SingleChapter /> <SingleChapter />
    </div>
  );
};

export default ChapterList;
