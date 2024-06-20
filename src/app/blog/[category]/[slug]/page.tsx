import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CustomMDX } from "@/components/mdx";
import { notFound } from "next/navigation";
import { formatDate, getBlogPosts, updatePageViews } from "../../utils";
import Header from "@/components/header";

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
    <>
      <Header>
        <MaxWidthWrapper>
          <BreadcrumbWithCustomSeparator
            category={params.category}
            slug={post.slug}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </MaxWidthWrapper>
      </Header>
      <MaxWidthWrapper>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </MaxWidthWrapper>
    </>
  );
}
