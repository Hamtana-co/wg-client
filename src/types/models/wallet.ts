import { IBaseModel } from "../interfaces/base.interface";
import { UserModel } from "./user";

export interface WalletModel extends IBaseModel {
  owner: UserModel;
  balance: number;
}
