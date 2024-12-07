import * as React from 'react';
import { Card } from "@/components/ui/card";
import { CategoryCard } from "@/components/local/category-card";
import { FeatureCard } from "@/components/local/feature-card";
import dua_kobuler_somoy from "@/assets/dua_kobuler_somoy.svg";
import book from "@/assets/book.svg";
import { Button } from '@/components/ui/button';
import ResponsiveHeader from '@/components/global/responsive-header';

const HomePage = () => {
    return (
      <div>
        <header className="sticky top-0 z-10 w-full items-center justify-between gap-4 bg-[#0E1319] py-4">
          {/* header */}
          <ResponsiveHeader name={"Home Page"} />
        </header>

        <Card className="relative overflow-hidden bg-[#1E2732] text-white p-8">
          <div className="relative z-10 text-center">
            <p className="text-lg lg:text-xl">
              O Allah! our Lord, unto Thee be praise that would fill the heavens
              and the earth and fill that which will please Thee be...
            </p>
            <p className="mt-4 text-muted-foreground">[Muslim: 476]</p>
          </div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/placeholder.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Card>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Last Read"
            icon={book}
            href="#"
            className="bg-[#1E2732]"
          />
          <FeatureCard
            title="Blog"
            icon={book}
            href="#"
            className="bg-[#1E2732]"
          />
          <FeatureCard
            title="Ruqyah"
            icon={book}
            href="#"
            className="bg-[#1E2732]"
          />
          <FeatureCard
            title="Dua Info"
            icon={book}
            href="#"
            className="bg-[#1E2732]"
          />
          <FeatureCard
            title="Books"
            icon={book}
            href="#"
            className="bg-[#1E2732]"
          />
          <FeatureCard
            title="Dua Audio"
            icon={book}
            href="#"
            className="bg-[#1E2732]"
          />
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              Categories Of Dua
            </h2>
            <Button variant="link" className="text-sm text-muted-foreground">
              More Categories
            </Button>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <CategoryCard
              title="Dua's Importance"
              subtitle="Subcategory: 7"
              count="21"
              countLabel="Duas"
              icon={dua_kobuler_somoy}
            />
            <CategoryCard
              title="Dua's Excellence"
              subtitle="Subcategory: 1"
              count="15"
              countLabel="Duas"
              icon={dua_kobuler_somoy}
            />
            <CategoryCard
              title="Time of Dua"
              subtitle="Subcategory: 1"
              count="30"
              countLabel="Duas"
              icon={dua_kobuler_somoy}
            />
            <CategoryCard
              title="Dua's Importance"
              subtitle="Subcategory: 7"
              count="21"
              countLabel="Duas"
              icon={dua_kobuler_somoy}
            />
            <CategoryCard
              title="Dua's Excellence"
              subtitle="Subcategory: 1"
              count="15"
              countLabel="Duas"
              icon={dua_kobuler_somoy}
            />
            <CategoryCard
              title="Time of Dua"
              subtitle="Subcategory: 1"
              count="30"
              countLabel="Duas"
              icon={dua_kobuler_somoy}
            />
            <CategoryCard
              title="Dua's Importance"
              subtitle="Subcategory: 7"
              count="21"
              countLabel="Duas"
              icon={dua_kobuler_somoy}
            />
            <CategoryCard
              title="Dua's Excellence"
              subtitle="Subcategory: 1"
              count="15"
              countLabel="Duas"
              icon={dua_kobuler_somoy}
            />
            <CategoryCard
              title="Time of Dua"
              subtitle="Subcategory: 1"
              count="30"
              countLabel="Duas"
              icon={dua_kobuler_somoy}
            />
            <CategoryCard
              title="Dua's Importance"
              subtitle="Subcategory: 7"
              count="21"
              countLabel="Duas"
              icon={dua_kobuler_somoy}
            />
            <CategoryCard
              title="Dua's Excellence"
              subtitle="Subcategory: 1"
              count="15"
              countLabel="Duas"
              icon={dua_kobuler_somoy}
            />
            <CategoryCard
              title="Time of Dua"
              subtitle="Subcategory: 1"
              count="30"
              countLabel="Duas"
              icon={dua_kobuler_somoy}
            />
          </div>
        </div>
      </div>
    );
};

export default HomePage;