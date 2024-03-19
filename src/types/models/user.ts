import { RoleEnum } from "../enums/role";
import { IBaseModel } from "../interfaces/base.interface";
import { WalletModel } from "./wallet";

export interface UserModel extends IBaseModel {
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  about?: string;
  location?: string;
  public_email?: string;
  wallet: WalletModel;
  role: RoleEnum;
  is_verified: boolean;
}
