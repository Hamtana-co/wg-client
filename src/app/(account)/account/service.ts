import { CrudService } from "@/common";
import { UserModel } from "@/types/models/user";
import { WalletModel } from "@/types/models/wallet";


export const userService = new CrudService<UserModel>("user")
export const walletService = new CrudService<WalletModel>("wallet")
