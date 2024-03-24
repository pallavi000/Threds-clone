import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPostApi } from "../../service/postService";
import { TPostsState } from "../../@types/reduxState";
import { TPost } from "../../@types/post";
import { getUserByIdApi } from "../../service/authService";

const initialState: TPostsState = {
  posts: null,
  isLoading: false,
  error: null,
  total: 0,
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    findPostByUserId: (state, action) => {
      const post = state.posts?.find(
        (post: TPost) => post.userId === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        posts: action.payload.posts,
        total: action.payload.total,
        error: null,
      };
    });
    builder.addCase(fetchAllPosts.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message || null,
      };
    });
    builder.addCase(fetchUserByUserId.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(fetchUserByUserId.fulfilled, (state, action) => {
      let post = state.posts?.find(
        (post: TPost) => post.userId === action.payload.id
      );
      if (post) {
        post.user = action.payload;
      }
      (state.isLoading = false), (state.error = null);
      return state;
    });
    builder.addCase(fetchUserByUserId.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message || null,
      };
    });
  },
});

export const fetchAllPosts = createAsyncThunk("fetchAllPosts", async () => {
  const response = await getAllPostApi();
  return response.data;
});
export const fetchUserByUserId = createAsyncThunk(
  "fetchUserByUserId",
  async (id: number) => {
    try {
      const response = await getUserByIdApi(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export default postsSlice.reducer;
