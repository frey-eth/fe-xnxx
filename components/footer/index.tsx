import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full p-4">
      <div className="w-full px-4 py-2 rounded-lg shadow-lg backdrop-blur border">
        <div className="flex flex-row items-center justify-between">
          <div className="text-2xl font-bold text-center p-3 italic">
            MangaHub
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <a href="#" className="text-md font-medium ">
              <AiOutlineFacebook size={30} />
            </a>
            <a href="#" className="text-md font-medium ">
              <RxDiscordLogo size={30} />
            </a>
            <a href="#" className="text-md font-medium ">
              <FaCcPaypal size={30} />
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500">
          MangaHub &copy; 2021. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
