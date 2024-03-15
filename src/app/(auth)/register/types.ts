import { UserModel } from "types/models/user"

export interface IRegisterResponse {
  user: UserModel
  token: string
}
