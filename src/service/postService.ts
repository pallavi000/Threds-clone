import { TPostInput } from "../@types/post";
import axiosInstance from "../utils/axiosInstance";

export const getAllPostApi = async () => {
  return await axiosInstance.get("/posts");
};

export const getPostById = async (id: number) => {
  return await axiosInstance.get(`/posts/${id}`);
};

export const addNewPostApi = async (data: TPostInput) => {
  return await axiosInstance.post("/posts/add", data);
};
