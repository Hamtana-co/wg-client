"use client";

import TeamCard from "../team-card";
import { ITeamsProps } from "../types";

export default function TeamGrid({ teams }: ITeamsProps) {
  return (
    <div className="flex justify-start items-start">
      <div className="posts_wrap grid grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {teams.length >= 1 ? (
          teams.map((item) => (
            <TeamCard
              key={`team-${item.slug}`}
              team_name={item.team_name}
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
