/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
// /* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import duar_gurutto from "@/assets/duar_gurutto.svg";
import { ScrollArea } from "../ui/scroll-area";
import { ICategory, IDua, ISubCategory } from "@/types";

interface CategoryTreeProps {
  className: string;
  categories: ICategory[];
  subCategories: ISubCategory[];
  duas: IDua[];
}

export function CategoryTree({
  className,
  categories,
  subCategories,
  duas,
}: CategoryTreeProps) {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedSubCategory, setExpandedSubCategory] = useState<number | null>(
    null
  );

  const toggleCategory = (catId: number) => {
    setExpandedCategory((prev) => (prev === catId ? null : catId));
  };

  const toggleSubCategory = (subCatId: number) => {
    setExpandedSubCategory((prev) => (prev === subCatId ? null : subCatId));
  };

  return (
    <div
      className={cn(
        "w-full flex flex-col h-full border-r border-[#2F3B4B] bg-[#0E1319]",
        className
      )}
    >
      <ScrollArea className="flex-1">
        {categories?.map((category: ICategory) => (
          <div key={category.cat_id} className="space-y-1">
            {/* Category Item */}
            <Link
              href={`/duas/${encodeURIComponent(
                category.cat_name_en.toLowerCase().replace(/\s+/g, "-")
              )}?cat=${category.cat_id}`}
              onClick={() => toggleCategory(category.cat_id)}
            >
              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#1E2732] cursor-pointer">
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
                {expandedCategory === category.cat_id ? (
                  <ChevronDown className="h-4 w-4 text-white" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-white" />
                )}
              </div>
            </Link>

            {/* Subcategories */}
            {expandedCategory === category.cat_id &&
              subCategories
                ?.filter((sub: ISubCategory) => sub.cat_id === category.cat_id)
                .map((subCategory: ISubCategory) => (
                  <div key={subCategory.subcat_id} className="ml-4">
                    <Link
                      href={`/duas/${encodeURIComponent(
                        category.cat_name_en.toLowerCase().replace(/\s+/g, "-")
                      )}?cat=${category.cat_id}&subcat=${
                        subCategory.subcat_id
                      }`}
                      onClick={() => toggleSubCategory(subCategory.subcat_id)}
                    >
                      <div className="flex items-center gap-2 p-2 rounded-md hover:bg-[#1E2732] cursor-pointer">
                        <ChevronRight
                          className={`h-4 w-4 ${
                            expandedSubCategory === subCategory.subcat_id
                              ? "rotate-90 text-white"
                              : "text-muted-foreground"
                          }`}
                        />
                        <span className="text-sm text-muted-foreground hover:text-white">
                          {subCategory.subcat_name_en}
                        </span>
                      </div>
                    </Link>

                    {/* Duas */}
                    {expandedSubCategory === subCategory.subcat_id &&
                      duas
                        ?.filter(
                          (dua: IDua) => dua.subcat_id === subCategory.subcat_id
                        )
                        .map((dua: IDua) => (
                          <Link
                            key={dua.dua_id}
                            href={`/duas/${encodeURIComponent(
                              dua?.dua_name_en!?.toLowerCase()?.replace(/\s+/g, "-")
                            )}?cat=${category.cat_id}&subcat=${
                              subCategory.subcat_id
                            }&dua=${dua.dua_id}`}
                          >
                            <Button
                              variant="ghost"
                              className="w-full justify-start pl-8 text-xs text-muted-foreground hover:bg-[#1E2732] hover:text-white"
                            >
                              {dua?.dua_name_en}
                            </Button>
                          </Link>
                        ))}
                  </div>
                ))}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}


