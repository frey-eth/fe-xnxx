"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterDataType } from "@/types/user";
import { authService } from "@/services/auth.service";
import Link from "next/link";

const signupSchema = yup.object().shape({
  name: yup.string().min(1, "Please enter your name!").required(),
  email: yup
    .string()
    .email("Invalid Email")
    .required("Please enter your email!"),
  password: yup.string().min(6).max(20).required(),
});

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterDataType>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: RegisterDataType) => {
    try {
      const res = await authService.register(data);
      if (res.data) {
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-500">
            Name <span className="text-red-500">*</span>
          </p>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter Your Name"
            className="p-2 border border-gray-300 rounded-md outline-none w-full flex-1"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
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

      <button
        type="submit"
        className="bg-black text-white p-2 rounded-md hover:opacity-80"
      >
        Signup
      </button>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href={"/login"} className="text-black font-medium">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
