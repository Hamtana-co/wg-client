import Link from "next/link";
import SlideBox from "./product-card";
import { useRef } from "react";
import { Icon } from "@iconify/react";

export default function ProductSlider() {
  const carouselRef = useRef();
  const carouselSwitcher = (data: any) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo(
        carouselRef.current.scrollLeft + width * data,
        0
      );
    }
  };
  return (
    <div className="rtl">
      <div className="w-[1600px] mx-auto py-5">
        <section className="flex flex-col gap-4 px-2">
          <header className=" flex justify-between items-center ">
            <div className="flex items-center gap-3 text-[#FF8A1E]">
              <Icon icon="solar:fire-bold-duotone" className="w-12 h-12" />
              <h2 className="text-2xl ">پرفروش ترین محصولات</h2>
            </div>
            <div className=" flex gap-1">
              <div className=" flex items-center gap-1 text-zinc-600">
                <Icon
                  icon="solar:cart-large-2-bold-duotone"
                  onClick={() => {
                    carouselSwitcher(1);
                  }}
                  className=" cursor-pointer bg-white transition-all duration-300 hover:text-white hover:bg-indigo-400 w-10 h-10 p-3 rounded"
                />
                <Icon
                  icon="solar:cart-large-2-bold-duotone"
                  onClick={() => {
                    carouselSwitcher(-1);
                  }}
                  className=" cursor-pointer bg-white transition-all duration-300 hover:text-white hover:bg-indigo-400 w-10 h-10 p-3 rounded"
                />
              </div>
              <Link
                className=" text-white bg-[#FF8A1E] px-4 py-1 rounded-md transition-all duration-500"
                href={`/`}
              >
                مشاهده همه
              </Link>
            </div>
          </header>

          <div
            ref={carouselRef}
            className="sliderContainer w-full max-w-9xl overflow-x-scroll px-4  "
          >
            <div className=" flex justify-between items-center gap-4 w-full">
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
