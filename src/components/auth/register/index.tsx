"use client";

import { Icon } from "@iconify/react";
import { AxiosError } from "axios";
import Link from "next/link";
import { FormEvent, useCallback, useState } from "react";
import { POST_REGISTER } from "./apis";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>();

  const registerMutation = useMutation({
    mutationKey: ["POST_REGISTER"],
    mutationFn: POST_REGISTER,
    onSuccess: ({ data }) => {
      router.replace("/");
    },
    onError: ({ response }: AxiosError) => {
      let message = "Server Error";
      if (response?.status === 401) message = "Invalid ss";
      setError(message);
    },
  });

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = new FormData(e.currentTarget);
      registerMutation.mutate(data);
    },
    [registerMutation]
  );

  return (
    <main className="flex flex-col justify-center items-center rtl">
      <div className="w-full flex flex-col-reverse justify-start items-center gap-4 px-4 lg:gap-12 lg:px-24">
        <div className="rounded-[35px] min-w-[350px] max-w-[420px] w-full p-5 border-2 border-[#ffffff4a] flex flex-col justify-start items-center bg-[#70737b1c] ">
          <h4 className="text-white text-xl font-[peyda] font-bold pb-12 pt-9">
            عضویت در سایت
          </h4>
          {/* <span>یا با حساب کاربری گوگل خود وارد شوید</span> */}

          {/* <button className="bg-[#ffffff] border-b-4 border-[#cac9ce] w-full py-4 flex justify-center items-center rounded-2xl text-base font-bold text-[#2a2d31] gap-2">
            <Icon icon="devicon:google" className="w-6 h-6" />
            <span>عضویت با حساب گوگل</span>
          </button> */}
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-6 w-full font-[peyda]"
          >
            <input
              name="email"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="bg-[#70737b47] border-b-4 border-[#10101147] focus:border-[#6C43E2] w-full focus:outline-none p-4 flex justify-center items-center rounded-2xl text-white"
            />
            <div className="flex flex-col gap-2">
              <input
                name="password"
                type="password"
                placeholder="یک رمز عبور قوی انتخاب کنید"
                className="bg-[#70737b47] border-b-4 border-[#10101147] focus:border-[#6C43E2] w-full focus:outline-none p-4 flex justify-center items-center rounded-2xl text-white"
              />
            </div>
            <div className="flex flex-col justify-between gap-3">
              <Button
                type="submit"
                isLoading={registerMutation.isPending}
                className="bg-[#8762D8] border-b-4 border-[#6C43E2] w-full py-7 flex justify-center items-center rounded-2xl text-white gap-2"
              >
                <Icon icon="solar:user-bold-duotone" className="w-6 h-6" />
                <span>عضویت در سایت</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
