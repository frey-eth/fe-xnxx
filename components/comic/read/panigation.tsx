"use client";
import { usePathname, useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import ListChapterPanigation from "./list-panigation-chapter";
import { useSearchChapter } from "@/hooks/useSearchChapter";

type PanigationProps = {
  maxChapter: number;
};

const Panigation = ({ maxChapter }: PanigationProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const { currentChapter, createQueryString } = useSearchChapter();
  const [openListChapter, setOpenListChapter] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className={`w-full md:max-w-[1200px] fixed bottom-0 py-2 px-3 z-[100] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex flex-row justify-center gap-2 rounded  items-center">
        <button
          className={`p-2 bg-black text-white rounded-md ${
            Number(currentChapter) <= 1 ? "opacity-50" : ""
          }`}
          disabled={Number(currentChapter) === 1}
          onClick={() =>
            router.push(
              pathname +
                "?" +
                createQueryString("chapter", String(Number(currentChapter) - 1))
            )
          }
        >
          <IoChevronBackOutline size={18} />
        </button>

        <button
          onClick={() => setOpenListChapter((prev) => !prev)}
          className="text-white text-sm md:text-xs text-[16px] bg-black py-2 flex flex-row items-center justify-center gap-1 px-4 rounded-md font-medium w-full max-w-md text-center opacity-90 whitespace-nowrap text-ellipsis overflow-hidden"
        >
          Chapter {currentChapter} :
          <span className="font-medium text-sm md:text-xs">
            Giao lưu đại hội võ thuật
          </span>
        </button>

        <button
          className={`p-2 bg-black text-white rounded-md ${
            Number(currentChapter) === maxChapter ? "opacity-50" : ""
          }`}
          disabled={Number(currentChapter) >= maxChapter}
          onClick={() =>
            router.push(
              pathname +
                "?" +
                createQueryString("chapter", String(Number(currentChapter) + 1))
            )
          }
        >
          <IoIosArrowForward size={18} />
        </button>

        <ListChapterPanigation
          isOpen={openListChapter}
          setOpen={setOpenListChapter}
        />
      </div>
    </div>
  );
};

export default Panigation;
