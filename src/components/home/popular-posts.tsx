"use client";

import { Icons } from "@/components/icons";
import { fetchUrl, fetcher } from "@/lib/utils";
import Link from "next/link";
import useSWR from "swr";
import { PopularPostSkeleton } from "../skeleton/page";
// import { popularPosts } from "@/lib/placeholder-data";rcel.app/api";

export default function PopularPosts() {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <PopularPostSkeleton />;

  return (
    <ul className="overflow-auto">
      {data?.map((post: { category: string; slug: string; title: string }) => (
        <Link href={`/blog/${post.category}/${post.slug}`} key={post.title}>
          <li className="flex items-center gap-2 group cursor-pointer py-2">
            <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
            <p className="text-wrap">{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
