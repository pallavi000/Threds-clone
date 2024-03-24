import { TLoginInput } from "../@types/auth";
import axiosInstance from "../utils/axiosInstance";

export const LoginApi = async (data: TLoginInput) => {
  return await axiosInstance.post("/auth/login", data);
};

export const getCurrentUserApi = async () => {
  return await axiosInstance.get("/auth/me");
};

export const getUserByIdApi = async (id: number) => {
  return await axiosInstance.get(`/users/${id}`);
};
