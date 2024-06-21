import { CustomMDX } from "@/components/mdx";
import { getPrivacyPolicy, getTermsOfUse } from "../blog/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MainNav } from "@/components/main-nav";

export default function Page() {
  let post = getPrivacyPolicy().find((post) => post.slug === "privacy-policy");
  return (
    <MaxWidthWrapper>
      <MainNav />
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </MaxWidthWrapper>
  );
}
