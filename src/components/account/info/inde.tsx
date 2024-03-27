"use client";

import { Icon } from "@iconify/react";
import { Button, Chip, Input } from "@nextui-org/react";
import { userService } from "../service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface IInput {
  first_name: string;
  last_name: string;
  email: string;
  level_one_verified: boolean;
}

export default function AccountInfo() {
  const form = useForm<IInput>();
  const queryClient = useQueryClient();

  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();

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

  console.log(userQuery);
  return (
    <div className="flex justify-center w-full flex-col gap-8">
      <section className="flex justify-start w-full">
        <h1 className="flex gap-2 items-center text-lg text-[#aea4e4]">
          <Icon icon="solar:shield-user-bold-duotone" className="w-12 h-12" />
          اطلاعات حساب کاربری
        </h1>
      </section>
      <section className="flex w-full justify-start">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="px-2 lg:px-5 w-full flex flex-col gap-2 lg:gap-8"
        >
          {/* <Chip variant="flat" color="warning" className="w-full">
            لطفا در پر کردن اطلاعات زیر دقت فرمایید ! زیرا دیگر قابل ویرایش
            نیستند در صورتی که اشتباهی رخ داد تیکت ارسال کنید
          </Chip> */}

          {userQuery.data?.data.level_one_verified == true ? (
            <div className="flex lg:flex-row flex-col items-center gap-2 lg:gap-8">
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
            <div className="flex lg:flex-row flex-col items-center gap-2 lg:gap-8">
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
          <div className="flex lg:flex-row flex-col items-center gap-8">
            <Input
              className="max-w-[400px]"
              label="ایمیل"
              disabled
              classNames={{
                input: "ltr",
              }}
              value={userQuery.data?.data.email}
              size="lg"
              variant="bordered"
              defaultValue={userQuery.data?.data.email}
              {...form.register("email")}
              isInvalid={!!form.formState.errors.first_name?.message}
              errorMessage={form.formState.errors.first_name?.message}
            />
            <div></div>
          </div>

          <Button
            type="submit"
            isLoading={userMutation.isPending}
            size="lg"
            color="warning"
          >
            ثبت دائمی اطلاعات
          </Button>
        </form>
      </section>
    </div>
  );
}
