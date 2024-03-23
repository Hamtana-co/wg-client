"use client";

import { TeamModel } from "@/types/models/team";
import CarouselSlider from "../carousel-slider";
import { useQuery } from "@tanstack/react-query";
import { teamService } from "@/app/service";
import { useState } from "react";
import { postService } from "../blog/service";
import PostSection from "./postSection";
import { Card, Skeleton } from "@nextui-org/react";

export default function HomePage() {
  const [page, setPage] = useState<number>(1);
  const postQuery = useQuery({
    queryKey: ["GET_ARTICELS"],
    queryFn: () =>
      postService.getAll(`relations[image]=true&relations[category]=true`),
  });

  return (
    <div className="container mx-auto w-full pt-28 md:pt-36">
      {postQuery.isSuccess == true ? (
        <PostSection
          items={postQuery.data?.data.result || []}
          isLoading={postQuery.isLoading}
          pagination={postQuery.data?.data.pagination}
          page={page}
          setPage={setPage}
        />
      ) : (
        // <div className="w-full max-w-[1400px] py-24 overflow-y-hidden">
        //   <section className="flex pb-8">
        //     <div className="flex items-center gap-2 text-[#7567C7]">
        //       <Skeleton className="w-12 h-12 rounded-lg" />
        //       <Skeleton className="w-unit-5xl h-12  rounded-lg" />
        //     </div>
        //   </section>
        //   <section>
        //     <div className="flex justify-start items-center gap-10">
        //       <div className="rounded-3xl bg-[#70737b47] border-b-8 border-[#10101147] flex flex-col gap-5 hover:border-[#752AE1] p-2">
        //         <div className="w-[264px] h-[200px]">
        //           <Skeleton className="rounded-lg">
        //             <div className="w-full h-full rounded-lg bg-secondary"></div>
        //           </Skeleton>
        //         </div>
        //         <div className="px-2">
        //           <span className="text-white font-[peyda] font-medium text-[22px] line-clamp-1">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //         </div>
        //         <div className="px-2">
        //           <span className="text-[#9d9ca0] font-[peyda] font-normal text-sm line-clamp-2">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //         </div>
        //         <div className="px-2 flex justify-between text-white font-[peyda] font-normal text-sm">
        //           <span className="flex items-center gap-2">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //           <span className=" flex items-center gap-2">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //         </div>
        //       </div>
        //       <div className="rounded-3xl bg-[#70737b47] border-b-8 border-[#10101147] flex flex-col gap-5 hover:border-[#752AE1] p-2">
        //         <div className="w-[264px] h-[200px]">
        //           <Skeleton className="rounded-lg">
        //             <div className="w-full h-full rounded-lg bg-secondary"></div>
        //           </Skeleton>
        //         </div>
        //         <div className="px-2">
        //           <span className="text-white font-[peyda] font-medium text-[22px] line-clamp-1">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //         </div>
        //         <div className="px-2">
        //           <span className="text-[#9d9ca0] font-[peyda] font-normal text-sm line-clamp-2">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //         </div>
        //         <div className="px-2 flex justify-between text-white font-[peyda] font-normal text-sm">
        //           <span className="flex items-center gap-2">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //           <span className=" flex items-center gap-2">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //         </div>
        //       </div>
        //       <div className="rounded-3xl bg-[#70737b47] border-b-8 border-[#10101147] flex flex-col gap-5 hover:border-[#752AE1] p-2">
        //         <div className="w-[264px] h-[200px]">
        //           <Skeleton className="rounded-lg">
        //             <div className="w-full h-full rounded-lg bg-secondary"></div>
        //           </Skeleton>
        //         </div>
        //         <div className="px-2">
        //           <span className="text-white font-[peyda] font-medium text-[22px] line-clamp-1">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //         </div>
        //         <div className="px-2">
        //           <span className="text-[#9d9ca0] font-[peyda] font-normal text-sm line-clamp-2">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //         </div>
        //         <div className="px-2 flex justify-between text-white font-[peyda] font-normal text-sm">
        //           <span className="flex items-center gap-2">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //           <span className=" flex items-center gap-2">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //         </div>
        //       </div>
        //       <div className="rounded-3xl bg-[#70737b47] border-b-8 border-[#10101147] flex flex-col gap-5 hover:border-[#752AE1] p-2">
        //         <div className="w-[264px] h-[200px]">
        //           <Skeleton className="rounded-lg">
        //             <div className="w-full h-full rounded-lg bg-secondary"></div>
        //           </Skeleton>
        //         </div>
        //         <div className="px-2">
        //           <span className="text-white font-[peyda] font-medium text-[22px] line-clamp-1">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //         </div>
        //         <div className="px-2">
        //           <span className="text-[#9d9ca0] font-[peyda] font-normal text-sm line-clamp-2">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //         </div>
        //         <div className="px-2 flex justify-between text-white font-[peyda] font-normal text-sm">
        //           <span className="flex items-center gap-2">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //           <span className=" flex items-center gap-2">
        //             <Skeleton className="w-4/5 rounded-lg">
        //               <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        //             </Skeleton>
        //           </span>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        // </div>
        <div></div>
      )}
    </div>
  );
}
