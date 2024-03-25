import { IBaseModel } from "../interfaces/base.interface";
import { TournamentModel } from "./tournament";
import { UserModel } from "./user";

export interface TournamentUserModel extends IBaseModel {
  tournament: TournamentModel;
  user: UserModel;
}
