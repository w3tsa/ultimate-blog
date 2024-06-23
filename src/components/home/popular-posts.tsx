import { Icons } from "@/components/icons";
import { db } from "@/db";
import Link from "next/link";
// import { popularPosts } from "@/lib/placeholder-data";

export default async function PopularPosts() {
  const popularPosts = await db.post.findMany({
    take: 10,
    orderBy: [{ view_count: "desc" }],
  });
  return (
    <ul className="overflow-auto">
      {popularPosts.map((post) => (
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
