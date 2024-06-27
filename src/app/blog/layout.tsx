import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MainNav } from "@/components/main-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MaxWidthWrapper className="bg-gray-100 dark:bg-gray-800">
        <MainNav />
      </MaxWidthWrapper>
      {children}
    </>
  );
}
