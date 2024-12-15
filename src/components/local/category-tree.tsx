
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";
// import { ICategory } from "@/types";
import duar_gurutto from "@/assets/duar_gurutto.svg"
import { getBaseUrl } from "@/helper/config/env-config";
import { ICategory } from "@/types";

interface CategoryTreeProps {
  // categories: ICategory[];
  className: string;
}

export default function DuaCategoryTree({ className }: CategoryTreeProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  console.log(`see loading`, loading);
    
  useEffect(() => {
      const fetchCategories = async () => {
        try {
          const baseUrl = getBaseUrl();
          const response = await fetch(`${baseUrl}/categories?page=1&limit=20`);
          if (!response.ok) throw new Error("Failed to fetch categories.");
          const data = await response.json();
          setCategories(data.data);
        } catch (error) {
          console.error("Error loading categories:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchCategories();
    }, []);

  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedSubCategory, setExpandedSubCategory] = useState<number | null>(
    null
  );

  const handleToggleCategory = (catId: number) => {
    setExpandedCategory((prev) => (prev === catId ? null : catId));
    setExpandedSubCategory(null); // Collapse subcategories when changing category
  };

  const handleToggleSubCategory = (subCatId: number) => {
    setExpandedSubCategory((prev) => (prev === subCatId ? null : subCatId));
  };

  return (
    <>
      <div
        className={cn(
          "w-full flex flex-col h-full border-r border-[#2F3B4B] bg-[#0E1319]",
          className
        )}
      >
        <ScrollArea className="flex-1">
          {categories?.map((category) => (
            <div key={category.cat_id} className="space-y-1">
              {/* Category Item */}
              <Link
                href={`/duas/${encodeURIComponent(
                  category.cat_name_en.toLowerCase().replace(/\s+/g, "-")
                )}?cat=${category.cat_id}`}
                onClick={() => handleToggleCategory(category.cat_id)}
              >
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#1E2732] cursor-pointer">
                  <div className="h-8 w-8 rounded-md bg-[#1E2732] flex items-center justify-center">
                    <Image
                      src={duar_gurutto}
                      alt={category.cat_name_en || "Category"}
                      className="h-full w-full"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-white">
                      {category.cat_name_en || "Unnamed Category"}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Subcategory: {category.no_of_subcat || 0}
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
                category.subCategories?.map((subCategory) => (
                  <div key={subCategory.subcat_id} className="ml-4">
                    <Link
                      href={`/duas/${encodeURIComponent(
                        category.cat_name_en.toLowerCase().replace(/\s+/g, "-")
                      )}?cat=${category.cat_id}&subcat=${
                        subCategory.subcat_id
                      }`}
                      onClick={() =>
                        handleToggleSubCategory(subCategory.subcat_id)
                      }
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
                          {subCategory.subcat_name_en || "Unnamed Subcategory"}
                        </span>
                      </div>
                    </Link>

                    {/* Duas */}
                    {expandedSubCategory === subCategory.subcat_id &&
                      category.duas
                        ?.filter(
                          (dua) => dua.subcat_id === subCategory.subcat_id
                        )
                        .map((dua) => (
                          <Link
                            key={dua.dua_id}
                            href={`/duas/${encodeURIComponent(
                              category?.cat_name_en
                                ?.toLowerCase()
                                .replace(/\s+/g, "-") || "unnamed-dua"
                            )}?cat=${category.cat_id}&subcat=${
                              subCategory.subcat_id
                            }&dua=${dua.dua_id}`}
                          >
                            <Button
                              variant="ghost"
                              className="w-full justify-start pl-8 text-xs text-muted-foreground hover:bg-[#1E2732] hover:text-white"
                            >
                              {dua.dua_name_en || "Unnamed Dua"}
                            </Button>
                          </Link>
                        ))}
                  </div>
                ))}
            </div>
          ))}
        </ScrollArea>
      </div>
    </>
  );
}
