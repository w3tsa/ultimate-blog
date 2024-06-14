// import { latestPosts } from "@/lib/placeholder-data";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";

export default function LatestPosts() {
  let latestPosts = getBlogPosts();
  return (
    <>
      <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
        Recently Published
      </h1>
      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <article key={post.slug} className="text-wrap max-w-md my-10">
            <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
              <h3 className="font-bold py-2 leading-5 hover:text-blue-400">
                {post.metadata.title}
              </h3>
            </Link>
            <p className="leading-8 my-5">{post.metadata.summary}</p>
            <p className="text-sm text-muted-foreground">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
          </article>
        ))}
    </>
  );
}

/* 
latestPosts.map((post) => (
        <article key={post.title} className="text-wrap max-w-md my-10">
          <Link href={`/${post.category}/${post.title}`}>
            <h3 className="font-bold py-2 leading-5 hover:text-blue-400">
              {post.title}
            </h3>
          </Link>
          <p className="leading-8 my-5">{post.description}</p>
          <p className="text-sm text-muted-foreground">{post.date}</p>
        </article>
      ))
*/

/* 
<Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
*/
