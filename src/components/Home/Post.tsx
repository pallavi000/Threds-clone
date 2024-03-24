import React, { useEffect } from "react";
import { TPost } from "../../@types/post";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { AppState, useAppDispatch } from "../../redux/store";

import { fetchUserByUserId } from "../../redux/reducers/postsReducer";

interface PostProps {
  post: TPost;
}
function Post(props: PostProps) {
  const post = props.post;
  const dispatch = useAppDispatch();
  const userId = post?.userId;

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserByUserId(userId));
    }
  }, []);

  return (
    <Stack direction={"row"} gap={8}>
      <Stack direction={"row"} gap={4}>
        <Box>
          <Avatar src={post.user?.image} alt={post.user?.firstName}></Avatar>
        </Box>
        <Stack gap={2}>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="h6">{post.body}</Typography>
        </Stack>
      </Stack>
      <Button variant="text">...</Button>
    </Stack>
  );
}

export default Post;
