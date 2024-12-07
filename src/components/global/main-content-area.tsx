import { DuaContent } from "../local/dua-content";
import { cn } from "@/lib/utils"; // Ensure the path is correct

interface MainContentAreaProps {
  cat?: string;
  subCat?: string;
  dua?: string;
  className?: string; // Allow passing additional class names
}

export const MainContentArea = ({
  className,
  ...props
}: MainContentAreaProps) => {
  return (
    <div className={cn("h-full flex-1 p-1 overflow-auto", className)}>
      <main>
        <DuaContent {...props} />
      </main>
    </div>
  );
};

export default MainContentArea;
