import { RoleEnum } from "../enums/role";
import { IBaseModel } from "../interfaces/base.interface";
import { UploadModel } from "./upload";
import { WalletModel } from "./wallet";

export interface UserModel extends IBaseModel {
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  about?: string;
  location?: string;
  public_email?: string;
  wallet?: WalletModel;
  role: RoleEnum;
  profile?: UploadModel;
  phone_number?: string;
  email_verified: boolean;
  level_one_verified: boolean;
  full_verified: boolean;
}
