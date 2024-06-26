import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TPostState } from "../../@types/reduxState";
import { addNewPostApi, getPostById } from "../../service/postService";
import { TPostInput } from "../../@types/post";

const initialState: TPostState = {
  post: null,
  isLoading: false,
  error: null,
};
const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostById.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(fetchPostById.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        post: action.payload,
        error: null,
      };
    });
    builder.addCase(fetchPostById.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message || null,
      };
    });
    builder.addCase(addNewPost.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        post: action.payload,
        error: null,
      };
    });
    builder.addCase(addNewPost.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message || null,
      };
    });
  },
});

export const fetchPostById = createAsyncThunk(
  "fetchPostById",
  async (id: number) => {
    try {
      const response = await getPostById(id);
      return response.data;
    } catch (error) {}
  }
);

export const addNewPost = createAsyncThunk(
  "addNewPost",
  async (data: TPostInput) => {
    try {
      const response = await addNewPostApi(data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export default postSlice.reducer;
