/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Home, LayoutGrid, Lightbulb, Bookmark, Book } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MobileNav({ className }: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 border-t border-[#2F3B4B] bg-[#0E1319] p-2",
        className
      )}
    >
      <nav className="flex items-center justify-around">
        <NavItem href="/" icon={Home} isActive />
        <NavItem href="/duas" icon={LayoutGrid} />
        <NavItem href="/memorize" icon={Lightbulb} />
        <NavItem href="/bookmark" icon={Bookmark} />
        <NavItem href="/ruqyah" icon={Book} />
      </nav>
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
        size="icon"
        className={cn("text-muted-foreground", isActive && "text-[#1FA45B]")}
      >
        <Icon className="h-5 w-5" />
      </Button>
    </Link>
  );
}
