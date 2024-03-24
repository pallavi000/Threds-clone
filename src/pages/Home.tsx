import React, { useEffect } from "react";
import { AppState, useAppDispatch } from "../redux/store";
import { fetchAllPosts } from "../redux/reducers/postsReducer";
import { useSelector } from "react-redux";
import { TPost } from "../@types/post";
import Post from "../components/Home/Post";
import { Container } from "@mui/material";

function Home() {
  const dispatch = useAppDispatch();

  const { posts, isLoading } = useSelector((state: AppState) => ({
    posts: state.posts.posts,
    isLoading: state.posts.isLoading,
  }));

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  isLoading && <div>App is Loading</div>;

  return (
    <Container maxWidth="md">
      {posts?.map((post: TPost) => {
        return <Post post={post} />;
      })}
    </Container>
  );
}

export default Home;
