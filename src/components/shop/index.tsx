"use client";

import ShopFilter from "./filter";
import ShopProductCard from "./product-card";

export default function ShopPage() {
  return (
    <>
      <div className="py-24 rtl w-full pt-32 px-36 flex flex-col">
        <div className="flex justify-start items-start gap-5">
          <div className="flex justify-start items-start gap-2 py-5 px-12 font-[yekan]">
            <span>ما گیمرها</span>
            <span>/</span>
            <span>فروشگاه</span>
          </div>
        </div>

        <div className="flex justify-between gap-5 px-10">
          <section className="">
            <ShopFilter />
          </section>
          <section className="grid grid-cols-4 gap-4">
            <ShopProductCard />
            <ShopProductCard />
            <ShopProductCard />
            <ShopProductCard />
            <ShopProductCard />
            <ShopProductCard />
          </section>
        </div>
      </div>
    </>
  );
}
