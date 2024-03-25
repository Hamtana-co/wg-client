"use client";

import TeamCard from "../team-card";
import { ITournamentProps } from "../types";

export default function TeamGrid({ tournaments }: ITournamentProps) {
  return (
    <div className="flex justify-start items-start">
      <div className="posts_wrap grid grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {tournaments.length >= 1 ? (
          tournaments.map((item) => (
            <TeamCard
              key={`team-${item.slug}`}
              title={item.title}
              slug={item.slug}
            />
          ))
        ) : (
          <div>
            <p className="text-white">تیمی وجود ندارد</p>
          </div>
        )}
      </div>
    </div>
  );
}
