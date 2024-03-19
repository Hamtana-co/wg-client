import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function MiniCart() {
  const [cardHover, setCardHover] = useState(0);

  return (
    <>
      <Link
        href="/cart"
        onMouseEnter={() => setCardHover(1)}
        className="relative bg-[#70737b47]  border-b-4 border-[#10101147] py-[10px] px-4 flex justify-center items-center rounded-2xl text-white gap-2"
      >
        سبد خرید
        <Icon icon="solar:cart-large-2-bold-duotone" className="w-7 h-7" />
        {/* <span className="absolute -top-1 -right-1 bg-[#544B6C] w-5 h-5 text-sm text-[#A784F2] flex justify-center items-center rounded-full ">
                  5
                </span> */}
        <div
          onMouseLeave={() => setCardHover(0)}
          className={
            cardHover == 1
              ? "absolute top-[54px] left-0 min-w-80 w-fit min-h-52 h-fit z-50 bg-[#20222b] rounded-3xl p-8 flex flex-col"
              : "hidden"
          }
        >
          <h1>سبد خرید شما خالی است</h1>
        </div>
        <div className="absolute top-0 w-96 bg-white"></div>
      </Link>
    </>
  );
}
