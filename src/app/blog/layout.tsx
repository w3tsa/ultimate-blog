import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MainNav } from "@/components/main-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <MaxWidthWrapper>
          <MainNav />
        </MaxWidthWrapper>
      </div>
      {children}
    </>
  );
}
