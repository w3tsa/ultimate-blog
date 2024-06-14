import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="text-md font-semibold">Coding Jitsu</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Stay up-to-date with the latest news and insights from our blog.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" prefetch={false}>
                <Icons.twitter className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </Link>
              <Link href="#" aria-label="Facebook" prefetch={false}>
                <Icons.gitHub className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  prefetch={false}
                >
                  Latest
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  prefetch={false}
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  prefetch={false}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  prefetch={false}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Newsletter</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Subscribe to our newsletter to stay up-to-date with the latest
              news and updates.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
          &copy; 2024 Coding Jitsu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
