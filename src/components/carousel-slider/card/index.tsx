import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface IItems {
  teamName: string;
  href: string;
}

export default function CarouselCard({ teamName, href }: IItems) {
  return (
    <div className="bg-[#2A2D3D] p-[25px] rounded-3xl flex flex-col justify-center items-center gap-5 rtl">
      <Link href={`/team/${href}`}>
        <div className="flex  justify-center flex-col w-[128px] h-[128px]">
          <Image
            className="flex rounded-[12px] justify-center flex-col w-full h-full object-cover"
            src="/test.jpeg"
            width={500}
            height={500}
            alt="test"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <h2 className="text-white text-[32px]">{teamName}</h2>
          <div className="flex flex-col gap-3 justify-between w-full text-white items-center">
            <div className="flex gap-2">
              <Link href="/">
                <Icon icon="fa6-brands:youtube" className="w-6 h-6" />
              </Link>
              <Link href="/">
                <Icon icon="fa6-brands:instagram" className="w-6 h-6" />
              </Link>
              <Link href="/">
                <Icon icon="fa6-brands:discord" className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
