import { IPagination } from "@/common";
import { PostModel } from "@/types/models/post";
import { TeamModel } from "@/types/models/team";
import { Dispatch, SetStateAction } from "react";

export interface IPostProps {
  items: PostModel[];
  sectionTitle: string;
  isLoading: boolean;
  pagination?: IPagination;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
