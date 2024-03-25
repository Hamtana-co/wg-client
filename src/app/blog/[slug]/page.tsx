"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { postService } from "./service";
import SinglePage from "@/components/blog/single-page";

export default function SingleBlog({ params }: { params: { slug: string } }) {
  const postQuery = useQuery({
    queryKey: ["GET_POSTSE"],
    queryFn: () =>
      postService.getSlug(
        params.slug,
        `relations[image]=true&relations[author]=true`
      ),
  });

  console.log(postQuery);
  return (
    <SinglePage
      title={postQuery.data?.data.title}
      image={postQuery.data?.data.image?.full_path}
      body={postQuery.data?.data.body}
      author={postQuery.data?.data.author.username}
    />
  );
}
