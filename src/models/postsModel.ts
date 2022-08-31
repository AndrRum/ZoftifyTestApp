import { ImageSourcePropType } from "react-native";

export interface IPostsModel {
  title: string;
  description: string;
  createAt: string;
  status: string;
  image: ImageSourcePropType;
}

export type PostsModelList = IPostsModel[];
