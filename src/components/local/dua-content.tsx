/* eslint-disable @typescript-eslint/ban-ts-comment */
import duacard from "@/assets/duacard.svg";
import { Button } from "@/components/ui/button";
import { getBaseUrl } from "@/helper/config/env-config";
import { ICategory, IDua } from "@/types";
import { Bookmark, Copy, HelpCircle, Share2 } from "lucide-react";
import Image from "next/image";
import { DataNotFound } from "../not-found/not-found";
interface DuaContentProps {
  cat?: string;
  subCat?: string;
  dua?: string;
}


export const revalidate = 60;


export const dynamicParams = true; 

export async function generateStaticParams() {
  const url = `${getBaseUrl()}/categories?page=1&limit=100`;
  const categories: ICategory[] = await fetch(url).then((res) =>
    res.json()
  );
  // @ts-expect-error
  return categories?.data?.map((category) => ({
    id: String(category.id),
  }));
}

export async function DuaContent(props: DuaContentProps) {
  
  try {
    // Fetch categories
    const url = `${getBaseUrl()}/categories/${props?.cat}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    // Parse JSON data
    const category = await response.json(); // This gives you the actual data

    return (
      <div className="space-y-4 w-full h-full">
        {/* <div className="rounded-lg bg-[#1E2732] p-4">
        <p className="text-white">
          <span className="text-[#1FA45B]">Section: </span>
          {section}
        </p>
      </div> */}
        {/* <ScrollArea className="flex-1"> */}
        {category?.data?.duas?.map((dua: IDua) => (
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
    return <DataNotFound message="An error occurred while loading the data." />;
  }
}
