"use client"

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function MobileNavigation() {
  return (
    <div className="text-sm font-[yekan] lg:hidden fixed w-full bottom-0 left-0 border-[#888C8C] border-t-2 p-3 rtl bg-[#12141C] z-50">
      <div className="flex justify-around text-[#888C8C]">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Icon icon="solar:hamburger-menu-line-duotone" className="w-8 h-8" />
          <span>دسته بندی ها</span>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <Icon
            icon="solar:rounded-magnifer-bold-duotone"
            className="w-8 h-8"
          />
          <span>جستجو</span>
        </div>
        <div>
          <Link
            href="/"
            className="flex flex-col gap-2 items-center justify-center"
          >
            <Icon
              icon="solar:home-smile-angle-bold-duotone"
              className="w-8 h-8"
            />
            <span>صفحه اصلی</span>
          </Link>
        </div>
        <div>
          <Link
            href="/cart"
            className="flex flex-col gap-2 items-center justify-center"
          >
            <Icon icon="solar:cart-large-2-bold-duotone" className="w-8 h-8" />
            <span>سبد خرید</span>
          </Link>
        </div>
        <div>
          <Link
            href="/login"
            className="flex flex-col gap-2 items-center justify-center"
          >
            <Icon icon="solar:user-bold-duotone" className="w-8 h-8" />
            <span className=""> پروفایل</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
