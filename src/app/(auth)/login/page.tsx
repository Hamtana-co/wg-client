"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Login() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center h-full">
        <div className="rounded-[35px] max-w-[420px] max-h-[620px] w-full h-full p-5 border-2 border-[#ffffff4a] flex flex-col justify-between items-center gap-5 rtl bg-[#70737b1c] ">
          <h1 className="text-[#D1BBFF] text-3xl ">
            <Link href="/">We Gamers</Link>
          </h1>
          <p className="text-white text-xl">ورود به سایت</p>
          <button className="bg-[#ffffff] border-b-4 border-[#cac9ce] w-full py-4 flex justify-center items-center rounded-2xl text-base font-bold text-[#2a2d31] gap-2">
            <Icon icon="devicon:google" className="w-6 h-6" />
            <span>ورود با حساب گوگل</span>
          </button>
          <span className="border-b-2 border-[#888C8C] w-full"></span>
          <form action="" className="flex flex-col gap-6 w-full">
            <input
              type="text"
              placeholder="ایمیل یا نام کاربری خود را وارد کنید"
              className="bg-[#70737b47] border-b-4 border-[#10101147] focus:border-[#6C43E2] w-full focus:outline-none p-4 flex justify-center items-center rounded-2xl text-white"
            />
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="رمز عبور خود را وارد کنید"
                className="bg-[#70737b47] border-b-4 border-[#10101147] focus:border-[#6C43E2] w-full focus:outline-none p-4 flex justify-center items-center rounded-2xl text-white"
              />
              <span className="flex px-2 gap-1">
                <span className="text-xs text-[#86868a]">
                  رمز عبور خود را فراموش کرده اید ؟
                </span>
                <span className="text-xs text-[#86868a] de">
                  بازیابی رمز عبور
                </span>
              </span>
            </div>
            <div className="flex flex-col justify-between gap-3">
              <button className="bg-[#8762D8] border-b-4 border-[#6C43E2] w-full py-4 flex justify-center items-center rounded-2xl text-white gap-2">
                <Icon icon="solar:user-bold-duotone" className="w-6 h-6" />
                <span>ورود به حساب</span>
              </button>
              <Link
                href="/register"
                className="bg-[#70737b47] border-b-4 border-[#10101147] w-full py-4 px-2 flex justify-center items-center rounded-2xl text-white gap-2"
              >
                <Icon icon="solar:user-plus-bold-duotone" className="w-6 h-6" />
                <span>عضویت در سایت</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
