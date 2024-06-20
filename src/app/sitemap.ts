import { getBlogPosts } from "./blog/utils";

export const baseUrl = "https://coding-jitsu-blog.vercel.app";

const pages = [
  "",
  "/blog/react",
  "/blog/javascript",
  "/blog/css",
  "/blog/animation",
  "/blog/performance",
  "/blog/databases",
];

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = pages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
