import axiosClient from "./axios-client";

export const userService = {
  requestResetPassword: async (data: { email: string }) => {
    return await axiosClient.post("/user/requestResetPassword", data);
  },
  resetPassword: async (data: { password: string; token: string }) => {
    return await axiosClient.post(`/user/update-password/${data.token}`, {
      password: data.password,
    });
  },
  getUserProfile: async () => {
    return await axiosClient.get("/user/profile");
  },
};
