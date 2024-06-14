import { Icons } from "@/components/icons";
import { popularPosts } from "@/lib/placeholder-data";

export default function PopularPosts() {
  return (
    <ul className="overflow-auto">
      {popularPosts.map((post) => (
        <li
          key={post.title}
          className="leading-10 flex items-center gap-2 group cursor-pointer"
        >
          <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
          {post.title}
        </li>
      ))}
    </ul>
  );
}
