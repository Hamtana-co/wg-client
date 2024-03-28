"use client";

import { Icon } from "@iconify/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FormEvent, useCallback, useState } from "react";
import { POST_LOGIN } from "./apis";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>();

  const loginMutation = useMutation({
    mutationKey: ["POST_LOGIN"],
    mutationFn: POST_LOGIN,
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
      loginMutation.mutate(data);
    },
    [loginMutation]
  );

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="flex flex-col justify-center items-center rtl">
      <div className="w-full flex flex-col-reverse justify-start items-center gap-4 px-4 lg:gap-12 lg:px-24">
        <div className="rounded-[35px] min-w-[350px] max-w-[420px]  w-full  p-5 border-2 border-[#ffffff4a] flex flex-col justify-start items-center gap-5  bg-[#70737b1c] ">
          <h4 className="text-white font-[peyda] font-bold text-xl py-9">
            ورود به حساب کاربری
          </h4>
          {/* <button className="bg-[#ffffff] font-[yekan] border-b-4 border-[#cac9ce] w-full py-4 flex justify-center items-center rounded-2xl text-base font-bold text-[#2a2d31] gap-2">
            <Icon icon="devicon:google" className="w-6 h-6" />
            <span>ورود با حساب گوگل</span>
          </button> */}

          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-6 w-full font-[peyda]"
          >
            <input
              name="email"
              type="email"
              placeholder="ایمیل یا نام کاربری خود را وارد کنید"
              className="bg-[#70737b47] border-b-4 border-[#10101147] focus:border-[#6C43E2] w-full focus:outline-none p-4 flex justify-center items-center rounded-2xl text-white"
            />
            <div className="flex flex-col gap-2">
              <input
                name="password"
                type="password"
                placeholder="رمز عبور خود را وارد کنید"
                className="bg-[#70737b47] border-b-4  border-[#10101147] focus:border-[#6C43E2] w-full focus:outline-none p-4 flex justify-center items-center rounded-2xl text-white"
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
              <Button
                type="submit"
                isLoading={loginMutation.isPending}
                className="bg-[#8762D8] border-b-4 border-[#6C43E2] w-full py-7 flex justify-center items-center rounded-2xl text-white gap-2"
              >
                <Icon icon="solar:user-bold-duotone" className="w-6 h-6" />
                <span>ورود به حساب</span>
              </Button>
            </div>
          </form>
        </div>
        {/* <div className="w-fit h-fit max-h-[620px] px-2 flex justify-center items-center relative">
          <Image
            className="w-full max-h-[620px] object-cover rounded-[35px]  "
            src="/login-banner.jpeg"
            width={1200}
            height={100}
            alt="test"
          />
          <div className="absolute top-0 left-0  w-full h-full backdrop-blur-[2px] bg-[#dbdcdf2f] rounded-[35px] border-2 border-[#ffffff4a]"></div>
        </div> */}
      </div>
    </main>
  );
}
