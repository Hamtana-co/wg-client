import { CrudService } from "@/common";
import { PostModel } from "@/types/models/post";

export const postService = new CrudService<PostModel>("post")