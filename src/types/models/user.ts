import { IBaseModel } from "types/interfaces/base.interface"
import { RoleEnum } from "../enums/role"

export interface UserModel extends IBaseModel {
  username: string
  email: string
  role: RoleEnum
  is_verified: boolean
}
