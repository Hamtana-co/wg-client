import { CrudService } from "@/common";
import { UserModel } from "@/types/models/user";


export const userService = new CrudService<UserModel>("user")
