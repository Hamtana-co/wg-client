import { CrudService } from "@/common";
import { TeamModel } from "@/types/models/team";

export const teamService = new CrudService<TeamModel>("team")