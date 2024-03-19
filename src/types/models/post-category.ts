import { IBaseModel } from "../interfaces/base.interface";
import { PostModel } from "./post";

export interface PostCategoryModel extends IBaseModel {
  name: string;
  slug: string;
  posts: PostModel[];
}
