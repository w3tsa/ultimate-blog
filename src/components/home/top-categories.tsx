// import { categories } from "@/lib/placeholder-data";
import { posts } from "@/lib/constants";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TopCategories() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {posts.map((post) => (
        <Button
          key={post.title}
          variant={"secondary"}
          className="hover:scale-110 transition-all"
          asChild
        >
          <Link href={post.href}>{post.title}</Link>
        </Button>
      ))}
    </div>
  );
}
