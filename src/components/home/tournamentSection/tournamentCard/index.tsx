import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface IItems {
  title: string;
  cover: string;
  platform: string;
  game: string;
  slug: string;
  max_players: number;
  date: string;
}
export default function TournamentCard({
  title,
  cover,
  slug,
  platform,
  game,
  max_players,
  date,
}: IItems) {
  return (
    <div className="max-w-[280px] pb-24 z-10">
      <div className="flex flex-col gap-2 items-center justify-center bg-[#d9d7e215] backdrop-blur-md rounded-3xl p-3">
        <Link href={`/tournament/${slug}`} className=" w-full flex justify-center">
          <Image
            className="flex w-[280px] h-[180px] rounded-2xl justify-center flex-col object-cover"
            src={cover}
            width={500}
            height={500}
            alt="test"
          />
        </Link>
        <Link href={`/tournament/${slug}`} className="w-full px-3 pt-2">
          <span className="text-white text-right w-full flex justify-start font-[peyda] font-medium text-lg line-clamp-1">
            {title}
          </span>
        </Link>
        <div className="flex justify-start items-start w-full px-4">
          <ul className="text-sm flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <span>دستگاه :</span>
              {platform}
            </li>
            <li className="flex items-center gap-2">
              <span>نام بازی :</span>
              {game}
            </li>
            <li className="flex items-center gap-2">
              <span>تعداد پلیر :</span>
              {max_players}
            </li>
            <li className="flex items-center gap-2">
              <span>زمان برگذاری :</span>
              {date}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
