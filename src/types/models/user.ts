import { RoleEnum } from "../enums/role";
import { IBaseModel } from "../interfaces/base.interface";

export interface UserModel extends IBaseModel {
  username: string;
  email: string;
  role: RoleEnum;
  is_verified: boolean;
}
