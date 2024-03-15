import axios from "axios"
import { ILoginResponse } from "./types"

export const POST_LOGIN = (body: any) => {
  return axios.post<ILoginResponse>("/api/login", body)
}
