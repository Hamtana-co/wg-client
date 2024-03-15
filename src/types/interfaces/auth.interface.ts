import { RoleEnum } from "types/enums/role";

export interface IJwtPayload {
  sub: number;
  role: RoleEnum;
}
