"use client";

import TournamentCard from "../tournament-card";
import TeamCard from "../tournament-card";
import { ITournamentProps } from "../types";

export default function TournamentGrid({ tournaments }: ITournamentProps) {
  return (
    <div className="flex justify-start items-start">
      <div className="posts_wrap grid grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {tournaments.length >= 1 ? (
          tournaments.map((item) => (
            <TournamentCard
              key={`team-${item.slug}`}
              title={item.title}
              cover={item.cover.full_path}
              slug={item.slug}
            />
          ))
        ) : (
          <div>
            <p className="text-white">تورنومنتی وجود ندارد</p>
          </div>
        )}
      </div>
    </div>
  );
}
