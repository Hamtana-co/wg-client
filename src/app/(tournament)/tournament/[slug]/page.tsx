"use client";

import { useQuery } from "@tanstack/react-query";
import SinglePage from "@/components/blog/single-page";
import { tournamentService } from "../service";

export default function SingleBlog({ params }: { params: { slug: string } }) {
  const postQuery = useQuery({
    queryKey: ["GET_POSTSE"],
    queryFn: () =>
      tournamentService.getSlug(
        params.slug,
        `relations[image]=true&relations[author]=true`
      ),
  });
  return (
    <SinglePage
      title={postQuery.data?.data.title}
      image={postQuery.data?.data.image?.full_path}
      body={postQuery.data?.data.body}
      author={postQuery.data?.data.author.username}
    />
  );
}
