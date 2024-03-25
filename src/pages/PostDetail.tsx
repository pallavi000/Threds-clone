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
import { fetchCommentsByPostId } from "../redux/reducers/commentsReducer";
import { TComment } from "../@types/comment";

function PostDetail() {
  const params = useParams();
  const postId = params.id;

  const { post, isLoading, comments, totalComment } = useSelector(
    (state: AppState) => ({
      post: state.post.post,
      isLoading: state.post.isLoading,
      comments: state.comments.comments,
      totalComment: state.comments.total,
    })
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (postId) {
      dispatch(fetchPostById(Number(postId)));
      dispatch(fetchCommentsByPostId(Number(postId)));
    }
  }, [postId]);

  console.log(comments, "comments");
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
            <Typography variant="body1">{post?.body}</Typography>
            <Stack direction={"row"} gap={3}>
              {post?.tags.map((tag: string) => {
                return <Chip label={tag} />;
              })}
            </Stack>
            <Typography variant="h6">Comments ({totalComment})</Typography>
            {comments?.map((comment: TComment) => {
              return (
                <Stack direction={"row"} gap={2}>
                  <Avatar src={comment.user.username}></Avatar>
                  <Stack>
                    <Typography variant="body1" sx={{ fontWeight: "600" }}>
                      {comment.user.username}
                    </Typography>
                    <Typography variant="body2">{comment.body}</Typography>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
        <Button variant="text">...</Button>
      </Stack>
    </Container>
  );
}

export default PostDetail;
