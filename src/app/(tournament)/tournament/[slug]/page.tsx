"use client";

import { useQuery } from "@tanstack/react-query";
import { tournamentService } from "../service";
import TournamentSinglePage from "@/components/tournament/SingleTournament";

export default function SingleBlog({ params }: { params: { slug: string } }) {
  const tournamentQuery = useQuery({
    queryKey: ["GET_TOURNAMENTS"],
    queryFn: () =>
      tournamentService.getSlug(
        params.slug,
        `relations[banner]=true&relations[platform]=true&relations[game]=true`
      ),
  });
  return (
    <TournamentSinglePage
      title={tournamentQuery.data?.data.title}
      banner={tournamentQuery.data?.data.banner}
      description={tournamentQuery.data?.data.description}
      location={tournamentQuery.data?.data.location}
      platform={tournamentQuery.data?.data.platform.title}
      game={tournamentQuery.data?.data.game.name}
      max_players={tournamentQuery.data?.data.max_players}
      play_mode={tournamentQuery.data?.data.play_mode}
      date={tournamentQuery.data?.data.date}
      joined_players={tournamentQuery.data?.data.joined_players || []}
    />
  );
}
