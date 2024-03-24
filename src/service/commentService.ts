import axiosInstance from "../utils/axiosInstance";

export const getCommentsByPostIdApi = async (id: number) => {
  return await axiosInstance.get(`/posts/${id}/comments`);
};
