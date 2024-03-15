"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Register() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center rtl">
      <div className="w-full flex justify-center items-center h-full">
        <div className="rounded-[35px] max-w-[420px] max-h-[620px] w-full h-full p-5 border-2 border-[#ffffff4a] flex flex-col justify-between items-center bg-[#70737b1c] ">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex justify-between items-center w-full px-2">
              <Link href="/" className="flex items-center gap-2 text-white">
                <Icon
                  icon="solar:square-alt-arrow-right-bold-duotone"
                  className="w-5 h-5"
                />
                بازگشت به خانه
              </Link>
              <h1 className="text-[#D1BBFF] text-3xl ">
                <Link href="/">We Gamers</Link>
              </h1>
            </div>
            <span className="border-b-2 border-[#888C8C] w-full"></span>

            <h4 className="text-white text-xl font-[montserrat] font-bold">
              عضویت در سایت
            </h4>
            <p className="text-base text-[#a7a5aabb] flex flex-col items-center">
              <span>
                برای ایجاد حساب کاربری، ایمیل و رمز عبور خود را وارد کنید
              </span>

              <span>یا با حساب کاربری گوگل خود وارد شوید</span>
            </p>
          </div>
          <button className="bg-[#ffffff] border-b-4 border-[#cac9ce] w-full py-4 flex justify-center items-center rounded-2xl text-base font-bold text-[#2a2d31] gap-2">
            <Icon icon="devicon:google" className="w-6 h-6" />
            <span>عضویت با حساب گوگل</span>
          </button>
          <form action="" className="flex flex-col gap-6 w-full font-[yekan]">
            <input
              type="text"
              placeholder="ایمیل خود را وارد کنید"
              className="bg-[#70737b47] border-b-4 border-[#10101147] focus:border-[#6C43E2] w-full focus:outline-none p-4 flex justify-center items-center rounded-2xl text-white"
            />
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="یک رمز عبور قوی انتخاب کنید"
                className="bg-[#70737b47] border-b-4 border-[#10101147] focus:border-[#6C43E2] w-full focus:outline-none p-4 flex justify-center items-center rounded-2xl text-white"
              />
            </div>
            <div className="flex flex-col justify-between gap-3">
              <button className="bg-[#8762D8] border-b-4 border-[#6C43E2] w-full py-4 flex justify-center items-center rounded-2xl text-white gap-2">
                <Icon icon="solar:user-bold-duotone" className="w-6 h-6" />
                <span>عضویت در سایت</span>
              </button>
              <Link
                href="/login"
                className="bg-[#70737b47] border-b-4 border-[#10101147] w-full py-4 px-2 flex justify-center items-center rounded-2xl text-white gap-2"
              >
                <Icon icon="solar:user-plus-bold-duotone" className="w-6 h-6" />
                <span>ورود به حساب کاربری</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
