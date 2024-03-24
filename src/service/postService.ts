import axiosInstance from "../utils/axiosInstance";

export const getAllPostApi = async () => {
  return await axiosInstance.get("/posts");
};

export const getPostById = async (id: number) => {
  return await axiosInstance.get(`/posts/${id}`);
};
