import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TPostInput } from "../../@types/post";
import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "../../redux/store";
import { fetchCurrentUser } from "../../redux/reducers/authReducer";
import { addNewPost } from "../../redux/reducers/postReducer";

const AddPost = () => {
  const user = useSelector((state: AppState) => state.auth.user);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<TPostInput>();
  const onSubmit: SubmitHandler<TPostInput> = async (data: TPostInput) => {
    if (!user) return;
    data.userId = user.id;
    await dispatch(addNewPost(data));
    reset();
  };

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ marginTop: 4 }}
      gap={2}
    >
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            label="Write your post title..."
            sx={{
              outlineColor: "black",
            }}
            fullWidth
            required
            autoFocus
          />
        )}
      />
      <Controller
        name="body"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            label="Write your post body..."
            sx={{
              outlineColor: "black",
            }}
            fullWidth
            required
            autoFocus
          />
        )}
      />
      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            label="Write your post tags..."
            sx={{
              outlineColor: "black",
            }}
            fullWidth
            required
            autoFocus
          />
        )}
      />
      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: "black" }}
        >
          Post
        </Button>
      </Box>
    </Stack>
  );
};

export default AddPost;
