import { IBaseModel } from "../interfaces/base.interface";
import { PostModel } from "./post";

export interface UploadModel extends IBaseModel {
    name: string;
    originalname: string;
    size: number;
    mimetype: string;
    path: string;
    movies: PostModel[];
  }
  