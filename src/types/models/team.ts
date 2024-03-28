import { TeamMemberModel } from "./team-member";
import { TeamFollowerModel } from "./team-follower";
import { IBaseModel } from "../interfaces/base.interface";
import { UploadModel } from "./upload";

export interface TeamModel extends IBaseModel {
  team_name: string;
  slug: string;
  logo: UploadModel;
  about_team: string;
  public_team_email: string;
  team_social: string;
  location: string;
  team_follower: TeamFollowerModel[];
  users: TeamMemberModel[];
}
