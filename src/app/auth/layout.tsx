import React, { PropsWithChildren } from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Providers } from "../providers";
import MainHeader from "@/components/headers/main-header";
import MobileHeader from "@/components/headers/mobile-header";
import MobileNavigation from "@/components/mobile-navigation";

const getUser = async () => {
  const user = cookies().get("user");
  return user ? JSON.parse(user.value) : null;
};

const LoginLayout = async ({ children }: PropsWithChildren) => {
  const user = await getUser();

  if (user) redirect("/");

  return (
    <html lang="fa-IR" dir="rtl" className="dark">
      <body className="w-screen dark:bg-[#151517] bg-[#f1f1f1] min-h-screen">
        <main className="">
          <Providers>
            <MainHeader />
            <MobileHeader />
            <div>{children}</div>
            <MobileNavigation />
          </Providers>
        </main>
      </body>
    </html>
  );
};

export default LoginLayout;
