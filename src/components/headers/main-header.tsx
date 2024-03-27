"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import MiniAccount from "../mini-account";

export default function MainHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categoryHover, setcategoryHover] = useState(0);

  return (
    <div>
      <header className="hidden lg:flex w-full fixed top-0 left-0 px-24 rtl bg-[#32303665] backdrop-blur-md z-30">
        <div className="flex flex-col border-b-2 border-[#888C8C] w-full py-3">
          <div className="flex justify-between items-center w-full px-2">
            <div className="flex items-center gap-5">
              <h1 className="text-[#D1BBFF] text-3xl">
                <Link href="/">We Gamers</Link>
              </h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="به دنبال چه چیزی میگردید؟"
                  className="bg-[#70737b47] border-b-4 border-[#10101147] focus:border-[#6C43E2] w-96 focus:outline-none py-3 px-4 flex justify-center items-center rounded-2xl text-white"
                />
                <button className="absolute top-[6px] left-2 text-white flex justify-center items-center p-1 z-10">
                  <Icon
                    icon="solar:rounded-magnifer-bold-duotone"
                    className="w-7 h-7"
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 font-[peyda]">
              {/* <Link
                href=""
                className="relative bg-[#70737b47] border-b-4 border-[#10101147] py-[10px] px-[13px] flex justify-center items-center rounded-2xl text-white"
              >
                <Icon icon="solar:bell-bold" className="w-7 h-7" />
                <span className="absolute -top-1 -right-1 bg-[#544B6C] w-5 h-5 text-sm text-[#A784F2] flex justify-center items-center rounded-full ">
                  5
                </span>
              </Link> */}
              {/* <MiniCart /> */}
              <MiniAccount />
            </div>
          </div>
          <div className="flex items-center pt-3 px-2 gap-5 font-[peyda] font-semibold text-sm">
            {/* <div className="flex flex-col relative">
              <Link
                href=""
                onMouseEnter={() => setcategoryHover(1)}
                className="flex justify-center items-center rounded-2xl text-white hover:text-[#D1BBFF] gap-3 pl-4"
              >
                <Icon
                  icon="solar:hamburger-menu-line-duotone"
                  className="w-7 h-7"
                />
                <span>دسته بندی ها</span>
              </Link>
              <div
                onMouseLeave={() => setcategoryHover(0)}
                className={
                  categoryHover == 0
                    ? " absolute z-10 top-12 hidden right-0 left-0  justify-around items-center p-2 text-indigo-600  bg-zinc-100  rounded-br-md rounded-bl-md transition-all duration-500 "
                    : " absolute z-20 top-12 right-0 left-0 flex justify-around items-center p-2 text-indigo-600  bg-zinc-100  rounded-br-md rounded-bl-md transition-all duration-500 "
                }
              >
                <h1>sdsd</h1>
              </div>
            </div> */}
            <Link
              href="/"
              className=" flex justify-center items-center rounded-2xl text-[#D1BBFF] hover:text-[#D1BBFF] gap-2"
            >
              <Icon
                icon="solar:home-smile-angle-bold-duotone"
                className="w-6 h-6"
              />
              صفحه اصلی
            </Link>
            <Link
              href="/team"
              className=" flex justify-center items-center rounded-2xl text-[#888C8C] hover:text-[#D1BBFF] gap-2"
            >
              <Icon icon="solar:bookmark-bold-duotone" className="w-6 h-6" />
              تیم ها
            </Link>
            <Link
              href="/blog"
              className=" flex justify-center items-center rounded-2xl text-[#888C8C] hover:text-[#D1BBFF] gap-2"
            >
              <Icon icon="solar:bookmark-bold-duotone" className="w-6 h-6" />
              شبکه اجتماعی
            </Link>
            {/* <Link
              href="/shop"
              className=" flex justify-center items-center rounded-2xl text-[#888C8C] hover:text-[#D1BBFF] gap-2"
            >
              <Icon icon="solar:shop-bold-duotone" className="w-6 h-6" />
              فروشگاه
            </Link>
            */}
            <Link
              href="/tournament"
              className=" flex justify-center items-center rounded-2xl text-[#888C8C] hover:text-[#D1BBFF] gap-2"
            >
              <Icon icon="solar:cup-bold-duotone" className="w-6 h-6" />
              تورنومنت
            </Link>
            <Link
              href="/blog"
              className=" flex justify-center items-center rounded-2xl text-[#888C8C] hover:text-[#D1BBFF] gap-2"
            >
              <Icon icon="solar:bookmark-bold-duotone" className="w-6 h-6" />
              وبلاگ
            </Link>
            <Link
              href="/contact-us"
              className=" flex justify-center items-center rounded-2xl text-[#888C8C] hover:text-[#D1BBFF] gap-2"
            >
              <Icon
                icon="solar:phone-calling-bold-duotone"
                className="w-6 h-6"
              />
              تماس با ما
            </Link>
            <Link
              href="/about-us"
              className=" flex justify-center items-center rounded-2xl text-[#b5bbbb] hover:text-[#D1BBFF] gap-2"
            >
              <Icon icon="solar:info-square-bold-duotone" className="w-6 h-6" />
              درباره ما
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
