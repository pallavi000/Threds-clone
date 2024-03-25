import React, { useEffect } from "react";
import { TPost } from "../../@types/post";
import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";
import { AppState, useAppDispatch } from "../../redux/store";

import { fetchUserByUserId } from "../../redux/reducers/postsReducer";
import { Link } from "react-router-dom";
import { handleTruncateText } from "../../utils/helper";

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
    <Box sx={{ py: 2, marginY: 2 }}>
      <Link to={`/post/${post.id}`}>
        <Stack direction={"row"} gap={8}>
          <Stack direction={"row"} gap={2}>
            <Box>
              <Avatar
                src={post.user?.image}
                alt={post.user?.firstName}
              ></Avatar>
            </Box>
            <Stack gap={0}>
              <Typography variant="h5">{post.title}</Typography>
              <Typography variant="h6">
                {handleTruncateText(post.body)}
              </Typography>
            </Stack>
          </Stack>
          <Button variant="text">...</Button>
        </Stack>
      </Link>
    </Box>
  );
}

export default Post;
