import LatestPosts from "@/components/home/latest-posts";
import PopularPosts from "@/components/home/popular-posts";
import TopCategories from "@/components/home/top-categories";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row lg:flex-row">
      <div>
        <LatestPosts />
      </div>
      <div className="h-screen">
        <div>
          <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
          <TopCategories />
        </div>
        <div className="mt-10 sticky top-0">
          <h1 className="font-bold mb-2">POPULAR POSTS</h1>
          <PopularPosts />
        </div>
      </div>
    </main>
  );
}
