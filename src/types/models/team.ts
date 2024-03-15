import { TeamMemberModel } from "./team-member";
import { TeamFollowerModel } from "./team-follower";
import { IBaseModel } from "../interfaces/base.interface";

export interface TeamModel extends IBaseModel {
    team_name: string;
    slug: string;
    about_team: string;
    public_team_email: string;
    team_social: string;
    location: string;
    team_follower: TeamFollowerModel[];
    users: TeamMemberModel[];
}