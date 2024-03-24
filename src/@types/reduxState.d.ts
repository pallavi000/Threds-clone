import { TUser } from "./auth";
import { TPost } from "./post";

export type TAuthState = {
  user: TUser | null;
  isLoading: boolean;
  error: string | null;
  token: string | null;
};

export type TPostsState = {
  posts: TPost[] | null;
  isLoading: boolean;
  error: string | null;
  total: number;
};

export type TPostState = {
  post: TPost | null;
  isLoading: boolean;
  error: string | null;
};
