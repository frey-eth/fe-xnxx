"use client";
import React, { useState } from "react";
import MangaCard from "./manga-card";
import { manga_list } from "@/constants/list-manga";

const ListManga = () => {
  const listMangaTabs = ["Trending", "New", "Season", "Summer"];
  const [activeTab, setActiveTab] = useState(listMangaTabs[0]);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-center w-fit mx-auto p-2 shadow-lg">
        {listMangaTabs.map((tab, index) => (
          <div
            key={index}
            className={`flex flex-row justify-center items-center gap-1 px-3 py-2 ${
              tab === activeTab
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            } cursor-pointer hover:bg-black-700 hover:text-white transition-all duration-300 ease-in-out`}
          >
            <span
              className="font-bold uppercase text-sm"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-end items-center gap-1 px-4">
        <span className="font-bold uppercase text-sm">Filter by:</span>
        <select
          className="px-3 py-1 border rounded-md outline-none transition-all duration-300 ease-in-out hover:shadow-lg"
          onChange={(e) => console.log(e.target.value)}
        >
          <option value="all">All</option>
          <option value="manga">Week</option>
          <option value="manhwa">Month</option>
          <option value="manhua">Year</option>
        </select>
      </div>
      <div className="mx-auto flex flex-wrap gap-x-3 gap-y-2 items-center w-full justify-center">
        {manga_list.map((manga, index) => (
          <MangaCard manga={manga} key={index} />
        ))}
        {manga_list.map((manga, index) => (
          <MangaCard manga={manga} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListManga;
