import { IBaseModel } from "../interfaces/base.interface";
import { PostCategoryModel } from "./post-category";
import { UploadModel } from "./upload";
import { UserModel } from "./user";

export interface PostModel extends IBaseModel {
  title: string;
  slug: string;
  image: UploadModel;
  image_alt?: string;
  author: UserModel;
  short_desc: string;
  body: string;
  category: PostCategoryModel;
  view: number;
  published: boolean;
}
