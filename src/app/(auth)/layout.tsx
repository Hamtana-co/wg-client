import React, { PropsWithChildren } from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Providers } from "../providers";

const getUser = async () => {
  const user = cookies().get("user");
  return user ? JSON.parse(user.value) : null;
};

export default async function AuthLayout({ children }: PropsWithChildren) {
  const user = await getUser();

  if (user) redirect("/");

  return (
    <html lang="en" className="dark">
      <body className="dark:bg-[#12141C] overflow-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
