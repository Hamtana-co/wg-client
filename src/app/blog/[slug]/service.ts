import { CrudService } from "@/common";
import { PostModel } from "@/types/models/post";
import { UploadModel } from "@/types/models/upload";

export const postService = new CrudService<PostModel>("post")
export const uploadService = new CrudService<UploadModel>("upload")