"use client";
import { AiOutlineFacebook } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { FaCcPaypal } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  const location = usePathname();
  return (
    <div
      className={`w-full p-4 ${
        location === "/login" ||
        location === "/register" ||
        location === "/reset-password"
          ? "hidden"
          : ""
      }`}
    >
      <div className="w-full px-4 py-2 rounded-lg shadow-lg backdrop-blur border">
        <div className="flex flex-row items-center justify-between">
          <div className="text-2xl font-liberi text-center p-3 italic">
            Devtruyen
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <a
              target="_blank"
              href="https://www.facebook.com/literally.dng"
              className="text-md font-medium "
            >
              <AiOutlineFacebook size={30} />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/literally.dng"
              className="text-md font-medium "
            >
              <RxDiscordLogo size={30} />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/literally.dng"
              className="text-md font-medium "
            >
              <FaCcPaypal size={30} />
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500">
          DevTruyen &copy; 2021. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
