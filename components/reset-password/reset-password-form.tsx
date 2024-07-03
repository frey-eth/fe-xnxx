"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email")
    .required("Please enter your email!"),
});

const ResetPasswordForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (data: { email: string }) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col gap-1">
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
      </div>

      <button
        type="submit"
        className="bg-black text-white p-2 rounded-md hover:opacity-80"
      >
        Submit
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

export default ResetPasswordForm;
