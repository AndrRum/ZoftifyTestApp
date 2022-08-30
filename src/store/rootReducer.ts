import { combineReducers } from '@reduxjs/toolkit';
import { postsReducer } from "../redux/posts/postsSlice";


export const rootReducer = combineReducers({
  posts: postsReducer
});
