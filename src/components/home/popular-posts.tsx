"use client";

import { Icons } from "@/components/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { popularPosts } from "@/lib/placeholder-data";

type PopularPostsType = {
  title?: string;
}[];

export default function PopularPosts() {
  const [popularPosts, setPopularPosts] = useState<PopularPostsType>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3000/api");
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
