import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import login_gif from "@images//login.gif";
import Image from "next/image";
const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4 flex-col gap-3 ">
      <div className="flex flex-col gap-2 w-full max-w-lg">
        <Link
          href={"/"}
          className="flex flex-row items-center font-medium text-sm"
        >
          <IoIosArrowBack size={24} className="text-black" /> Home
        </Link>
        <div className="w-full bg-[#fbfbfb] shadow-2xl rounded-md p-4 flex flex-col gap-3">
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">Login your account</h1>
            <p className="text-sm font-medium text-gray-500">
              Login as Google below to create your account
            </p>
          </div>
          <div className="w-[200px] h-[200px] max-w-[200px] relative overflow-hidden self-center rounded-2xl">
            <Image alt="login" src={login_gif} fill objectFit="cover" />
          </div>
          <div className="flex flex-row gap-3">
            <button className="flex flex-row items-center justify-center gap-2 bg-black text-white p-2 rounded-md w-full">
              <FaGoogle size={24} />
              <span> Google</span>
            </button>

            <button className="flex flex-row items-center justify-center gap-2 bg-black text-white p-2 rounded-md w-full">
              <FaFacebookF size={24} />
              <span> Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
