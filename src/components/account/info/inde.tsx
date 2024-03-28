"use client";

import { Icon } from "@iconify/react";
import { Button, Chip, Input } from "@nextui-org/react";
import { userService } from "../service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { EMAIL_SEND_CODE, EMAIL_VERIFY } from "./api";

interface IInput {
  first_name: string;
  last_name: string;
  level_one_verified: boolean;
}

export default function AccountInfo() {
  const form = useForm<IInput>();
  const queryClient = useQueryClient();

  const [cookies] = useCookies(["user"]);
  const userQuery = useQuery({
    queryKey: ["GET_USER_INFO"],
    queryFn: () => userService.get(cookies.user.id),
  });

  const userMutation = useMutation({
    mutationKey: ["PATCH_USER", cookies.user.id],
    mutationFn: (body: any) => userService.patch(cookies.user.id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_USER_INFO"] });
    },
  });

  const onSubmit = useCallback(
    (data: IInput) =>
      userMutation.mutate({
        ...data,
        level_one_verified: true,
      }),
    [userMutation]
  );

  // Verify Email
  const [error, setError] = useState<string | undefined>();
  const [emailVerify, setEmailVerify] = useState<boolean>(false);
  const [emailVerifed, setEmailVerifed] = useState<boolean>(false);

  useEffect(() => {
    const userEmailVerifed = userQuery.data?.data.email_verified;
    if (userEmailVerifed == true) setEmailVerifed(true);
  }, [userQuery]);

  const sendCodeMutation = useMutation({
    mutationKey: ["EMAIL_SEND_CODE"],
    mutationFn: EMAIL_SEND_CODE,
    onSuccess: ({ data }) => {
      setEmailVerify(true);
    },
    onError: ({ response }: AxiosError) => {
      let message = "Server Error";
      if (response?.status === 401) message = "Invalid Credentials";
      setError(message);
    },
  });

  const onSubmitEmail = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = new FormData(e.currentTarget);
      sendCodeMutation.mutate(data);
    },
    [sendCodeMutation]
  );

  // Code Verify

  const verifyMutation = useMutation({
    mutationKey: ["EMAIL_VERIFY"],
    mutationFn: EMAIL_VERIFY,
    onSuccess: ({ data }) => {
      setEmailVerifed(true);
    },
    onError: ({ response }: AxiosError) => {
      let message = "Server Error";
      if (response?.status === 401) message = "Invalid Credentials";
      setError(message);
    },
  });

  const onSubmitVerify = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = new FormData(e.currentTarget);
      verifyMutation.mutate(data);
    },
    [verifyMutation]
  );

  return (
    <div className="flex justify-center w-full flex-col gap-8">
      <section className="flex justify-start w-full">
        <h1 className="flex gap-2 items-center text-lg text-[#aea4e4]">
          <Icon icon="solar:shield-user-bold-duotone" className="w-12 h-12" />
          اطلاعات حساب کاربری
        </h1>
      </section>
      <section className="flex w-full">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="px-2 lg:px-5 w-full flex flex-col gap-2 lg:gap-8"
        >
          {/* <Chip variant="flat" color="warning" className="w-full">
            لطفا در پر کردن اطلاعات زیر دقت فرمایید ! زیرا دیگر قابل ویرایش
            نیستند در صورتی که اشتباهی رخ داد تیکت ارسال کنید
          </Chip> */}

          {userQuery.data?.data.level_one_verified == true ? (
            <div className="flex flex-col items-center gap-2 lg:gap-8">
              <Input
                label="نام"
                className="lg:max-w-[600px]"
                size="lg"
                value={userQuery.data?.data.first_name}
                variant="bordered"
              />
              <Input
                label="نام خانوادگی"
                size="lg"
                value={userQuery.data?.data.last_name}
                className="lg:max-w-[600px]"
                variant="bordered"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 lg:gap-8">
              <Input
                label="نام"
                className="lg:max-w-[600px]"
                size="lg"
                variant="bordered"
                {...form.register("first_name")}
                isRequired
                isInvalid={!!form.formState.errors.first_name?.message}
                errorMessage={form.formState.errors.first_name?.message}
              />
              <Input
                label="نام خانوادگی"
                size="lg"
                className="lg:max-w-[600px]"
                variant="bordered"
                {...form.register("last_name")}
                isRequired
                isInvalid={!!form.formState.errors.last_name?.message}
                errorMessage={form.formState.errors.last_name?.message}
              />
            </div>
          )}

          <Button
            type="submit"
            isLoading={userMutation.isPending}
            size="lg"
            color="warning"
          >
            ثبت دائمی اطلاعات
          </Button>
        </form>
        {emailVerify == false ? (
          <form onSubmit={onSubmitEmail} className="w-full flex flex-col gap-8">
            {error && (
              <p className="my-2 py-3 px-2 rounded-medium text-center text-danger-500 bg-danger-50">
                {error}
              </p>
            )}
            <div className="flex flex-col items-center gap-8">
              <Input
                label="ایمیل"
                name="email"
                value={userQuery.data?.data.email}
                defaultValue={userQuery.data?.data.email}
                classNames={{
                  input: "ltr",
                }}
                size="lg"
                variant="bordered"
              />
            </div>
            {emailVerifed == false ? (
              <div>
                <Button
                  isLoading={sendCodeMutation.isPending}
                  type="submit"
                  className="w-full"
                  size="lg"
                >
                  ارسال کد تایید ایمیل
                </Button>
              </div>
            ) : (
              <></>
            )}
          </form>
        ) : (
          <form
            onSubmit={onSubmitVerify}
            className="w-full flex flex-col gap-8"
          >
            {error && (
              <p className="my-2 py-3 px-2 rounded-medium text-center text-danger-500 bg-danger-50">
                {error}
              </p>
            )}
            <div className="flex flex-col items-center gap-8">
              <Input
                label="ایمیل"
                value={userQuery.data?.data.email}
                defaultValue={userQuery.data?.data.email}
                name="email"
                classNames={{
                  input: "ltr",
                }}
                size="lg"
                variant="bordered"
              />

              <Input
                label="کد تایید"
                name="code"
                classNames={{
                  input: "ltr",
                }}
                size="lg"
                variant="bordered"
              />
            </div>

            <div>
              <Button
                isLoading={verifyMutation.isPending}
                type="submit"
                className="w-full"
                size="lg"
              >
                تایید ایمیل
              </Button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
