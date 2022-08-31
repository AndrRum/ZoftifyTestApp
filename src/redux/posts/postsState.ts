import { PostsModelList } from "../../models/postsModel";

export interface IPostsState {
  posts: PostsModelList;
}

export const PostsInitialState: IPostsState = {
  posts: [],
};
