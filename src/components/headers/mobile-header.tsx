"use client"

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function MobileHeader() {
  return (
    <nav className="lg:hidden flex justify-between bg-[#12141C] items-center fixed border-[#888C8C] top-0 left-0 rtl w-full py-4 px-5 border-b-2 z-50">
      <div>
        <Link href="/about-us">
          <Icon icon="solar:info-square-bold-duotone" className="w-8 h-8" />
        </Link>
      </div>
      <div>
        <h1 className="text-[#D1BBFF] text-3xl">
          <Link href="/">We Gamers</Link>
        </h1>
      </div>
    </nav>
  );
}
