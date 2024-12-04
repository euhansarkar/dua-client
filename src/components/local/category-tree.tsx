import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CategoryTreeProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    title: string;
    subcategory: number;
    items: (string | { title: string; items: string[] })[];
  }[];
}

export function CategoryTree({ data, className }: CategoryTreeProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {data.map((category) => (
        <div key={category.title} className="space-y-1">
          <div className="flex items-center gap-2 rounded-lg p-2 hover:bg-[#1E2732]">
            <div className="h-8 w-8 rounded-lg bg-[#1E2732] p-1">
              <Image src="/placeholder.svg" alt="" className="h-full w-full" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-white">{category.title}</h3>
              <p className="text-xs text-muted-foreground">
                Subcategory: {category.subcategory}
              </p>
            </div>
          </div>

          {category.items.map((item, index) => (
            <div key={index} className="ml-4">
              {typeof item === "string" ? (
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 text-sm text-muted-foreground hover:bg-[#1E2732] hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                  {item}
                </Button>
              ) : (
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2 text-sm text-muted-foreground hover:bg-[#1E2732] hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                    {item.title}
                  </Button>
                  {item.items.map((subItem, subIndex) => (
                    <Button
                      key={subIndex}
                      variant="ghost"
                      className="w-full justify-start pl-8 text-xs text-muted-foreground hover:bg-[#1E2732] hover:text-white"
                    >
                      {subItem}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
