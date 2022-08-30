export interface IPostsModel {
  title: string;
  description: string;
  createAt: Date | string;
  status: string;
  image: Blob | null;
}

export type PostsModelList = IPostsModel[];
