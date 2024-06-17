import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrum";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CustomMDX } from "@/components/mdx";
import { notFound } from "next/navigation";
import { formatDate, getBlogPosts, updatePageViews } from "../../utils";

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

  updatePageViews(params.slug, post.metadata.title, post.metadata.category);

  return (
    <section className="mt-10">
      <div className="my-10">
        <BreadcrumbWithCustomSeparator
          category={params.category}
          title={post.metadata.title}
        />
      </div>
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
