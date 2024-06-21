import { CustomMDX } from "@/components/mdx";
import { getTermsOfUse } from "../blog/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MainNav } from "@/components/main-nav";

export default function Page() {
  let post = getTermsOfUse().find((post) => post.slug === "terms-of-use");
  return (
    <MaxWidthWrapper>
      <MainNav />
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </MaxWidthWrapper>
  );
}
