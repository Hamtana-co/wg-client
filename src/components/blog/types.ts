import { IPagination } from "@/common";
import { PostModel } from "@/types/models/post";
import { Dispatch, SetStateAction } from "react";

export interface IPostsProps {
  posts: PostModel[];
  isLoading: boolean;
  pagination?: IPagination;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
