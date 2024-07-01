import React from "react";
import { IoDiamond } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

type ContributorCardProps = {
  name: string;
  role: string;
  level: number;
  avatar?: string;
  facebook?: string;
  instagram?: string;
  messenger?: string;
};

const listBadge = {
  1: (
    <div className="w-4 h-4 flex items-center justify-center max-w-6 rounded-full bg-blue-500">
      <TiTick size={18} className="text-white" />
    </div>
  ),
  2: <IoDiamond size={18} className="text-cyan-500" />,
};

const ContributorCard = ({
  name,
  role,
  level,
  avatar,
}: ContributorCardProps) => {
  return (
    <div className="py-2 px-4 rounded-md bg-white shadow-lg  flex flex-col gap-3 w-full max-w-[185px] md:max-w-sm">
      <div className="flex flex-col items-center gap-1">
        <div className="p-1 rounded-full overflow-hidden border bg-white shadow-lg ">
          <div className="w-20 h-20 min-w-20 rounded-full overflow-hidden">
            <img src={avatar} alt="avatar" className="w-full h-full" />
          </div>
        </div>
        <div className="text-lg font-bold flex flex-row gap-2 items-center whitespace-nowrap">
          {name} {listBadge[level.toString() as "1" | "2"]}
        </div>
        <p className="text-sm text-center self-center font-medium italic">
          {role}
        </p>
      </div>

      <div className="flex flex-row px-3 py-2 rounded shadow gap-3 justify-center">
        <a href="https://www.facebook.com/literally.dng" target="_blank">
          <FaFacebook size={24} className="text-blue-500" />
        </a>
        <a href="https://www.instagram.com/literally_dng" target="_blank">
          <FaInstagram size={24} className="text-red-600" />
        </a>
        <a href="https://www.messenger.com/t/literally.dng" target="_blank">
          <FaFacebookMessenger size={24} className="text-blue-500" />
        </a>
      </div>
    </div>
  );
};

export default ContributorCard;
