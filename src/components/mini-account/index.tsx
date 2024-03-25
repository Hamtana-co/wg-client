"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { CookiesProvider, useCookies } from "react-cookie";

export default function MiniAccount() {
  const [cookies] = useCookies(["user"]);
  const [accountHover, setAccountHover] = useState(0);

  return (
    <>
      <CookiesProvider>
        {cookies.user ? (
          <Link
            href="/account"
            onMouseEnter={() => setAccountHover(1)}
            className="bg-[#8762D8] border-b-4 border-[#6C43E2] min-h-10 py-[10px] px-4 flex justify-center items-center rounded-2xl text-white gap-2 relative"
          >
            <span>حساب کاربری</span>
            <Image
              className="w-7 h-7 rounded-full"
              src="/getfile.png"
              width={100}
              height={100}
              alt="test"
            />
            <div
              onMouseLeave={() => setAccountHover(0)}
              className={
                accountHover == 1
                  ? "absolute top-[55px] left-0 min-w-56 w-fit p-5 h-fit z-50 bg-[#2c2b30] rounded-3xl flex flex-col"
                  : "hidden"
              }
            >
              <ul className="flex flex-col items-start gap-5 text-sm font-[peyda]">
                <li className="flex items-center gap-1 border-b-2 pb-3 w-full">
                  <Icon icon="solar:user-bold-duotone" className="w-6 h-6" />
                  <span>{cookies.user.username}</span>
                  خوش آمدید !
                </li>
                <li className="w-full">
                  <button className="flex items-center gap-2 w-full">
                    <Icon
                      icon="solar:wallet-money-bold-duotone"
                      className="w-6 h-6"
                    />

                    <span className="flex justify-between w-full items-center">
                      <span> کیف پول</span>
                      <span className="flex items-center gap-1">
                        <span>5000</span>
                        <span>تومان</span>
                      </span>
                    </span>
                  </button>
                </li>
                {/* <li>
                  <button className="flex items-center gap-2 ">
                    <Icon
                      icon="solar:cart-3-bold-duotone"
                      className="w-6 h-6"
                    />
                    سفارش ها
                  </button>
                </li> */}
                <li className="w-full">
                  <button className="flex items-center gap-2 w-full">
                    <span className="flex w-full justify-between">
                      <span className="flex items-center gap-2">
                        <Icon
                          icon="solar:bell-bold-duotone"
                          className="w-6 h-6"
                        />
                        پیام ها
                      </span>
                      <span className="flex items-center gap-2">
                        <span>2</span>
                        <span>پیام جدید</span>
                      </span>
                    </span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center gap-2 ">
                    <Icon
                      icon="solar:login-3-bold-duotone"
                      className="w-6 h-6"
                    />
                    خروج از حساب کاربری
                  </button>
                </li>
              </ul>
            </div>
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="bg-[#70737b47] border-b-4 border-[#10101147] min-h-10 py-[10px] px-4 flex justify-center items-center rounded-2xl text-white gap-2"
            >
              <span>ورود</span>
              <Icon icon="solar:user-bold-duotone" className="w-7 h-7" />
            </Link>
            <Link
              href="/register"
              className="bg-[#8762D8] border-b-4 border-[#6C43E2] min-h-10 py-[10px] px-4 flex justify-center items-center rounded-2xl text-white gap-2"
            >
              <span>ثبت نام</span>
              <Icon icon="solar:user-plus-bold-duotone" className="w-7 h-7" />
            </Link>
          </div>
        )}
      </CookiesProvider>
    </>
  );
}
