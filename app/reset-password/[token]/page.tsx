import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import login_gif from "@images//login.gif";
import NewPasswordForm from "@/components/reset-password/new-password-form";

const SubmitNewPassword = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4 flex-col gap-3 ">
      <div className="flex flex-col gap-2 w-full max-w-lg">
        <div className="w-full bg-[#fbfbfb] shadow-2xl rounded-md p-4 flex flex-col gap-3 relative">
          <Link
            href={"/"}
            className="flex flex-row items-center font-medium text-sm absolute -top-10 left-0"
          >
            <IoIosArrowBack size={24} className="text-black" /> Home
          </Link>

          <div className="flex flex-col">
            <h1 className="font-bold text-lg">Enter your new password</h1>
          </div>
          <div className="w-[200px] h-[200px] max-w-[200px] relative overflow-hidden self-center rounded-2xl">
            <Image alt="login" src={login_gif} fill objectFit="cover" />
          </div>
          <NewPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default SubmitNewPassword;
