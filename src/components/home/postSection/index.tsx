import { Divider } from "@nextui-org/react";
import { IPostProps } from "../types";
import PostCard from "./postCard";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function PostSection({ sectionTitle, items }: IPostProps) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1400px] py-24">
        <section className="flex  items-center pb-8 justify-between w-full">
          <div className="flex items-center gap-2 text-[#7567C7] ">
            <span className="">
              <Icon
                icon="solar:document-text-bold-duotone"
                className="w-12 h-12"
              />
            </span>
            <h2 className="text-center font-[peyda] text-2xl lg:text-2.5xl font-black">
              جدید ترین مطالب
            </h2>
          </div>
          <div className="">
            <Divider />
          </div>
          <div className="">
            <Link href="/blog">مشاهده بیشتر</Link>
          </div>
        </section>
        <section>
          <div className="flex justify-start items-center gap-10">
            {items.length >= 1 ? (
              items.map((item) => (
                <PostCard
                  key={`team-${item.id}`}
                  title={item.title}
                  short_desc={item.short_desc}
                  image={item.image?.full_path}
                  author={item.author}
                  time={
                    (item.updated_at = new Date().toLocaleDateString(
                      "fa-IR",
                      {}
                    ))
                  }
                  category={item.category.name}
                  slug={item.slug}
                />
              ))
            ) : (
              <div>
                <p className="text-white">مطلبی موجود نیست</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
