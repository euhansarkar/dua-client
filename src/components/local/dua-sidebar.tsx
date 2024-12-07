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
import logo from "@/assets/dua-logo.svg";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DuaSidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        "w-32 flex flex-col h-screen border-r border-[#2F3B4B] bg-[#0E1319]",
        className
      )}
    >
      {/* Logo */}
      <div className="flex justify-center items-center gap-2 p-4">
        <Link href={`/`}>
          <Image
            src={logo}
            alt="Dua Logo"
            width={50}
            height={50}
            className="rounded-xl"
          />
        </Link>
      </div>

      {/* Scrollable Navigation */}
      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-4">
          <NavItem href="/" icon={Home} isActive />
          <NavItem href="/duas" icon={LayoutGrid} />
          <NavItem href="/memorize" icon={Lightbulb} />
          <NavItem href="/bookmark" icon={Bookmark} />
          <NavItem href="/ruqyah" icon={Book} />
          <NavItem href="/dua-info" icon={MessageCircle} />
          <NavItem href="/books" icon={BookOpen} />
          <NavItem href="/" icon={Home}  />
          <NavItem href="/duas" icon={LayoutGrid} />
          <NavItem href="/memorize" icon={Lightbulb} />
          <NavItem href="/bookmark" icon={Bookmark} />
          <NavItem href="/ruqyah" icon={Book} />
          <NavItem href="/dua-info" icon={MessageCircle} />
          <NavItem href="/books" icon={BookOpen} />
          <NavItem href="/" icon={Home}  />
          <NavItem href="/duas" icon={LayoutGrid} />
          <NavItem href="/memorize" icon={Lightbulb} />
          <NavItem href="/bookmark" icon={Bookmark} />
          <NavItem href="/ruqyah" icon={Book} />
          <NavItem href="/dua-info" icon={MessageCircle} />
          <NavItem href="/books" icon={BookOpen} />
          <NavItem href="/" icon={Home}  />
          <NavItem href="/duas" icon={LayoutGrid} />
          <NavItem href="/memorize" icon={Lightbulb} />
          <NavItem href="/bookmark" icon={Bookmark} />
          <NavItem href="/ruqyah" icon={Book} />
          <NavItem href="/dua-info" icon={MessageCircle} />
          <NavItem href="/books" icon={BookOpen} />
        </nav>
      </ScrollArea>
    </div>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  isActive?: boolean;
}

function NavItem({ href, icon: Icon, isActive }: NavItemProps) {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-center text-muted-foreground",
          isActive &&
            "bg-[#1FA45B] text-white hover:bg-[#1FA45B] hover:text-white"
        )}
      >
        <Icon className="h-32 w-32" size={40} />
      </Button>
    </Link>
  );
}
