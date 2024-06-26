import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const fetchUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://coding-jitsu-blog.vercel.app/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ResponseData = {
  category: string;
  title: string;
  slug: string;
}[];

export const fetcher = (
  ...args: Parameters<typeof fetch>
): Promise<ResponseData> => fetch(...args).then((res) => res.json());
