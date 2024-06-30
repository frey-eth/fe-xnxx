"use client";
import { useEffect, useState } from "react";
import { ListTabs } from "@/constants/header/list-tabs";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
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
      className={`w-full p-4 fixed z-[10] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-5 py-3 rounded-lg shadow-lg bg-white border flex flex-row justify-between items-center text-black">
        <div className="flex flex-row items-center">
          <Link href={"/"} className="sm:text-3xl text-xl font-liberi">
            MangaHub
          </Link>
        </div>
        <div className="w-[400px] px-4 py-2 border rounded-md flex flex-row items-center max-sm:hidden">
          <input
            type="text"
            className=" bg-transparent flex-1 outline-none"
            placeholder="Search ..."
          />
          <FaSearch size={16} />
        </div>
        <div className="flex flex-row items-center gap-4 max-sm:hidden">
          {ListTabs.map((tab) => (
            <Link
              href={tab.link}
              key={tab.title}
              className="font-medium text-md"
            >
              {tab.title}
            </Link>
          ))}
        </div>
        <div className="sm:hidden">
          <HiOutlineMenuAlt3
            size={20}
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </div>

        {openMenu && (
          <div
            className={`absolute top-[70px] py-3 left-0 w-full h-screen bg-white bg-opacity-90 flex flex-col items-center justify-start px-2 gap-3`}
          >
            <div className="w-full px-3 py-2 border rounded-md flex flex-row items-center shadow text-black bg-white">
              <input
                type="text"
                className=" bg-transparent flex-1 outline-none placeholder:text-black "
                placeholder="Search ..."
              />
              <FaSearch size={14} />
            </div>
            {ListTabs.map((tab) => (
              <Link
                href={tab.link}
                key={tab.title}
                className="px-3 font-bold uppercase"
              >
                {tab.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
