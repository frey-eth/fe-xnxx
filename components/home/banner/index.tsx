"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import BannerCard from "./banner-card";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Banner = () => {
  const listImages = [
    "https://hobiverse.com.vn/cdn/shop/articles/tru-cot-hashira-manh-nhat_thumbnail_hobi_307f6d94d54d4a7e9ce88221d2aa2b1e.jpg",
    "https://cdn.oneesports.vn/cdn-data/sites/4/2023/09/MHUR-new-header-mobile.jpg",
    "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/01/the-10-best-anime-returning-in-2024.jpg",
    "https://assets-prd.ignimgs.com/2023/12/23/biggestanimecoming2024-blogroll-1703306545257.jpg",
    "https://sportshub.cbsistatic.com/i/2023/10/10/3381729d-4cb0-44fc-ae08-96a468a09426/tokyo-revengers-season-3-ending-mikey-anime.jpg",
  ];
  return (
    <div className="w-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
      >
        {listImages.map((img, index: number) => (
          <SwiperSlide key={index}>
            <BannerCard img_url={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
