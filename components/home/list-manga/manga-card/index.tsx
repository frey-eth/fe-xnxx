import { MangaCardType } from "@/types/manga";
import Link from "next/link";
import React from "react";

const MangaCard = ({ manga }: { manga: MangaCardType }) => {
  return (
    <Link
      href={"/jujusu-kaisen"}
      className="p-1 flex flex-col max-sm:w-[180px] w-[360px] border"
    >
      <div className="w-full h-[260px] overflow-hidden">
        <img
          src={manga.img}
          alt="manga"
          className="w-full h-full object-cover hover:scale-110 transition-transform"
        />
      </div>
      <div className="p-2">
        <p className="text-sm font-bold">{manga.name}</p>
        <div className="flex flex-row w-full text-xs text-gray-500 items-center justify-between">
          <p>Chapter #{manga.chapter}</p>
          <p>{manga.release}</p>
        </div>
      </div>
    </Link>
  );
};

export default MangaCard;
