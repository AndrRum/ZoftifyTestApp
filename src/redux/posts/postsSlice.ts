import { createSlice } from "@reduxjs/toolkit";
import { PostsInitialState } from "./postsState";

const postsSlice = createSlice({
  name: "Posts",
  initialState: PostsInitialState,
  reducers: {
    createPost(state, action) {

    },
    changePost(state, action) {

    }
  },
});

export const {
  createPost,
} = postsSlice.actions;

export const {reducer: postsReducer} = postsSlice;
