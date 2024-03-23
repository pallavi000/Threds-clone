import storage from "redux-persist/lib/storage";

export const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token", "user"],
};
