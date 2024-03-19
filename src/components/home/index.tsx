"use client";

import { TeamModel } from "@/types/models/team";
import CarouselSlider from "../carousel-slider";
import { useQuery } from "@tanstack/react-query";
import { teamService } from "@/app/service";
import { useState } from "react";

export default function HomePage() {
  const [page, setPage] = useState<number>(1);
  const teamQuery = useQuery({
    queryKey: ["GET_TEAMS"],
    queryFn: () => teamService.getAll(),
  });
  const blogQuery = useQuery({
    queryKey: ["GET_ARTICELS"],
    queryFn: () => teamService.getAll(),
  });
  console.log(teamQuery);

  return (
    <div className="container mx-auto w-full pt-24">
      <CarouselSlider
        sectionTitle="جدید ترین تیم ها"
        items={teamQuery.data?.data.result || []}
        isLoading={teamQuery.isLoading}
        pagination={teamQuery.data?.data.pagination}
        page={page}
        setPage={setPage}
      />
      <CarouselSlider
        sectionTitle="آخرین مقالات"
        items={teamQuery.data?.data.result || []}
        isLoading={teamQuery.isLoading}
        pagination={teamQuery.data?.data.pagination}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
