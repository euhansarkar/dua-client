import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CategoryTree } from "./category-tree";
import { getBaseUrl } from "@/helper/config/env-config";

interface CategorySidebarProps {
  className?: string;
}


export async function CategorySidebar({ className }: CategorySidebarProps) {
  try {
    const baseUrl = getBaseUrl();

    // Fetch data
    const [categoriesResponse, subcategoriesResponse, duasResponse] =
      await Promise.all([
        fetch(`${baseUrl}/categories?page=1&limit=20`),
        fetch(`${baseUrl}/sub-categories?page=1&limit=20`),
        fetch(`${baseUrl}/duas?page=1&limit=100`),
      ]);

    if (
      !categoriesResponse.ok ||
      !subcategoriesResponse.ok ||
      !duasResponse.ok
    ) {
      throw new Error("Failed to fetch one or more data sets.");
    }

    const [categories, subCategories, duas]= await Promise.all([
      categoriesResponse.json().then((data) => data.data),
      subcategoriesResponse.json().then((data) => data.data),
      duasResponse.json().then((data) => data.data),
    ]);


    return (
      <div
        className={cn(
          "flex flex-col border-r border-[#2F3B4B] bg-[#0E1319] text-white",
          className
        )}
      >
        <div className="p-4">
          <h1 className="mb-4 text-lg font-semibold text-center bg-[#1FA45B] text-white rounded-md p-2">
            Categories
          </h1>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search Categories"
              className="pl-9 bg-[#1E2732] border-0 text-white placeholder:text-muted-foreground"
            />
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <CategoryTree
            categories={categories}
            subCategories={subCategories}
            duas={duas}
            className="px-4"
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading data:", error);
    return (
      <div className="p-4 text-center text-red-500">Error loading data</div>
    );
  }
}
