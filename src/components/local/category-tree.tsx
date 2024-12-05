/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import duar_gurutto from "@/assets/duar_gurutto.svg";
import { ScrollArea } from "../ui/scroll-area";
import { useCategoriesQuery } from "@/redux/api/category-api";
import { useSubCategoriesQuery } from "@/redux/api/sub-categories-api";
import { ICategory, IDua, ISubCategory } from "@/types";
import { useDuasQuery } from "@/redux/api/dua-api";

interface CategoryTreeProps {
  className: string;
}

export function CategoryTree({
  className,
}: CategoryTreeProps) {

  const { data: categoriesData,
    // isLoading: categoriesLoading
  } =
  useCategoriesQuery({ page: 1, limit: 30 });

  const {
    data: subCategoriesData,
    // isLoading: subCategoriesLoadin
  } = useSubCategoriesQuery({ page: 1, limit: 30 });

  const {
    data: duasData,
    // isLoading: subCategoriesLoadin
  } = useDuasQuery({ page: 1, limit: 200 });

const categories = categoriesData?.categories;
const subCategories = subCategoriesData?.subCategories;
const duas = duasData?.duas;
  

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

    // Update URL with category
    if (!expandedCategories.includes(catId)) {
      router.push(
        `/duas/${encodeURIComponent(
          catName.toLowerCase().replace(/\s+/g, "-")
        )}?cat=${catId}`
      );
    }
  };

  const toggleSubCategory = (
    catId: number,
    catName: string,
    subCatId: number
  ) => {
    setExpandedSubCategories((prev) =>
      prev.includes(subCatId)
        ? prev.filter((id) => id !== subCatId)
        : [...prev, subCatId]
    );

    // Update URL with subcategory
    if (!expandedSubCategories.includes(subCatId)) {
      router.push(
        `/duas/${encodeURIComponent(
          catName.toLowerCase().replace(/\s+/g, "-")
        )}?cat=${catId}&subcat=${subCatId}`
      );
    }
  };

  const handleDuaClick = (
    catId: number,
    subCatId: number,
    duaId: number,
    duaName: string
  ) => {
    // Update URL with dua
    router.push(
      `/duas/${encodeURIComponent(
        duaName.toLowerCase().replace(/\s+/g, "-")
      )}?cat=${catId}&subcat=${subCatId}&dua=${duaId}`
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
        {categories?.map((category: ICategory) => (
          <div key={category.cat_id} className="space-y-1">
            {/* Category Item */}
            <div
              className="flex items-center gap-3 p-2 rounded-md hover:bg-[#1E2732] cursor-pointer"
              onClick={() =>
                toggleCategory(category.cat_id, category.cat_name_en)
              }
            >
              <div className="h-8 w-8 rounded-md bg-[#1E2732] flex items-center justify-center">
                <Image
                  src={duar_gurutto}
                  alt={category?.cat_name_en}
                  className="h-full w-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-white">
                  {category?.cat_name_en}
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
            {expandedCategories?.includes(category.cat_id) &&
              subCategories
                ?.filter((sub: ISubCategory) => sub.cat_id === category.cat_id)
                .map((subCategory: ISubCategory) => (
                  <div key={subCategory.subcat_id} className="ml-4">
                    <div
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-[#1E2732] cursor-pointer"
                      onClick={() =>
                        toggleSubCategory(
                          category.cat_id,
                          category.cat_name_en,
                          subCategory.subcat_id
                        )
                      }
                    >
                      <ChevronRight
                        className={`h-4 w-4 ${
                          expandedSubCategories.includes(subCategory.subcat_id)
                            ? "rotate-90 text-white"
                            : "text-muted-foreground"
                        }`}
                      />
                      <span className="text-sm text-muted-foreground hover:text-white">
                        {subCategory.subcat_name_en}
                      </span>
                    </div>

                    {/* Duas */}
                    {expandedSubCategories.includes(subCategory.subcat_id) &&
                      duas
                        ?.filter(
                          (dua: IDua) => dua.subcat_id === subCategory.subcat_id
                        )
                        .map((dua: IDua) => (
                          <Button
                            key={dua.dua_id}
                            variant="ghost"
                            className="w-full justify-start pl-8 text-xs text-muted-foreground hover:bg-[#1E2732] hover:text-white"
                            onClick={() =>
                              handleDuaClick(
                                category.cat_id,
                                subCategory.subcat_id,
                                dua.dua_id,
                                dua?.dua_name_en!
                              )
                            }
                          >
                            {dua?.dua_name_en}
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
