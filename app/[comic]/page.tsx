import { LuBookOpen } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { LiaCalendarDaySolid } from "react-icons/lia";
import { MdOutlineUpdate } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { FaTableList } from "react-icons/fa6";
import { AiFillSignal } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa6";

import ChapterList from "@/components/comic/chapter";
import CommentList from "@/components/comic/comments";

const PageComic = () => {
  const manga_tabs = ["Action", "Fantasy", "Shounen", "Demon"];
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row w-full max-md:px-2 px-10 gap-3 relative overflow-hidden pt-28">
        <div className="absolute left-0 z-[-1] w-full h-full bottom-14 max-md:bottom-20 overflow-hidden">
          <img
            src="/images/banner1.jpg"
            className="object-cover h-full w-full blur-[3px]"
          />
        </div>
        <div className="absolute left-0 right-0 z-[-1] w-full h-full bottom-14 max-md:bottom-20  bg-black bg-opacity-30" />

        <div className="w-[200px] h-[280px] max-md:w-[160px] max-md:h-[240px] relative rounded-md overflow-hidden">
          <img
            src="/images/banner1.jpg"
            className="object-cover h-full w-full "
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col gap-2 max-md:gap-1 text-white">
            <h1 className="text-[48px] max-md:text-[32px] max-md:leading-[32px] leading-[48px] font-bold">
              Jujutsu Kaisen
            </h1>
            <div className=" flex flex-row items-center gap-2 font-semibold">
              <LiaCalendarDaySolid size={24} /> <span>2022</span>
            </div>
            <div className=" flex flex-row items-center gap-2 font-semibold">
              <MdOutlineUpdate size={24} /> <span>Recent Updated</span>
            </div>

            <div className=" flex flex-row items-center gap-2 font-semibold">
              <AiFillSignal size={24} /> <span>812 Chapters</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <h1 className="text-white font-medium mt-1">Akutami Gege</h1>
            <div className="flex max-md:flex-col gap-1 w-full justify-between">
              <div className="flex flex-row gap-2">
                <button className="px-10 max-md:px-2 bg-black py-2 border rounded w-fit font-semibold text-white whitespace-nowrap max-md:text-sm">
                  Add to Library
                </button>
                <button className="p-2 bg-black text-white rounded-md">
                  <LuBookOpen size={24} />
                </button>
                <button className="p-2 text-red-600 ">
                  <FaHeart size={24} />
                </button>
              </div>

              <div className="flex flex-row max-md:gap-2 gap-3 items-center">
                <div className=" text-yellow-400 flex flex-row items-center gap-1">
                  <FaStar size={24} /> <span>4.5/5</span>
                </div>
                <div className=" text-black flex flex-row items-center gap-1">
                  <CiBookmark size={24} /> <span>321</span>
                </div>
                <div className=" text-black flex flex-row items-center gap-1">
                  <FaRegEye size={24} /> <span>1.2k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full justify-center gap-2">
        {manga_tabs.map((tab) => (
          <div
            key={tab}
            className="p-2 text-sm border-2 border-black text-black font-semibold hover:text-white hover:bg-black cursor-pointer"
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-4 max-md:mx-2 mx-32 p-3 shadow-xl rounded">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-lg font-bold flex flex-row gap-2">
            <TbFileDescription size={24} className="text-gray-500" />{" "}
            Description
          </h1>
          <p className="text-sm text-gray-500  p-3">
            Yuuji Itadori là một thiên tài có tốc độ và sức mạnh, nhưng cậu ấy
            muốn dành thời gian của mình trong Câu lạc bộ Tâm Linh. Một ngày sau
            cái chết của ông mình, anh gặp Megumi Fushiguro, người đang tìm kiếm
            vật thể bị nguyền rủa mà các thành viên CLB đã tìm thấy. Đối mặt với
            những con quái vật khủng khiếp bị Ám, Yuuji nuốt vật thể bị phong ấn
            để có được sức mạnh của nó và cứu bạn bè của mình! Nhưng giờ Yuuji
            là người bị Ám, và cậu ấy sẽ bị kéo vào thế giới ma quỷ ly kỳ của
            Megumi và những con quái vật độc ác.
          </p>
        </div>
        <div className=" flex flex-col gap-4 w-full">
          <h1 className="text-lg font-bold flex flex-row gap-2">
            <FaTableList size={24} className="text-gray-500" /> Chapters
          </h1>
          <ChapterList />
          <h1 className="text-lg font-bold flex flex-row gap-2">
            <FaRegComments size={24} className="text-gray-500" /> Bình luận
          </h1>
          <CommentList />
        </div>
      </div>
    </div>
  );
};

export default PageComic;
