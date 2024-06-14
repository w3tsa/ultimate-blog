import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../../utils";
import { CustomMDX } from "@/components/mdx";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Blog({
  params,
}: {
  params: { slug: string; category: string };
}) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <section className="mt-10">
      <MaxWidthWrapper>
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </MaxWidthWrapper>
    </section>
  );
}
