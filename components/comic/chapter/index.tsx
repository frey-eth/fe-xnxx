import React from "react";
import SingleChapter from "./signle-chapter";
import { ListChapter } from "@/constants/list-chapter";

const ChapterList = () => {
  return (
    <div className="flex flex-col h-[300px] overflow-y-auto w-full border rounded overflow-hidden">
      {ListChapter.map((chapter) => (
        <SingleChapter
          title={chapter.name}
          chapter={chapter.id}
          key={chapter.id}
        />
      ))}
    </div>
  );
};

export default ChapterList;
