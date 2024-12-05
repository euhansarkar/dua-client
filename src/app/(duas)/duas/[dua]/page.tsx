import MainContentArea from "@/components/global/main-content-area";
import ResponsiveHeader from "@/components/global/responsive-header";
import { CategorySidebar } from "@/components/local/category-sidebar";
import { DuaSidebar } from "@/components/local/dua-sidebar";
import { MobileNav } from "@/components/local/mobile-nav";
import { getBaseUrl } from "@/helper/env-config";

export default async function DuasPage() {
  try {
    // Fetch categories
    const response = await fetch(`${getBaseUrl()}/categories?page=1&limit=20`);

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    // Parse JSON data
    const data = await response.json(); // This gives you the actual data
    const categories = data?.data;
    console.log(`see categories data`, categories);

    return (
      <div className="h-screen overflow-hidden bg-[#0E1319]">
        <div className="flex h-full">
          {/* sidebar */}
          <DuaSidebar className="hidden lg:flex" />

          {/* Main Content Area */}
          <div className="flex w-full flex-col">
            {/* header */}
            <ResponsiveHeader />

            <div className="flex flex-row">
              {/* Desktop Categories Sidebar */}
              <CategorySidebar categories={categories} className="hidden lg:flex" />

              {/* Main Content */}
              <MainContentArea />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav className="lg:hidden" />
      </div>
    );
  } catch (error) {
    console.error("Error loading categories:", error);
    return <div>Error loading categories</div>;
  }
}
