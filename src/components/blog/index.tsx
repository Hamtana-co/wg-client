"use client";

import { Icon } from "@iconify/react";
import { postService, uploadService } from "./service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import BlogGrid from "./blog-grid";

export default function BlogPage() {
  const [page, setPage] = useState<number>(1);

  const postQuery = useQuery({
    queryKey: ["GET_POSTS"],
    queryFn: () => postService.getAll(`relations[image]=true&select="full_path"`),
  });
  console.log(postQuery)

  return (
    <div className="container mx-auto w-full flex flex-col rtl pt-36">
      <div className="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-15 w-full">
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
          <h2 className="text-center font-[peyda] text-2xl lg:text-2.5xl font-black">
            وبلاگ
          </h2>
        </div>
      </div>
      <section className="grid grid-cols-12 gap-y-5 md:gap-x-7 pb-32">
        <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
          <form className="space-y-6">
            <div className="h-16 bg-white dark:bg-[#242a38] rounded-xl p-4 md:p-5">
              <div className="flex justify-between gap-x-6 h-full text-slate-500 dark:text-white ">
                <input
                  type="text"
                  className="md:font-danaMedium placeholder-slate-500 bg-transparent flex-grow focus:outline-none"
                  name="s"
                  placeholder="جستجو بین مقالات"
                />
                <button type="submit">
                  <Icon
                    icon="solar:rounded-magnifer-bold-duotone"
                    className="w-7 h-7"
                  />
                </button>
              </div>
            </div>
          </form>
        </aside>
        <section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
          <div className="flex md:hidden items-center gap-6 mb-8">
            <div className="button button-xl button-white w-full" id="sort-btn">
              <svg className="w-6 h-6 shrink-0">
                <use href="#arrows-up-down"></use>
              </svg>
              <span className="active_sort_title">عادی</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-x-6 px-5 mb-8 h-16 bg-white dark:bg-[#242a38] shadow-normal dark:shadow-none rounded-xl">
            <div className="flex items-center shrink-0 gap-x-2">
              <svg className="w-7 h-7">
                <use href="#arrows-up-down"></use>
              </svg>
              <span className="font-danaMedium">مرتب سازی بر اساس :</span>
            </div>
            <div className="flex gap-x-5 lg:gap-x-8 h-full items-center">
              <a
                href="javascript:setArchiveSort('default', 'عادی')"
                data-id="default"
                className="sort-btn sort-btn--active"
                role="button"
              >
                عادی
              </a>
              <a
                href="javascript:setArchiveSort('newest', 'جدید ترین')"
                data-id="newest"
                className="sort-btn"
                role="button"
              >
                جدید ترین
              </a>
              <a
                href="javascript:setArchiveSort('oldest', 'قدیمی ترین')"
                data-id="oldest"
                className="sort-btn"
                role="button"
              >
                قدیمی ترین
              </a>
              <a
                href="javascript:setArchiveSort('popular', 'پرنظر ها')"
                data-id="popular"
                className="sort-btn"
                role="button"
              >
                پرنظر ها
              </a>
            </div>
          </div>
          <BlogGrid
            posts={postQuery.data?.data.result || []}
            isLoading={postQuery.isLoading}
            pagination={postQuery.data?.data.pagination}
            page={page}
            setPage={setPage}
          />
        </section>
      </section>
    </div>
  );
}
