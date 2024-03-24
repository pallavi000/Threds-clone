import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AppState, useAppDispatch } from "../redux/store";
import { fetchPostById } from "../redux/reducers/postReducer";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

function PostDetail() {
  const params = useParams();
  const postId = params.id;

  const { post, isLoading } = useSelector((state: AppState) => ({
    post: state.post.post,
    isLoading: state.post.isLoading,
  }));

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (postId) {
      dispatch(fetchPostById(Number(postId)));
    }
  }, [postId]);

  isLoading && "Post is loading";

  return (
    <Container maxWidth="md" sx={{ paddingY: 6 }}>
      <Stack direction={"row"} gap={8}>
        <Stack direction={"row"} gap={4}>
          <Box>
            <Avatar
              src={post?.user?.image}
              alt={post?.user?.firstName}
            ></Avatar>
          </Box>
          <Stack gap={2}>
            <Typography variant="h4">{post?.title}</Typography>
            <Typography variant="h6">{post?.body}</Typography>
            <Stack direction={"row"} gap={3}>
              {post?.tags.map((tag: string) => {
                return <Chip label={tag} />;
              })}
            </Stack>
          </Stack>
        </Stack>
        <Button variant="text">...</Button>
      </Stack>
    </Container>
  );
}

export default PostDetail;
