"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
  title,
  slug,
  image,
  image_alt,
  author,
  short_desc,
  category,
}: any) {
  return (
    <div className="blog flex flex-col font-[irsans] max-w-80 bg-white dark:bg-[#242a38] border  border-neutral-100 dark:border-none overflow-hidden rounded-3xl">
      <div className="p-3 h-[220px] overflow-hidden">
        <Link href={`/blog/${slug}`}>
          <Image
            src={image}
            width={300}
            height={80}
            className="block w-full h-full object-cover rounded-2xl "
            alt={image_alt}
          />
        </Link>
      </div>

      <div className="flex-grow px-5 py-3">
        <h4 className=" font-light text-lg line-clamp-2 mb-3">
          <Link href={`/blog/${slug}`} className="line-clamp-1">
            {title}
          </Link>
        </h4>

        <p className=" text-sm line-clamp-2 dark:text-gray-500 ">
          {short_desc}
        </p>
      </div>

      <div className="px-5 py-3">
        <div className="flex justify-between items-center text-slate-500 dark:text-white/70 text-sm pb-4 border-t border-t-neutral-200/70 pt-5">
          <div className="flex items-center gap-2">
            <Icon icon="solar:user-bold-duotone" className="w-6 h-6" />
            <a
              href="https://sabzlearn.ir/blog/author/zahra-agh/"
              className="pb-1"
            >
              {author}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="solar:calendar-bold-duotone" className="w-6 h-6" />
            <span className="font-[peyda] flex items-center pt-1">
              1402/12/29
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
