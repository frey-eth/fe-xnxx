"use client";
import { FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import read_data from "@constants/demo-data.json";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import Panigation from "@/components/comic/read/panigation";
import { ListChapter } from "@/constants/list-chapter";

const ReadPage = () => {
  const router = useRouter();

  return (
    <div className="w-full pt-[90px] px-5 flex flex-col gap-4 items-center">
      <div
        className="w-full flex flex-row items-center gap-2 cursor-pointer"
        onClick={() => router.replace("/jujutsu-kaisen")}
      >
        <IoChevronBackOutline size={24} />
        <span className="font-semibold text-sm">
          {read_data.data.manga.name}
        </span>
      </div>

      <div className="w-full max-w-[900px] flex flex-row max-md:flex-col md:h-[200px] gap-2 p-3 shadow-lg rounded-lg">
        <div className="h-full w-full md:w-[160px] flex-1">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={read_data.data.manga.panorama_url}
            alt={read_data.data.manga.name}
          />
        </div>
        <div className="flex flex-row items-end flex-2">
          <div className="flex flex-col gap-1">
            <div className="text-2xl max-md:text-md font-bold">
              {read_data.data.manga.name}
            </div>
            <div className="text-md max-md:text-sm text-gray-500">
              {read_data.data.manga.description}
            </div>

            <div className="flex flex-row max-md:gap-2 gap-3 items-center">
              <div className="text-yellow-400 flex flex-row items-center gap-1">
                <FaStar size={18} /> <span>4.5/5</span>
              </div>
              <div className="text-black flex flex-row items-center gap-1">
                <CiBookmark size={18} /> <span>321</span>
              </div>
              <div className="text-black flex flex-row items-center gap-1">
                <FaRegEye size={18} /> <span>1.2k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[900px] max-md:w-full flex flex-col items-center gap-1 justify-center">
        {read_data.data.pages.map((img, index) => (
          <LazyLoadImage key={index} src={img.image_url} />
        ))}
      </div>

      <Panigation maxChapter={ListChapter.length} />
    </div>
  );
};

const LazyLoadImage = ({ src }: { src: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "50px 0px",
  });

  return (
    <div ref={ref} className="w-full relative">
      {inView && (
        <>
          <img src={src} className="w-full" alt="Manga page" />
        </>
      )}
    </div>
  );
};

export default ReadPage;
