import { TUser } from "./auth";

export type TPost = {
  body: string;
  id: number;
  tags: string[];
  title: string;
  userId: number;
  user?: TUser;
};
