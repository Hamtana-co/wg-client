"use client";

import AccountSidebar from "@/components/account/sidebar";

export default function Account() {
  return (
    <div className="">
      <main className="max-h-full h-screen pt-36 flex flex-col gap-3 container mx-auto w-full">
        <div className="flex gap-12 w-full h-full justify-center py-12 rtl">
          <div className="flex flex-col gap-5">
            <AccountSidebar />
          </div>
          <section className="w-full h-full bg-[#70737b1c] rounded-3xl p-8">
            <div>حساب</div>
          </section>
        </div>
      </main>
    </div>
  );
}
