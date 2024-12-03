import { Search, Settings2, User } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Sidebar } from '@/components/local/sidebar'
import { FeatureCard } from '@/components/local/feature-card'
import { CategoryCard } from '@/components/local/category-card'
import { MobileNav } from '@/components/local/mobile-nav'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E1319]">
      {/* Desktop Layout */}
      <div className="flex">
        <Sidebar className="hidden lg:flex" />
        
        <main className="flex-1 px-4 pb-16 lg:px-8">
          <header className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-[#0E1319] py-4">
            <div className="flex lg:hidden items-center gap-2">
              <Image
                src="/placeholder.svg"
                alt="Dua Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <h1 className="text-xl font-semibold text-white">Dua & Ruqyah</h1>
            </div>
            
            <div className="relative flex-1 max-w-xl mx-auto lg:mx-0">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by Dua Name"
                className="pl-9 bg-[#1E2732] border-0 text-white placeholder:text-muted-foreground"
              />
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

          <div className="mt-6">
            <Card className="relative overflow-hidden bg-[#1E2732] text-white p-8">
              <div className="relative z-10 text-center">
                <p className="text-lg lg:text-xl">
                  O Allah! our Lord, unto Thee be praise that would fill the heavens and the earth and fill that which will
                  please Thee be...
                </p>
                <p className="mt-4 text-muted-foreground">[Muslim: 476]</p>
              </div>
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "url('/placeholder.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
            </Card>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                title="Last Read"
                icon="/placeholder.svg"
                href="#"
                className="bg-[#1E2732]"
              />
              <FeatureCard
                title="Blog"
                icon="/placeholder.svg"
                href="#"
                className="bg-[#1E2732]"
              />
              <FeatureCard
                title="Ruqyah"
                icon="/placeholder.svg"
                href="#"
                className="bg-[#1E2732]"
              />
              <FeatureCard
                title="Dua Info"
                icon="/placeholder.svg"
                href="#"
                className="bg-[#1E2732]"
              />
              <FeatureCard
                title="Books"
                icon="/placeholder.svg"
                href="#"
                className="bg-[#1E2732]"
              />
              <FeatureCard
                title="Dua Audio"
                icon="/placeholder.svg"
                href="#"
                className="bg-[#1E2732]"
              />
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Categories Of Dua</h2>
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
                  icon="/placeholder.svg"
                />
                <CategoryCard
                  title="Dua's Excellence"
                  subtitle="Subcategory: 1"
                  count="15"
                  countLabel="Duas"
                  icon="/placeholder.svg"
                />
                <CategoryCard
                  title="Time of Dua"
                  subtitle="Subcategory: 1"
                  count="30"
                  countLabel="Duas"
                  icon="/placeholder.svg"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <MobileNav className="lg:hidden" />
    </div>
  )
}

