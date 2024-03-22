"use client";
import BlogCard from "../blog-card";
import { IPostsProps } from "../types";

export default function BlogGrid({ posts }: IPostsProps) {
  return (
    <div className="flex justify-start items-start">
      <div className="posts_wrap grid grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {posts.length >= 1 ? (
          posts.map((item) => (
            <BlogCard
              key={`post-${item.slug}`}
              title={item.title}
              slug={item.slug}
              image={item.image?.full_path}
              image_alt={item.image_alt}
              author={item.author}
              short_desc={item.short_desc}
              category={item.category}
            />
          ))
        ) : (
          <div>
            <p className="text-white">تیمی وجود ندارد</p>
          </div>
        )}
      </div>
    </div>
  );
}
