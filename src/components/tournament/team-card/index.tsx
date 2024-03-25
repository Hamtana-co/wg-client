"use client";

import Image from "next/image";
import Link from "next/link";

export default function TeamCard({ title, slug }: any) {
  return (
    <div className="blog flex flex-col font-[irsans] max-w-80 bg-white dark:bg-[#ffffff14] border  border-neutral-100 dark:border-none overflow-hidden rounded-3xl">
      <div className="p-3 h-[220px] overflow-hidden">
        <Link href={`/team/${slug}`}></Link>
      </div>

      <div className="flex-grow px-5 py-3">
        <h4 className=" font-light text-lg line-clamp-2 mb-3">
          <Link href={`/team/${slug}`} className="line-clamp-1">
            {title}
          </Link>
        </h4>
      </div>
    </div>
  );
}
