import fs from "fs";
import path from "path";
import matter from "gray-matter";
// export async function updatePageViews(
//   postSlug: string,
//   title: string,
//   category: string
// ) {
//   try {
//     const existingPost = await db.post.findUnique({
//       where: { slug: postSlug },
//     });
//     if (existingPost) {
//       await db.post.update({
//         where: { slug: postSlug },
//         data: {
//           view_count: { increment: 1 },
//         },
//       });
//     } else {
//       await db.post.create({
//         data: {
//           slug: postSlug,
//           title: title,
//           category: category,
//         },
//       });
//     }
//   } catch (error) {
//     console.error("Error updating page view:", error);
//   }
// }

// Get popular posts

// export async function getPopularPosts() {
//   try {
//     const data = await db.post.findMany({
//       take: 10,
//       orderBy: [{ view_count: "desc" }],
//     });
//     return data;
//   } catch (error) {
//     console.error("Database Error...", error);
//     throw new Error("Failed to fetch the popular posts");
//   }
// }

// import Test from "../blog/contents/";
type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  category: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
  // return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { data: metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "src", "app", "blog", "contents"));
}

export function getTermsOfUse() {
  return getMDXData(path.join(process.cwd(), "src", "app", "terms-of-use"));
}
export function getPrivacyPolicy() {
  return getMDXData(path.join(process.cwd(), "src", "app", "privacy-policy"));
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
