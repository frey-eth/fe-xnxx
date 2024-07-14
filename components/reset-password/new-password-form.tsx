"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import toast from "react-hot-toast";
import { userService } from "@/services/user.service";
import { useRouter } from "next/navigation";

const newPasswordSchema = yup.object().shape({
  password: yup.string().min(6).required("Please enter your password!"),
  confirmPassword: yup
    .string()
    .min(6)
    .oneOf([yup.ref("password"), undefined], "Passwords must match"),
});

const NewPasswordForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (data: any) => {
    try {
      await userService.resetPassword({
        password: data.password,
        token: window.location.pathname.split("/")[2],
      });
      toast.success("Password reset successfully!");
      router.push("/login");
    } catch (error) {
      toast.error("Account not found!");
    }
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col gap-1">
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
        <div className="flex flex-col gap-1">
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
            className="p-2 border border-gray-300 rounded-md outline-none w-full flex-1"
          />

          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword?.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="bg-black text-white p-2 rounded-md hover:opacity-80"
      >
        Reset Password
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

export default NewPasswordForm;
