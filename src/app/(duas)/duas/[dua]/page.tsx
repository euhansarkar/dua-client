/* eslint-disable @typescript-eslint/ban-ts-comment */
import MainContentArea from "@/components/global/main-content-area";
import ResponsiveHeader from "@/components/global/responsive-header";
import { CategorySidebar } from "@/components/local/category-sidebar";
import { DuaSidebar } from "@/components/local/dua-sidebar";
import { MobileNav } from "@/components/local/mobile-nav";
interface DuaPageParams {
params: Promise<{ params: string }>;
searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function DuasPage({ params, searchParams}: DuaPageParams) {

  console.log("param object :", await params);
  const queries = await searchParams;

  console.log(`see queriesss`, queries);

  return (
    <div className="h-screen overflow-hidden bg-[#0E1319]">
      <div className="flex h-full">
        {/* Sidebar */}
        <DuaSidebar className="hidden lg:flex" />

        {/* Main Content Area */}
        <div className="flex w-full flex-col">
          {/* Header */}
          <ResponsiveHeader />

          <div className="flex flex-row h-full">
            {/* Desktop Categories Sidebar */}
            <CategorySidebar className="hidden lg:flex" />

            {/* Main Content */}
            <MainContentArea
              // // @ts-ignore
              // cat={queries?.cat}
              // // @ts-ignore

              // subCat={queries?.subCat}
              // // @ts-ignore

              // dua={queries?.dua}
              {...queries}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav className="lg:hidden" />
    </div>
  );
}
