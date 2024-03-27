import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCookies } from "react-cookie";
import { userService } from "../service";
import axios from "axios";

import { Skeleton } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function AccountSidebar() {
  const router = useRouter();
  const logoutMutation = useMutation({
    mutationKey: ["LOGOUT"],
    mutationFn: () => axios.post("/api/logout"),
    onSuccess: () => router.push("/"),
  });

  const [cookies] = useCookies(["user"]);
  const userQuery = useQuery({
    queryKey: ["GET_USER"],
    queryFn: () =>
      userService.get(
        cookies.user.id,
        "relations[wallet]=true&relations[profile]=true"
      ),
  });

  return (
    <aside className="hidden lg:block w-full rounded-3xl min-w-64 px-4  max-w-fit h-full bg-[#70737b1c] border-2 border-[#ffffff4a]">
      <div className="flex flex-col relative my-8 gap-5 pb-5 border-b-2">
        <div className="absolute  -top-[68px] flex justify-center items-center w-full">
          <Image
            className="rounded-full w-20 h-20"
            src={userQuery.data?.data.profile?.full_path || `/getfile.png`}
            width={65}
            height={65}
            alt="test"
          />
        </div>
        <div className="mt-10">
          <span className="flex items-center gap-2">
            <span>سلام ،</span>
            {userQuery.isLoading ? (
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            ) : (
              <span>{userQuery.data?.data.username}</span>
            )}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span>کیف پول :</span>
          <span className="flex items-center gap-1">
            <span>{userQuery.data?.data.wallet?.balance}</span>
            <span>تومان</span>
          </span>
        </div>
      </div>
      <ul className="flex flex-col items-start gap-5 text-[#888C8C] hover:cursor-pointer  ">
        <li className="">
          <Link
            href="/account"
            className="flex gap-2 items-center text-[#D1BBFF] hover:text-[#D1BBFF]"
          >
            <Icon icon="solar:widget-4-bold-duotone" className="w-8 h-8" />
            داشبورد
          </Link>
        </li>
        <li className="">
          <Link
            href="/account/profile"
            className="flex gap-2 items-center hover:text-[#D1BBFF]"
          >
            <Icon icon="solar:user-id-bold-duotone" className="w-8 h-8" />
            پروفایل
          </Link>
        </li>
        <li className="flex gap-2 items-center hover:text-[#D1BBFF]">
          <Link
            href="/account/info"
            className="flex gap-2 items-center hover:text-[#D1BBFF]"
          >
            <Icon icon="solar:shield-user-bold-duotone" className="w-8 h-8" />
            اطلاعات حساب کاربری
          </Link>
        </li>
        <li>
          <button
            className="flex gap-2 items-center hover:text-[#D1BBFF]"
            onClick={() => logoutMutation.mutate()}
          >
            <Icon icon="solar:login-3-bold-duotone" className="w-8 h-8" />
            خروج
          </button>
        </li>
      </ul>
    </aside>
  );
}
