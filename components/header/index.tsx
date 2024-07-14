"use client";
import { useEffect, useState } from "react";
import { ListTabs } from "@/constants/header/list-tabs";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";
import { GrPaypal } from "react-icons/gr";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuthenticated } from "@/lib/redux/auth-slice";
import toast from "react-hot-toast";
import SwitchButton from "../common/switch-button";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const location = usePathname();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [openMenu, setOpenMenu] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successfully");
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
        location === "/login" ||
        location === "/register" ||
        location === "/reset-password"
          ? "hidden"
          : ""
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full px-5 py-3 rounded-lg shadow-lg bg-white border flex flex-row justify-between items-center text-black gap-2">
        <div className="flex flex-row items-center">
          <Link href={"/"} className="sm:text-3xl text-xl font-liberi">
            DevTruyen
          </Link>
        </div>
        <div className="max-w-[400px] w-full px-4 py-2 border rounded-md flex flex-row items-center max-md:hidden">
          <input
            type="text"
            className=" bg-transparent flex-1 outline-none"
            placeholder="Search ..."
          />
          <FaSearch size={16} />
        </div>
        <div className="flex flex-row items-center gap-4 max-md:hidden">
          <SwitchButton />
          {ListTabs.map((tab) =>
            tab.title === "Login" && isAuthenticated ? (
              <button
                key={tab.title}
                className="px-3 text-sm font-bold uppercase buttonCategory bg-black text-white py-1"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link
                href={tab.link}
                key={tab.title}
                className="px-3 text-sm font-bold uppercase buttonCategory bg-black text-white py-1"
              >
                {tab.title}
              </Link>
            )
          )}
        </div>
        <div className="md:hidden">
          <HiOutlineMenuAlt3
            size={20}
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </div>

        <div
          className={`absolute  py-3 left-0 w-full h-screen bg-white bg-opacity-90 flex flex-col items-center justify-start px-2 gap-3 ${
            openMenu ? "top-[70px]" : "-top-[1000px]"
          } transition-all duration-200`}
        >
          <div className="w-full px-3 py-2 border rounded-md flex flex-row items-center shadow text-black bg-white">
            <input
              type="text"
              className=" bg-transparent flex-1 outline-none placeholder:text-black "
              placeholder="Search ..."
            />
            <FaSearch size={14} />
          </div>
          {ListTabs.map((tab) =>
            tab.title === "Login" && isAuthenticated ? (
              <button
                key={tab.title}
                className="px-3 text-sm font-bold uppercase buttonCategory bg-black text-white py-1"
                onClick={() => {
                  handleLogout();
                  setOpenMenu(false);
                }}
              >
                Logout
              </button>
            ) : (
              <Link
                onClick={() => setOpenMenu(false)}
                href={tab.link}
                key={tab.title}
                className="px-3 text-sm font-bold uppercase buttonCategory bg-black text-white py-1"
              >
                {tab.title}
              </Link>
            )
          )}

          <div className="flex flex-row w-full justify-center gap-4 p-2">
            <a href="https://www.facebook.com/literally.dng" target="_blank">
              <FaSquareFacebook size={40} />
            </a>

            <a href="https://www.facebook.com/literally.dng" target="_blank">
              <SiDiscord size={40} />
            </a>

            <a href="https://www.facebook.com/literally.dng" target="_blank">
              <GrPaypal size={40} />
            </a>
          </div>
          <SwitchButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
