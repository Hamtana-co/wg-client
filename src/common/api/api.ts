import axios from "axios";
import { IPaginatedResponse, IQuery } from "./types";
import { getCookie } from "../utils";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Read token from cookies and set to axios headers
api.interceptors.request.use(async (config) => {
  const key = "token";
  if (typeof window == "undefined") {
    const { cookies } = await import("next/headers");
    const token = cookies().get(key)?.value;
    if (token) config.headers.Authorization = `Bearer ${token}`;
  } else {
    const token = getCookie("token");
    if (token?.length) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export class CrudService<T> {
  constructor(private entity: string) {}

  async getAll(query: string = "", sub?: string) {
    let entity = this.entity;
    if (sub) entity = `${entity}/${sub}`;
    return api.get<IPaginatedResponse<T>>(`/${entity}?${query}`);
  }

  async get(unique: number, query: string = "", sub?: string) {
    let entity = this.entity;
    if (sub) entity = `${entity}/${sub}`;
    return api.get<T>(`/${entity}/${unique}?${query}`);
  }

  async post(body: any, sub?: string) {
    let entity = this.entity;
    if (sub) entity = `${entity}/${sub}`;
    return api.post<T>(`/${entity}`, body);
  }

  async patch(unique: number, body: any, sub?: string) {
    let entity = this.entity;
    if (sub) entity = `${entity}/${sub}`;
    return api.patch<T>(`/${entity}/${unique}`, body);
  }

  async delete(unique: number, sub?: string) {
    let entity = this.entity;
    if (sub) entity = `${entity}/${sub}`;
    return api.delete<T>(`/${entity}/${unique}`);
  }
}
