import { TUser } from "./auth";

export type TAuthState = {
  user: TUser | null;
  isLoading: boolean;
  error: string | null;
  token: string | null;
};
