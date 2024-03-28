"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function MobileNavigation({ params }: { params: { slug: string } }) {
  console.log(params)

  const [trx, setTrx] = useState<string>("home");
  return (
    <div className="text-sm font-[peyda] font-medium lg:hidden fixed  bottom-4 left-3 right-3 rounded-[22px] px-2 py-3 rtl bg-[#dddddd21] backdrop-blur-lg z-30">
      <div className="flex justify-around relative items-center text-white">
        <button
          onMouseEnter={() => setTrx("home")}
          onClick={() => setTrx("home")}
          className="relative  text-white"
        >
          <Link
            href="/"
            className="flex flex-col gap-2 items-center justify-center"
          >
            <Icon icon="solar:home-angle-2-line-duotone" className="w-7 h-7" />
            <span>خانه</span>
          </Link>
          <span
            className={`absolute ${
              trx == "home" ? "block" : "hidden"
            } w-12 h-12 bg-[#5b3bd1] rounded-full blur-md -z-10 top-0 -left-2`}
          ></span>
        </button>
        <button
          onMouseEnter={() => setTrx("tournament")}
          onClick={() => setTrx("tournament")}
        >
          <Link
            href="/tournament"
            className=" relative flex flex-col gap-2 items-center justify-center"
          >
            <Icon icon="solar:cup-star-line-duotone" className="w-7 h-7" />
            <span>تورنومنت</span>
            <span
              className={`absolute ${
                trx == "tournament" ? "block" : "hidden"
              } w-14 h-14 bg-[#5b3bd1] rounded-full blur-md -z-10 top-0 left-0`}
            ></span>
          </Link>
        </button>
        <button
          onMouseEnter={() => setTrx("team")}
          onClick={() => setTrx("team")}
        >
          <Link
            href="/team"
            className=" relative flex flex-col gap-2 items-center justify-center"
          >
            <Icon
              icon="solar:users-group-two-rounded-line-duotone"
              className="w-7 h-7"
            />
            <span>تیم ها</span>
            <span
              className={`absolute ${
                trx == "team" ? "block" : "hidden"
              } w-12 h-12 bg-[#5b3bd1] rounded-full blur-md -z-10 top-0 -left-2`}
            ></span>
          </Link>
        </button>
        <button
          onMouseEnter={() => setTrx("blog")}
          onClick={() => setTrx("blog")}
        >
          <Link
            href="/blog"
            className=" relative flex flex-col gap-2 items-center justify-center"
          >
            <Icon icon="solar:document-text-line-duotone" className="w-7 h-7" />
            <span>وبلاگ</span>
            <span
              className={`absolute ${
                trx == "blog" ? "block" : "hidden"
              } w-12 h-12 bg-[#5b3bd1] rounded-full blur-md -z-10 top-0 -left-2`}
            ></span>
          </Link>
        </button>
        <button
          onMouseEnter={() => setTrx("support")}
          onClick={() => setTrx("support")}
        >
          <Link
            href="/support"
            className="relative flex flex-col gap-2 items-center justify-center"
          >
            <Icon
              icon="solar:headphones-round-sound-line-duotone"
              className="w-7 h-7"
            />
            <span className="">پشتیبانی</span>
            <span
              className={`absolute ${
                trx == "support" ? "block" : "hidden"
              } w-12 h-12 bg-[#5b3bd1] rounded-full blur-md -z-10 top-0 left-0`}
            ></span>
          </Link>
        </button>
      </div>
    </div>
  );
}
