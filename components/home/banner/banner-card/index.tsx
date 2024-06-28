import React from "react";
type BannerCardProps = {
  img_url: string;
};

const BannerCard = ({ img_url }: BannerCardProps) => {
  return (
    <div className="border rounded-lg bg-black h-[300px] overflow-hidden relative">
      <img src={img_url} alt="Slide 2" className="object-cover h-full" />
    </div>
  );
};

export default BannerCard;
