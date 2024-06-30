"use client";
import { FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import read_data from "@constants/demo-data.json";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const ReadPage = () => {
  const router = useRouter();
  return (
    <div className="w-full pt-[90px] px-5 flex flex-col gap-4 items-center">
      <div
        className="w-full flex flex-row items-center gap-2 cursor-pointer"
        onClick={() => router.back()}
      >
        <IoChevronBackOutline size={24} />
        <span className="font-semibold text-sm">
          {read_data.data.manga.name}
        </span>
      </div>
      <div className=" max-w-[900px] max-md:w-full flex flex-col items-center gap-1 justify-center">
        <div className="w-full flex flex-row h-[200px] gap-2 p-3 shadow-lg rounded-lg">
          <div className="h-full w-[160px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={read_data.data.manga.panorama_url}
            />
          </div>
          <div className="flex flex-row items-end">
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-bold">
                {read_data.data.manga.name}
              </div>
              <div className="text-md text-gray-500">
                {read_data.data.manga.description}
              </div>

              <div className="flex flex-row max-md:gap-2 gap-3 items-center">
                <div className=" text-yellow-400 flex flex-row items-center gap-1">
                  <FaStar size={18} /> <span>4.5/5</span>
                </div>
                <div className=" text-black flex flex-row items-center gap-1">
                  <CiBookmark size={18} /> <span>321</span>
                </div>
                <div className=" text-black flex flex-row items-center gap-1">
                  <FaRegEye size={18} /> <span>1.2k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {read_data.data.pages.map((img, index) => (
          <img src={img.image_url} className="w-full" key={index} />
        ))}
      </div>
    </div>
  );
};

export default ReadPage;
