import { CrudService } from "@/common";
import { TeamModel } from "@/types/models/team";
import { TournamentModel } from "@/types/models/tournament";

export const tournamentService = new CrudService<TournamentModel>("tournament");
