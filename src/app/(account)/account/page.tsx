"use client";

import MainHeader from "@/components/base/headers/main-header";
import { Button, Skeleton } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { userService } from "./service";
import { useCookies } from "react-cookie";
import { Metadata } from "next";

export default function Account() {
  const [cookies] = useCookies(["user"]);

  const genreQuery = useQuery({
    queryKey: ["GET_USER"],
    queryFn: () => userService.get(cookies.user.id),
  });

  const router = useRouter();
  const logoutMutation = useMutation({
    mutationKey: ["LOGOUT"],
    mutationFn: () => axios.post("/api/logout"),
    onSuccess: () => router.push("/"),
  });

  return (
    <>
      <MainHeader />
      <main className="max-h-full h-screen pt-36 flex flex-col gap-3 container mx-auto w-full">
        <div className="flex gap-12 w-full h-full justify-center py-12 rtl">
          <div className="flex flex-col gap-5">
            <aside className="w-full rounded-3xl min-w-64 px-4   max-w-fit h-full bg-[#70737b1c] border-2 border-[#ffffff4a]">
              <div className="flex flex-col relative my-8 gap-5 pb-5 border-b-2">
                <div className="absolute  -top-[68px] flex justify-center items-center w-full">
                  <Image
                    className="rounded-full w-20 h-20"
                    src="/getfile.png"
                    width={65}
                    height={65}
                    alt="test"
                  />
                </div>
                <div className="mt-10">
                  <span className="flex items-center gap-2">
                    <span>سلام ،</span>
                    {genreQuery.isLoading ? (
                      <Skeleton className="h-3 w-3/5 rounded-lg" />
                    ) : (
                      <span>{genreQuery.data?.data.username}</span>
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span>کیف پول :</span>
                  <span className="flex">
                    <span>2000</span>
                    <span>تومان</span>
                  </span>
                </div>
              </div>
              <ul className="flex flex-col items-start gap-5 text-[#888C8C] hover:cursor-pointer  ">
                <li className="flex gap-2 items-center text-[#D1BBFF] hover:text-[#D1BBFF]">
                  <Icon
                    icon="solar:widget-4-bold-duotone"
                    className="w-8 h-8"
                  />
                  داشبورد
                </li>
                <li className="flex gap-2 items-center hover:text-[#D1BBFF]">
                  <Icon icon="solar:user-id-bold-duotone" className="w-8 h-8" />
                  پروفایل
                </li>
                <li className="flex gap-2 items-center hover:text-[#D1BBFF]">
                  <Icon
                    icon="solar:shield-user-bold-duotone"
                    className="w-8 h-8"
                  />
                  اطلاعات حساب کاربری
                </li>
                <li>
                  <button
                    className="flex gap-2 items-center hover:text-[#D1BBFF]"
                    onClick={() => logoutMutation.mutate()}
                  >
                    <Icon
                      icon="solar:login-3-bold-duotone"
                      className="w-8 h-8"
                    />
                    خروج
                  </button>
                </li>
              </ul>
            </aside>
          </div>
          <section className="w-full h-full bg-[#70737b1c] rounded-3xl p-8">
            <h1>sdsd</h1>
          </section>
        </div>
      </main>
    </>
  );
}
