import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import duar_gurutto from "@/assets/duar_gurutto.svg";
import { ScrollArea } from "../ui/scroll-area";
import { categoriesData } from "@/data/categories-data";
import { subCategoriesData } from "@/data/sub-categories-data";
import { duasData } from "@/data/duas-data";

export function CategoryTree({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const [expandedSubCategories, setExpandedSubCategories] = useState<number[]>(
    []
  );
  const router = useRouter();

  const toggleCategory = (catId: number, catName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(catId)
        ? prev.filter((id) => id !== catId)
        : [...prev, catId]
    );

    // Update the URL when the category is clicked, including query parameter
    if (!expandedCategories.includes(catId)) {
      router.push(
        `/duas/${encodeURIComponent(
          catName.toLowerCase().replace(/\s+/g, "-")
        )}?cat=${catId}`
      );
    }
  };

  const toggleSubCategory = (subCatId: number) => {
    setExpandedSubCategories((prev) =>
      prev.includes(subCatId)
        ? prev.filter((id) => id !== subCatId)
        : [...prev, subCatId]
    );
  };

  return (
    <div
      className={cn(
        "w-64 flex flex-col h-screen border-r border-[#2F3B4B] bg-[#0E1319]",
        className
      )}
    >
      <ScrollArea className="flex-1">
        {categoriesData?.map((category) => (
          <div key={category.cat_id} className="space-y-1">
            {/* Category Item */}
            <div
              className="flex items-center gap-3 p-2 rounded-md hover:bg-[#1E2732] cursor-pointer"
              onClick={() => toggleCategory(category.cat_id, category.cat_name)}
            >
              <div className="h-8 w-8 rounded-md bg-[#1E2732] flex items-center justify-center">
                <Image
                  src={duar_gurutto}
                  alt={category?.cat_name}
                  className="h-full w-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-white">
                  {category?.cat_name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Subcategory: {category?.no_of_subcat}
                </p>
              </div>
              {expandedCategories.includes(category.cat_id) ? (
                <ChevronDown className="h-4 w-4 text-white" />
              ) : (
                <ChevronRight className="h-4 w-4 text-white" />
              )}
            </div>

            {/* Subcategories */}
            {expandedCategories.includes(category.cat_id) &&
              subCategoriesData
                .filter((sub) => sub.cat_id === category.cat_id)
                .map((subCategory) => (
                  <div key={subCategory.subcat_id} className="ml-4">
                    <div
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-[#1E2732] cursor-pointer"
                      onClick={() => toggleSubCategory(subCategory.subcat_id)}
                    >
                      <ChevronRight
                        className={`h-4 w-4 ${
                          expandedSubCategories.includes(subCategory.subcat_id)
                            ? "rotate-90 text-white"
                            : "text-muted-foreground"
                        }`}
                      />
                      <span className="text-sm text-muted-foreground hover:text-white">
                        {subCategory.subcat_name}
                      </span>
                    </div>

                    {/* Duas */}
                    {expandedSubCategories.includes(subCategory.subcat_id) &&
                      duasData
                        .filter(
                          (dua) => dua.subcat_id === subCategory.subcat_id
                        )
                        .map((dua) => (
                          <Button
                            key={dua.dua_id}
                            variant="ghost"
                            className="w-full justify-start pl-8 text-xs text-muted-foreground hover:bg-[#1E2732] hover:text-white"
                          >
                            {dua.dua_name}
                          </Button>
                        ))}
                  </div>
                ))}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
