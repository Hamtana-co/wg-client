import { CrudService } from "@/common";
import { TeamModel } from "@/types/models/team";
import { UserModel } from "@/types/models/user";
import { WalletModel } from "@/types/models/wallet";

export const teamService = new CrudService<TeamModel>("team")
