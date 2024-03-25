import { IPagination } from "@/common";
import { TeamModel } from "@/types/models/team";
import { Dispatch, SetStateAction } from "react";

export interface ITeamsProps {
  teams: TeamModel[];
  isLoading: boolean;
  pagination?: IPagination;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
