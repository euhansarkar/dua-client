/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
  Home,
  LayoutGrid,
  Lightbulb,
  Bookmark,
  Book,
  MessageCircle,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        "w-64 flex flex-col border-r border-[#2F3B4B] bg-[#0E1319]",
        className
      )}
    >
      <div className="flex items-center gap-2 p-4">
        <Image
          src="/placeholder.svg"
          alt="Dua Logo"
          width={40}
          height={40}
          className="rounded-xl"
        />
        <h1 className="text-xl font-semibold text-white">HomePage</h1>
      </div>

      <ScrollArea className="min-fit rounded-md border">
        <nav className="p-4">
          <NavItem href="/" icon={Home} isActive>
            Home
          </NavItem>
          <NavItem href="/duas" icon={LayoutGrid}>
            All Duas
          </NavItem>
          <NavItem href="/memorize" icon={Lightbulb}>
            Memorize
          </NavItem>
          <NavItem href="/bookmark" icon={Bookmark}>
            Bookmark
          </NavItem>
          <NavItem href="/ruqyah" icon={Book}>
            Ruqyah
          </NavItem>
          <NavItem href="/dua-info" icon={MessageCircle}>
            Dua Info
          </NavItem>
          <NavItem href="/books" icon={BookOpen}>
            Books
          </NavItem>
          <NavItem href="/duas" icon={LayoutGrid}>
            All Duas
          </NavItem>
          <NavItem href="/memorize" icon={Lightbulb}>
            Memorize
          </NavItem>
          <NavItem href="/bookmark" icon={Bookmark}>
            Bookmark
          </NavItem>
          <NavItem href="/ruqyah" icon={Book}>
            Ruqyah
          </NavItem>
          <NavItem href="/dua-info" icon={MessageCircle}>
            Dua Info
          </NavItem>
          <NavItem href="/books" icon={BookOpen}>
            Books
          </NavItem>
        </nav>
      </ScrollArea>
    </div>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
  isActive?: boolean;
}

function NavItem({ href, icon: Icon, children, isActive }: NavItemProps) {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 text-muted-foreground",
          isActive &&
            "bg-[#1FA45B] text-white hover:bg-[#1FA45B] hover:text-white"
        )}
      >
        <Icon className="h-5 w-5" />
        {children}
      </Button>
    </Link>
  );
}
