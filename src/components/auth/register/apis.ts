import axios from "axios"
import { IRegisterResponse } from "./types"


export const POST_REGISTER = (body: any) => {
  return axios.post<IRegisterResponse>("/api/register", body)
}
