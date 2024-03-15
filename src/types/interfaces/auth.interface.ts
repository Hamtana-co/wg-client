import { RoleEnum } from "../enums/role";


export interface IJwtPayload {
  sub: number;
  role: RoleEnum;
}
