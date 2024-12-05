import MainContentArea from "@/components/global/main-content-area";
import ResponsiveHeader from "@/components/global/responsive-header";
import { CategorySidebar } from "@/components/local/category-sidebar";
import { DuaSidebar } from "@/components/local/dua-sidebar";
import { MobileNav } from "@/components/local/mobile-nav";
import { getBaseUrl } from "@/helper/env-config";

export default async function DuasPage({ params }: { params: Promise<{ dua: string }> }) {

  console.log(`see params`, params);

  try {
    const baseUrl = getBaseUrl();

    // Fetch categories, subcategories, and duas in parallel
    const [categoriesResponse, subcategoriesResponse, duasResponse] =
      await Promise.all([
        fetch(`${baseUrl}/categories?page=1&limit=20`),
        fetch(`${baseUrl}/sub-categories?page=1&limit=20`),
        fetch(`${baseUrl}/duas?page=1&limit=20`),
      ]);

    // Check responses
    if (!categoriesResponse.ok) {
      throw new Error(
        `Failed to fetch categories: ${categoriesResponse.statusText}`
      );
    }
    if (!subcategoriesResponse.ok) {
      throw new Error(
        `Failed to fetch subcategories: ${subcategoriesResponse.statusText}`
      );
    }
    if (!duasResponse.ok) {
      throw new Error(`Failed to fetch duas: ${duasResponse.statusText}`);
    }

    // Parse JSON data
    const [categoriesData, subcategoriesData, duasData] = await Promise.all([
      categoriesResponse.json(),
      subcategoriesResponse.json(),
      duasResponse.json(),
    ]);

    // Extract data
    const categories = categoriesData?.data;
    const subcategories = subcategoriesData?.data;
    const duas = duasData?.data;

    return (
      <div className="h-screen overflow-hidden bg-[#0E1319]">
        <div className="flex h-full">
          {/* sidebar */}
          <DuaSidebar className="hidden lg:flex" />

          {/* Main Content Area */}
          <div className="flex w-full flex-col">
            {/* header */}
            <ResponsiveHeader />

            <div className="flex flex-row h-full">
              {/* Desktop Categories Sidebar */}
              <CategorySidebar
                categories={categories}
                subCategories={subcategories}
                className="hidden lg:flex"
              />

              {/* Main Content */}
              <MainContentArea duas={duas} />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav className="lg:hidden" />
      </div>
    );
  } catch (error) {
    console.error("Error loading data:", error);
    return <div>Error loading data</div>;
  }
}
