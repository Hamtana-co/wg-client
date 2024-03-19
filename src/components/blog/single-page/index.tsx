export default function SinglePage({
  title,
  slug,
  image,
  image_alt,
  author,
  short_desc,
  body,
  category,
}: any) {
  return (
    <div className="container pt-36 mx-auto w-full font-[irsans]">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-x-7 gap-y-8 mt-8 md:mt-10">
        <div className="col-span-full lg:col-span-8 xl:col-span-9 w-fit">
          <div className="bg-white dark:bg-[#242a38] rounded-2xl p-4.5 sm:p-5 ">
            <div className="flex items-center gap-x-2 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-b-neutral-200/60 dark:border-b-white/10 relative">
              <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-[#9F70FD] rounded-r-sm"></span>
              <h1 className="font-danaDemiBold text-xl md:text-[1.625rem]/10 font-[peyda] font-medium">
                ساخت سرچ باکس در html
              </h1>
            </div>

            <div className="grid sm:flex grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 mb-6 text-slate-500 font-danaMedium text-sm sm:text-base">
              <div className="flex items-center gap-x-1.5">
                <svg className="size-6 sm:size-7">
                  <use href="#user"></use>
                </svg>
                <span>زهرا آقاخانی</span>
              </div>

              <div className="flex items-center gap-x-1.5">
                <svg className="size-6 sm:size-7">
                  <use href="#calendar"></use>
                </svg>
                <span>1402/12/29</span>
              </div>

              <div className="flex items-center gap-x-1.5">
                <svg className="size-6 sm:size-7">
                  <use href="#eye"></use>
                </svg>
                <span>231</span>
              </div>
            </div>

            <img
              src="https://sabzlearn.ir/wp-content/uploads/2022/02/html-Search-Bax0.webp"
              className="aspect-video object-cover rounded-2xl"
              alt="ساخت سرچ باکس در html"
            />
          </div>
        </div>
      </section>
    </div>
  );
}