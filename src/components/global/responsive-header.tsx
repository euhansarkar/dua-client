import { Search, Settings2, User, Menu } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CategorySidebar } from "../local/category-sidebar";
import { categories } from "@/data/categories-data";

const ResponsiveHeader = () => {
  return (
    <div>
      {/* Desktop Header */}
      <header className="sticky top-0 z-10 hidden items-center justify-between gap-4 border-b border-[#2F3B4B] bg-[#0E1319] p-4 lg:flex">
        <h1 className="text-xl font-semibold text-white">Duas Page</h1>
        <div className="flex items-center gap-4">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by Dua Name"
              className="w-[300px] pl-9 bg-[#1E2732] border-0 text-white placeholder:text-muted-foreground"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-white">
            <Settings2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>
      ;{/* Mobile Header */}
      <header className="flex items-center justify-between gap-4 border-b border-[#2F3B4B] p-4 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0 bg-[#0E1319]">
            <CategorySidebar data={categories} />
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg"
            alt="Dua Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <h1 className="text-xl font-semibold text-white">Dua & Ruqyah</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white">
            <Settings2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>
    </div>
  );
};

export default ResponsiveHeader;
