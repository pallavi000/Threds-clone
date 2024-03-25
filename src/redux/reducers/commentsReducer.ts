import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TCommentState } from "../../@types/reduxState";
import { getCommentsByPostIdApi } from "../../service/commentService";

const initialState: TCommentState = {
  comments: null,
  isLoading: false,
  error: null,
  total: 0,
};
const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByPostId.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        comments: action.payload.comments,
        total: action.payload.total,
        error: null,
      };
    });
    builder.addCase(fetchCommentsByPostId.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message || null,
      };
    });
  },
});

export const fetchCommentsByPostId = createAsyncThunk(
  "fetchCommentsByPostId",
  async (postId: number) => {
    try {
      const response = await getCommentsByPostIdApi(postId);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export default commentsSlice.reducer;
