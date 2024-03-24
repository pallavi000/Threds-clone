import axiosInstance from "../utils/axiosInstance";

export const getAllPostApi = async () => {
  return await axiosInstance.get("/posts");
};
