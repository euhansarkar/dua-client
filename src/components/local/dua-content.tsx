"use client";
import duacard from "@/assets/duacard.svg";
import { Button } from "@/components/ui/button";
import { getBaseUrl } from "@/helper/config/env-config";
import { IDua } from "@/types";
import { Bookmark, Copy, HelpCircle, Share2 } from "lucide-react";
import Image from "next/image";

interface DuaContentProps {
  cat?: string;
  subCat?: string;
  dua?: string;
}

export async function DuaContent({ cat, subCat, dua }: DuaContentProps) {
  // const {
  //   data: duasData,
  //   // isLoading: duasLoading
  // } = useDuasQuery({ page: 1, limit: 100 });

  // const duas = duasData?.duas;

  console.log(`from ccontext`, cat, subCat, dua);

  try {
    // Fetch categories
    const response = await fetch(`${getBaseUrl()}/duas?page=1&limit=100`);

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    // Parse JSON data
    const data = await response.json(); // This gives you the actual data
    const duas = data?.data;

    return (
      <div className="space-y-4">
        {/* <div className="rounded-lg bg-[#1E2732] p-4">
        <p className="text-white">
          <span className="text-[#1FA45B]">Section: </span>
          {section}
        </p>
      </div> */}
        {/* <ScrollArea className="flex-1"> */}
        {duas?.map((dua: IDua) => (
          <div key={dua?.id} className="rounded-lg bg-[#1E2732] p-6 m-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-[#0E1319] p-2">
                <Image src={duacard} alt="" className="h-full w-full" />
              </div>
              <h2 className="text-lg font-medium text-[#1FA45B]">
                {dua?.dua_name_en}
              </h2>
            </div>

            <p className="mb-6 text-lg text-white">{dua?.top_en}</p>
            <p className="mb-6 text-lg text-white">{dua?.dua_arabic}</p>
            <p className="mb-6 text-lg text-white">{dua?.transliteration_en}</p>
            <p className="mb-6 text-lg text-white">{dua?.translation_en}</p>

            <div className="mb-6 space-y-1">
              <p className="text-[#1FA45B]">Reference:</p>
              <p className="text-white">{dua?.refference_en}</p>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="ghost" size="icon" className="text-white">
                <Copy className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <HelpCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        ))}
        {/* </ScrollArea> */}
      </div>
    );
  } catch (error) {
    console.error("Error loading categories:", error);
    return <div>Error loading categories</div>;
  }
}
