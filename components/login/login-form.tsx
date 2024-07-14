"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { LoginDataType } from "@/types/user";
import { authService } from "@/services/auth.service";
import { LocalStorage } from "@/utils/local_storage";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { login, selectAccessToken } from "@/lib/redux/auth-slice";

const loginSchema = yup.object().shape({
  email: yup.string().min(1, "Please enter your email").email().required(),
  password: yup.string().min(6).max(20).required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginDataType>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginDataType) => {
    try {
      const res = await authService.login(data);
      if (res.data) {
        LocalStorage().setToken(res.data.token);
        LocalStorage().setRefreshToken(res.data.refreshToken);
        toast.success("Login successfully");
        dispatch(
          login({
            accessToken: res.data.token,
            refreshToken: res.data.refreshToken,
          })
        );
        // window.location.href = "/";
      }
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-500">
            Email <span className="text-red-500">*</span>
          </p>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-md outline-none w-full flex-1"
          />

          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-500">
            Password <span className="text-red-500">*</span>
          </p>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-md outline-none w-full flex-1"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
      </div>
      <Link
        href={"/reset-password"}
        className="text-sm text-end font-medium text-gray-500"
      >
        Forgot password?{" "}
      </Link>
      <button
        type="submit"
        className="bg-black text-white p-2 rounded-md hover:opacity-80"
      >
        Login
      </button>
      <p className="text-center text-sm font-medium text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-black font-bold">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
