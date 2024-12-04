import MainContentArea from "@/components/global/main-content-area";
import ResponsiveHeader from "@/components/global/responsive-header";
import { CategorySidebar } from "@/components/local/category-sidebar";
import { DuaSidebar } from "@/components/local/dua-sidebar";
import { MobileNav } from "@/components/local/mobile-nav";
import { categories } from "@/data/categories-data";

export default function DuasPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#0E1319]">
      <div className="flex h-full">
        {/* sidebar */}
        <DuaSidebar className="hidden lg:flex" />

        {/* Main Content Area */}
        <div className="flex w-full flex-col">
          {/* header */}
          <ResponsiveHeader />

          <div className="flex items-center flex-row">
            {/* Desktop Categories Sidebar */}
            <CategorySidebar data={categories} className="hidden lg:flex" />

            {/* Main Content */}
            <MainContentArea />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav className="lg:hidden" />
    </div>
  );
}