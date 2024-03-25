import { IPagination } from "@/common";
import { TeamModel } from "@/types/models/team";
import { TournamentModel } from "@/types/models/tournament";
import { Dispatch, SetStateAction } from "react";

export interface ITournamentProps {
  tournaments: TournamentModel[];
  isLoading: boolean;
  pagination?: IPagination;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
