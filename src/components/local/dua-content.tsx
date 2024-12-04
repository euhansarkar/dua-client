import { Copy, Bookmark, HelpCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import duacard from "@/assets/duacard.svg"

interface DuaContentProps {
  section: string;
  title: string;
  content: string;
  reference: string;
}

export function DuaContent({
  section,
  title,
  content,
  reference,
}: DuaContentProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-[#1E2732] p-4">
        <p className="text-white">
          <span className="text-[#1FA45B]">Section: </span>
          {section}
        </p>
      </div>

      <div className="rounded-lg bg-[#1E2732] p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="h-10 w-10 rounded-lg bg-[#0E1319] p-2">
            <Image src={duacard} alt="" className="h-full w-full" />
          </div>
          <h2 className="text-lg font-medium text-[#1FA45B]">{title}</h2>
        </div>

        <p className="mb-6 text-lg text-white">{content}</p>

        <div className="mb-6 space-y-1">
          <p className="text-[#1FA45B]">Reference:</p>
          <p className="text-white">{reference}</p>
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
    </div>
  );
}
