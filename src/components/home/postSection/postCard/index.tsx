import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { PostCategoryModel } from "@/types/models/post-category";
import { UploadModel } from "@/types/models/upload";

interface IItems {
  image: string;
  title: string;
  short_desc: string;
  author: string;
  category: string;
  slug: string;
  time: string;
}

export default function PostCard({
  image,
  title,
  short_desc,
  author,
  category,
  slug,
  time,
}: IItems) {
  return (
    <div className="max-w-[280px]">
      <div className="rounded-3xl bg-[#70737b47] border-b-8 border-[#10101147] flex flex-col gap-5 hover:border-[#752AE1] p-2">
        <div className="relative w-[264px] h-[200px]">
          <Image
            className="flex rounded-[16px] justify-center flex-col w-full h-full object-cover"
            src={image}
            width={500}
            height={500}
            alt="test"
          />
          <span className="absolute top-2 left-2 bg-[#9F70FD] px-2 flex justify-center items-center text-sm h-8 rounded-lg">
            {category}
          </span>
        </div>
        <div className="px-2">
          <span className="text-white font-[peyda] font-medium text-[22px] line-clamp-1">
            {title}
          </span>
        </div>
        <div className="px-2">
          <span className="text-[#9d9ca0] font-[peyda] font-normal text-sm line-clamp-2">
            {short_desc}
          </span>
        </div>
        <div className="px-2 flex justify-between text-white font-[peyda] font-normal text-sm">
          <span className="flex items-center gap-2">
            <Icon icon="solar:user-broken" className="w-6 h-6" />
            {author}
          </span>
          <span className=" flex items-center gap-2">
            <Icon icon="solar:clock-circle-broken" className="w-6 h-6" />
            {time}
          </span>
        </div>
      </div>
    </div>
    // <div className="bg-[#2A2D3D] p-[25px] rounded-3xl flex flex-col justify-center items-center gap-5 rtl">
    //   <Link href={`/blog/${slug}`}>
    //     <div className="flex  justify-center flex-col w-[128px] h-[128px]">
    //       <Image
    //         className="flex rounded-[12px] justify-center flex-col w-full h-full object-cover"
    //         src="/test.jpeg"
    //         width={500}
    //         height={500}
    //         alt="test"
    //       />
    //     </div>
    //     <div className="flex flex-col justify-center items-center gap-5 w-full">
    //       <h2 className="text-white text-[32px]">{title}</h2>
    //       <div className="flex flex-col gap-3 justify-between w-full text-white items-center">
    //         <div className="flex gap-2">
    //           <Link href="/">
    //             <Icon icon="fa6-brands:youtube" className="w-6 h-6" />
    //           </Link>
    //           <Link href="/">
    //             <Icon icon="fa6-brands:instagram" className="w-6 h-6" />
    //           </Link>
    //           <Link href="/">
    //             <Icon icon="fa6-brands:discord" className="w-6 h-6" />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
  );
}
