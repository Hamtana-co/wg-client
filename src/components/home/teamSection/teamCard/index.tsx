import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { PostCategoryModel } from "@/types/models/post-category";
import { UploadModel } from "@/types/models/upload";

interface IItems {
  team_name: string;
  logo: string;
  slug: string;
}

export default function TeamCard({ team_name, logo, slug }: IItems) {
  return (
    <div className="max-w-[280px] ">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Link href={`team/${slug}`} className=" w-full flex justify-center">
          <Image
            className="flex w-[120px] h-[120px] rounded-3xl justify-center flex-col object-cover"
            src={logo}
            width={500}
            height={500}
            alt="test"
          />
        </Link>
        <Link href={`team/${slug}`}>
          <span className="text-white text-center font-[peyda] font-normal text-lg line-clamp-1">
            {team_name}
          </span>
        </Link>
      </div>
    </div>
  );
}
