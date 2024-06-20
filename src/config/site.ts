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
  name: "Coding Jitsu",
  description:
    "An Open source Technical Blog Platform with Next.js shadcn/ui, prisma and markdown support.",
  url: "https://localhost:3000",
  ogImage: "https://localhost:3000/og.jpeg",
  links: {
    twitter: "https://twitter.com/codingjitsu",
    github: "https://github.com/codingjitsu",
  },
};
