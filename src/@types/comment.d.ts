import { TUser } from "./auth";

export type TComment = {
  id: number;
  body: string;
  postId: number;
  user: TUser;
};
