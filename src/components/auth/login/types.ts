import { UserModel } from "@/types/models/user"


export interface ILoginResponse {
  user: UserModel
  token: string
}
