import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getBlogPosts } from "../utils";
import CardCategory from "@/components/category/page";
import Link from "next/link";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    category: post.metadata.category,
  }));
}

export default function Page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {posts.map((post) => (
        <Link
          href={`/blog/${post.metadata.category}/${post.slug}`}
          key={post.slug}
        >
          <CardCategory
            title={post.metadata.title}
            summary={post.metadata.summary}
            date={post.metadata.publishedAt}
          />
        </Link>
      ))}
    </div>
  );
}