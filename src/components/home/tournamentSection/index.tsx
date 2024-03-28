import { Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ITournamentProps } from "../types";
import TournamentCard from "./tournamentCard";

export default function TournamentSection({ tournaments }: ITournamentProps) {
  return (
    <div className="flex justify-center px-2">
      <div className="w-full lg:max-w-[1400px] py-10 md:py-24 bg-[#1c1c1d]">
        <section className="flex  items-center pb-8 justify-between w-full ">
          <div className="flex items-center gap-2 text-[#7567C7] ">
            <span className="">
              <Icon
                icon="solar:document-text-bold-duotone"
                className="w-8 h-8 lg:w-12 lg:h-12"
              />
            </span>
            <h2 className="text-center font-[peyda] text-lg md:text-2xl lg:text-2.5xl font-black">
              جدید ترین تورنومنت ها
            </h2>
          </div>
          <div className="hidden">
            <Divider />
          </div>
          <div className="">
            <Link href="/team" className="text-sm w-full px-3 py-2 ">
              مشاهده همه
            </Link>
          </div>
        </section>
        <section>
          <div className="flex justify-start items-center gap-10 overflow-y-auto relative ">
            {tournaments.length >= 1 ? (
              tournaments.map((item) => (
                <TournamentCard
                  key={`team-${item.id}`}
                  title={item.title}
                  cover={item.cover?.full_path}
                  date={(item.date = new Date().toLocaleDateString("fa-IR"))}
                  game={item.game.name}
                  platform={item.platform.title}
                  max_players={item.max_players}
                  slug={item.slug}
                />
              ))
            ) : (
              <div>
                <p className="text-white">تیمی موجود نیست</p>
              </div>
            )}
            <span className="w-16 h-16 bg-[#7749cc] absolute  blur-2xl "></span>
          </div>
        </section>
      </div>
    </div>
  );
}
