import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./reducers/authReducer";
import { persistStore } from "redux-persist";

const rootReducer = {
  auth: authReducer,
};

let store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
