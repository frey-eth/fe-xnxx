import axiosClient from "./axios-client";

export const comicService = {
  getListComic: async (params?: any) => {
    return await axiosClient.get("comic", { params });
  },
  getSingleComic: async (id: string) => {
    return await axiosClient.get(`comic/${id}`);
  },
};
