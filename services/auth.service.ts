import { LoginDataType, RegisterDataType } from "@/types/user";
import axiosClient from "./axios-client";

export const authService = {
  login: async (data: LoginDataType) => {
    return await axiosClient.post("user/login/", data);
  },
  register: async (data: RegisterDataType) => {
    return await axiosClient.post("user/register/", data);
  },
};
