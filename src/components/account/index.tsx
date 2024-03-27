"use client";

import React, { useEffect, useState } from "react";
import AccountInfo from "./info/inde";
import AccountProfile from "./profile";
import AccountSidebar from "./sidebar";

export default function AccountMain(item: any) {
  const [details, setDetails] = useState(<AccountInfo />);

  useEffect(() => {
    if (item.item.slug[0] == "info") {
      setDetails(<AccountInfo />);
    } else if (item.item.slug[0] == "profile") {
      setDetails(<AccountProfile />);
    } else if (item.item.slug[0] == "") {
      <AccountProfile />;
    }
  }, [item.item.slug[0]]);

  return (
    <main className="max-h-full h-screen py-24 lg:pt-36 flex flex-col gap-3 lg:container mx-auto lg:w-full">
      <div className="flex lg:gap-12 lg:w-full h-full justify-center px-5 py-12 rtl">
        <div className="flex flex-col gap-5">
          <AccountSidebar />
        </div>
        <section className="container mx-auto w-full lg:w-full bg-[#70737b1c] rounded-3xl p-2 lg:p-8">
          {details}
        </section>
      </div>
    </main>
  );
}
