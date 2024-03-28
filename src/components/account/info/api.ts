import axios from "axios";
import { IEmailVerify, ISendEmailVerify } from "./types";

export const EMAIL_SEND_CODE = (body: any) => {
  return axios.post<ISendEmailVerify>("/api/send-email-verify", body);
};

export const EMAIL_VERIFY = (body: any) => {
  return axios.post<IEmailVerify>("/api/email-verify", body);
};
