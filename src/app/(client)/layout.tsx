import * as React from 'react';
import { MobileNav } from "@/components/local/mobile-nav";
import { Sidebar } from "@/components/local/sidebar";
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
          <div className="mt-6">{children}</div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <MobileNav className="lg:hidden" />
    </div>
  );
}
