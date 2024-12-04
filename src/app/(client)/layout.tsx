import * as React from 'react';
import { Settings2, User } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/local/mobile-nav";
import { Sidebar } from "@/components/local/sidebar";
import book from "@/assets/book.svg";
import ResponsiveHeader from '@/components/global/responsive-header';

interface ClientLayout {
    children: React.ReactElement | React.ReactNode;
}

export default function Home({ children }: ClientLayout) {
  return (
    <div className="h-screen overflow-hidden bg-[#0E1319]">
      {/* Desktop Layout */}
      <div className="flex h-full">
        <Sidebar className="hidden lg:flex" />

        <main className="flex-1 overflow-y-auto px-4 pb-16 lg:px-8">
          <header className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-[#0E1319] py-4">
            <div className="flex lg:hidden items-center gap-2">
              <Image
                src={book}
                alt="Dua Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <h1 className="text-xl font-semibold text-white">Dua & Ruqyah</h1>
            </div>

            {/* header */}
            <ResponsiveHeader/>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white">
                <Settings2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </header>

          <div className="mt-6">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <MobileNav className="lg:hidden" />
    </div>
  );
}
