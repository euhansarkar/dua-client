import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CategoryTree } from "./category-tree";

interface CategorySidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    title: string;
    subcategory: number;
    items: (string | { title: string; items: string[] })[];
  }[];
}

export function CategorySidebar({ data, className }: CategorySidebarProps) {
  return (
    <div
      className={cn(
        "w-[300px] flex flex-col border-r border-[#2F3B4B] bg-[#0E1319]",
        className
      )}
    >
      <div className="p-4">
        <h1 className="mb-4 bg-[#1FA45B] p-2 text-center text-lg font-semibold text-white rounded-md">
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
        <CategoryTree data={data} className="px-4" />
      </div>
    </div>
  );
}