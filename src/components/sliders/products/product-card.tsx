import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const SlideBox = () => {
  return (
    <div className="sliderItem p-2  hover:pt-0 transition-all duration-300 rtl">
      <div className="relative bg-[#70737b1c] h-fit w-72 rounded-[25px] border-2 border-[#ffffff4a] p-[5px]">
        <div>
          <Image
            className="w-full rounded-[20px]"
            src="/test.jpeg"
            width={512}
            height={200}
            alt="test"
          />
        </div>
        <div className="px-3 py-3 border-b-2">
          <h1 className="text-white text-xl ">استیم والت ترکیه</h1>
          <ul className="flex flex-col text-sm text-[#9B9FA3] px-5 py-2">
            <li>نحوه فعال سازی : توسط پشتیبانی</li>
            <li>ریجن : ترکیه</li>
            <li>زمان تحویل : 1 تا 3 ساعت</li>
            <li>پلتفرم  : 1 تا 3 ساعت</li>
          </ul>
        </div>
        <div className="flex justify-between items-center py-2 px-1">
          <div className="flex items-center gap-2">
            <span className="text-[#D1BBFF] text-2xl">100</span>
            <span className="text-white">هزار تومان</span>
          </div>
          <div>
            <Link
              href=""
              className="bg-[#8762D8] border-b-4 border-[#6C43E2] min-h-10 py-2 px-4 flex justify-center items-center rounded-2xl text-white gap-2"
            >
              <span>مشاهده</span>
              <Icon icon="solar:eye-line-duotone" className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBox;
