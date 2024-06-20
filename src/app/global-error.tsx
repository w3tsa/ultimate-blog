"use client";

import Footer from "@/components/footer";
import { MainNav } from "@/components/main-nav";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex flex-col h-[100vh]">
        <MainNav />
        <main className="flex h-full flex-col items-center justify-center flex-1">
          <h2 className="text-center">Something went wrong!</h2>
          <button
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            onClick={() => reset()}
          >
            Try again
          </button>
        </main>
        <Footer />
      </body>
    </html>
  );
}
