import { TeamMemberModel } from "./team-member";
import { TeamFollowerModel } from "./team-follower";
import { IBaseModel } from "../interfaces/base.interface";
import { GameModel } from "./game";
import { UploadModel } from "./upload";
import { PlatformModel } from "./platform";
import { TournamentUserModel } from "./tournament-user";

export interface TournamentModel extends IBaseModel {
  title: string;
  slug: string;
  description: string;
  banner: UploadModel;
  cover: UploadModel;
  location: string;
  platform: PlatformModel;
  game: GameModel;
  max_players: number;
  play_mode: string;
  date: string;
  joined_players: TournamentUserModel[];
}
