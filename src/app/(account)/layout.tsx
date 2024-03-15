import React, { PropsWithChildren } from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Providers } from "../providers";

const getUser = async () => {
  const user = cookies().get("user");
  return user ? JSON.parse(user.value) : null;
};

export default async function AccountLayout({ children }: PropsWithChildren) {
  const user = await getUser();

  if (!user) redirect("/");

  // console.log(user)

  return (
    
    <html lang="en" className="dark">
      <body className="dark:bg-[#12141C] overflow-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
