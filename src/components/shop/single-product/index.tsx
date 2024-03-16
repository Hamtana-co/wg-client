"use client";
import MainHeader from "@/components/base/headers/main-header";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SingleProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState(1);
  return (
    <>
      <MainHeader />
      <div className="container w-full mx-auto rtl pt-32">
        <div className="flex justify-start items-start gap-5">
          <div className="flex justify-start items-start gap-2 py-5 px-12 font-[yekan]">
            <span>ما گیمرها</span>
            <span>/</span>
            <span>فروشگاه</span>
          </div>
        </div>
        <div className="flex justify-between items-start w-full gap-8">
          <div className="w-full bg-[#70737b47] p-8 rounded-3xl">
            <div className="flex justify-start items-start w-full gap-5">
              <div className="flex flex-col max-w-[400px]">{/* swiper */}</div>
              <div className="flex flex-col gap-8">
                <h1 className="font-[montserrat] text-xl">بتل پس فورتنایت</h1>
                <div>
                  <ul className="">
                    <li className="flex items-center">
                      <span>منطقه فعال سازی :</span>
                      <span> همه کشور ها</span>
                    </li>
                    <li className="flex items-center">
                      <span>منطقه فعال سازی :</span>
                      <span> همه کشور ها</span>
                    </li>
                    <li className="flex items-center">
                      <span>زمان تحویل محصول :</span>
                      <span> 60 دقیقه الی 5 ساعت کاری</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-unit-9xl">
            <div className="w-full">
              <form className="flex flex-col items-start w-full">
                <div>
                  <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
                    How much do you expect to use each month?
                  </h3>
                  <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                      <input
                        type="radio"
                        id="hosting-small"
                        name="hosting"
                        value="hosting-small"
                        className="hidden peer"
                        required
                      />
                      <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            0-50 MB
                          </div>
                          <div className="w-full">Good for small websites</div>
                        </div>
                        <svg
                          className="w-5 h-5 ms-3 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="hosting-big"
                        name="hosting"
                        value="hosting-big"
                        className="hidden peer"
                      />
                      <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            500-1000 MB
                          </div>
                          <div className="w-full">Good for large websites</div>
                        </div>
                        <svg
                          className="w-5 h-5 ms-3 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </label>
                    </li>
                  </ul>
                </div>
                <div></div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
