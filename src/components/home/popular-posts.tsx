"use client";

import { Icons } from "@/components/icons";
import { fetchUrl } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { popularPosts } from "@/lib/placeholder-data";rcel.app/api";

export default function PopularPosts() {
  const [popularPosts, setPopularPosts] = useState<{ title: string }[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(fetchUrl);
      const json = await data.json();
      setPopularPosts(json);
    }
    fetchData();
  }, []);

  return (
    <ul className="overflow-auto">
      {popularPosts?.map((post: any) => (
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
