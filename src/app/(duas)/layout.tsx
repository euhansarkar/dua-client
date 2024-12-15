import ResponsiveHeaderDua from '@/components/global/responsive-header-dua';
import { CategorySidebar } from '@/components/local/category-sidebar';
import { DuaSidebar } from '@/components/local/dua-sidebar';
import { MobileNav } from '@/components/local/mobile-nav';
import * as React from 'react';

interface DuaLayoutProps {
  children: React.ReactNode | React.ReactElement;
}

const DuaLayout = ({ children }: DuaLayoutProps) => {
  return (
    <div>
      <div className="h-screen bg-[#0E1319]"> {/* Removed overflow-hidden */}
        <div className="flex h-full">
          {/* Sidebar */}
          <DuaSidebar className="hidden lg:flex" />

          {/* Main Content Area */}
          <div className="flex flex-1 flex-col">
            {/* Responsive Header */}
            <ResponsiveHeaderDua name="Duas Page" />

            <div className="flex h-full pt-16"> {/* Added pt-16 */}
              {/* Category Sidebar */}
              <CategorySidebar className="hidden lg:flex lg:w-1/4 " />

              {/* Main Content */}
              {children}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav className="lg:hidden" />
      </div>
    </div>
  );
};

export default DuaLayout;
