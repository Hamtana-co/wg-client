"use client";

import Image from "next/image";

export default function TournamentSinglePage({
  title,
  banner,
  description,
  location,
  platform,
  game,
  max_players,
  play_mode,
  date,
  joined_players,
}: any) {
  return (
    <div className="container pt-36 mx-auto w-full font-[irsans]">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-x-7 gap-y-8 mt-8 md:mt-10">
        <div className="col-span-full lg:col-span-8 xl:col-span-9 w-fit">
          <div className="bg-white dark:bg-[#242a38] rounded-2xl p-4.5 sm:p-5 ">
            <div className="flex items-center gap-x-2 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-b-neutral-200/60 dark:border-b-white/10 relative">
              <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-[#9F70FD] rounded-r-sm"></span>
              <h1 className="font-danaDemiBold text-xl md:text-[1.625rem]/10 font-[peyda] font-medium">
                {title}
              </h1>
            </div>

            <div className="grid sm:flex grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 mb-6 text-slate-500 font-danaMedium text-sm sm:text-base">
              <div className="flex items-center gap-x-1.5">
                <svg className="size-6 sm:size-7">
                  <use href="#user"></use>
                </svg>
                <span>{game}</span>
              </div>

              <div className="flex items-center gap-x-1.5">
                <svg className="size-6 sm:size-7">
                  <use href="#calendar"></use>
                </svg>
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-x-1.5">
                <svg className="size-6 sm:size-7">
                  <use href="#calendar"></use>
                </svg>
                <span>{max_players}</span>
              </div>
              <div className="flex items-center gap-x-1.5">
                <svg className="size-6 sm:size-7">
                  <use href="#calendar"></use>
                </svg>
                <span>{play_mode}</span>
              </div>
              <div className="flex items-center gap-x-1.5">
                <svg className="size-6 sm:size-7">
                  <use href="#calendar"></use>
                </svg>
                <span>{date}</span>
              </div>

              <div className="flex items-center gap-x-1.5">
                <svg className="size-6 sm:size-7">
                  <use href="#eye"></use>
                </svg>
                <span>{platform}</span>
              </div>
            </div>
            <div className="w-[1000px]">
              <Image
                width={1000}
                height={800}
                src={banner}
                className="aspect-video object-cover rounded-2xl w-full h-full"
                alt="ساخت سرچ باکس در html"
              />
            </div>
            <div>{description}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
