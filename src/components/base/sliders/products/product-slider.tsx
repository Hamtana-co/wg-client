"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Icon } from "@iconify/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import SlideBox from "@/components/base/sliders/products/product-card";

export default function ProductSlider() {
  return (
    <div className="container w-full mx-auto rtl">
      <div className="flex justify-center items-center py-8 text-orange-400">
        <div className="flex items-center gap-2 min-w-fit pl-4">
          <span>
            <Icon icon="solar:fire-bold-duotone" className="w-12 h-12 text-amber-600" />
          </span>
          <h2 className="font-[montserrat] text-lg lg:text-xl font-black">
            پرفروش ترین محصولات
          </h2>
        </div>
        <span className="border-b-2 w-full border-amber-600"></span>
        <div className="font-[yekan] text-white text-sm min-w-fit px-4 py-2 font-light bg-[#eb8532d8] border-b-4 border-[#a86127c7] rounded-2xl mr-4 ">مشاهده بیشتر</div>
      </div>
      <div className="w-full h-full  mb-24 flex justify-center items-center">
        <Swiper
          dir="rtl"
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 0,
              navigation: false,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 0,
              navigation: false,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
              navigation: false,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 0,
              navigation: true,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 0,
              navigation: true,
            },
            1560: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          freeMode={true}
          navigation
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper w-full h-full flex justify-center items-center"
        >
          <SwiperSlide>
            <SlideBox />
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox />
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox />
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox />
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox />
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox />
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox />
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
