import { RoleEnum } from "types/enums/role";

type UserPermissions = {
  [key in RoleEnum]?: string[];
};

export const userPermissions: UserPermissions = {
  [RoleEnum.FOUNDER]: ["/", "/team", "/account"],
  [RoleEnum.USER]: ["/", "/team"],
};
