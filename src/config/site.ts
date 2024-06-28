type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Coding Jitsu Blog",
  description:
    "An Open source Technical Blog Platform with Next.js 14 shadcn/ui, prisma and markdown support.",
  url: "https://coding-jitsu-blog.vercel.app",
  ogImage: "https://coding-jitsu-blog.vercel.app/og",
  links: {
    twitter: "https://twitter.com/codingjitsu",
    github: "https://github.com/codingjitsu",
  },
};
