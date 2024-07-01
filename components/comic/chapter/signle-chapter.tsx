"use client";
import { useRouter } from "next/navigation";

type SingleChapterProps = {
  chapter: number;
  title: string;
  date?: string;
};

const SingleChapter = ({ chapter, title }: SingleChapterProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`jujutsu-kaisen/read?chapter=${chapter}`)}
      className="flex cursor-pointer flex-row justify-between py-2 border w-full px-3 md:px-6 hover:text-orange-500 gap-2"
    >
      <h2 className="text-sm font-medium w-full overflow-hidden text-ellipsis whitespace-nowrap">
        Chapter {chapter}: {title}
      </h2>
      <p className=" text-sm text-gray-500 whitespace-nowrap">2022-02-02</p>
    </div>
  );
};

export default SingleChapter;
