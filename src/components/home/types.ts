import { PostModel } from "@/types/models/post";
import { TeamModel } from "@/types/models/team";
import { TournamentModel } from "@/types/models/tournament";

export interface IPostProps {
  posts: PostModel[];
  isLoading: boolean;
}

export interface ITournamentProps {
  tournaments: TournamentModel[];
  isLoading: boolean;
}
