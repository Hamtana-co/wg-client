import { CrudService } from "@/common";
import { PostModel } from "@/types/models/post";
import { TournamentModel } from "@/types/models/tournament";
import { UploadModel } from "@/types/models/upload";

export const tournamentService = new CrudService<TournamentModel>("tournament")