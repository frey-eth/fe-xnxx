"use client";
import React, { useState } from "react";
import CategoryCard from "./category-card";
import ProcessingBar from "./processing-bar";
import { CheckDevice } from "@/utils/check-device";
import { Swiper, SwiperSlide } from "swiper/react";
import { manga_list } from "@/constants/list-manga";

const ListCategory = ["Manhwa", "Manhua", "Manga", "Webtoon"];

const Category = () => {
  const [activeCategory, setCategory] = useState(ListCategory[0]);
  const isMobile = CheckDevice();
  const handleComplete = () => {
    setCategory((prevCategory) => {
      const currentIndex = ListCategory.indexOf(prevCategory);
      const nextIndex = (currentIndex + 1) % ListCategory.length;
      return ListCategory[nextIndex];
    });
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="w-fit mx-auto border-t-2 py-2 border-black">
        <div className="flex-row justify-center items-center gap-1 flex">
          {ListCategory.map((category: string, index: number) => (
            <div
              onClick={() => setCategory(category)}
              key={index}
              className={`buttonCategory text-black ${
                activeCategory == category && "bg-black text-white"
              }`}
            >
              <span className="font-bold uppercase text-sm md:px-4 md:py-3 px-2 py-1 max-md:text-[12px]">
                {category}
              </span>
            </div>
          ))}
        </div>
        <ProcessingBar duration={4000} onComplete={handleComplete} />
      </div>

      <div className="max-sm:w-full w-4/5 mx-auto border p-3 shadow-2xl">
        <Swiper
          loop={true}
          slidesPerView={isMobile ? 2.2 : 5}
          centerInsufficientSlides={true}
        >
          {manga_list.map((manga, index) => (
            <SwiperSlide key={index}>
              <CategoryCard title={manga.name} image={manga.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
