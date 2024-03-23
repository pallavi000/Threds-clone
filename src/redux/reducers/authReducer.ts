import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginApi, getCurrentUserApi } from "../../service/authService";
import { TLoginInput, TUser } from "../../@types/auth";
import { persistReducer } from "redux-persist";
import { authPersistConfig } from "../../utils/persistConfig";
import { TAuthState } from "../../@types/reduxState";

const initialState: TAuthState = {
  token: null,
  isLoading: false,
  user: null,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      return {
        ...state,
        token: null,
        user: null,
        isLoading: false,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(authLogin.pending, (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        user: action.payload?.rest,
        token: action.payload?.token,
      };
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message || null,
      };
    });
    builder.addCase(fetchCurrentUser.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: null,
      };
    });
    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message || null,
      };
    });
  },
});

export const authLogin = createAsyncThunk(
  "authLogin",
  async (data: TLoginInput) => {
    try {
      const {
        data: { token, ...rest },
      } = await LoginApi(data);
      return { token, rest };
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "fetchCurrentUser",
  async () => {
    try {
      const response = await getCurrentUserApi();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const { logout } = authSlice.actions;
export default persistReducer(authPersistConfig, authSlice.reducer);
