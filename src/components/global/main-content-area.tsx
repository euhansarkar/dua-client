import { DuaContent } from "../local/dua-content";


interface MainContentAreaProps {
  cat?: string;
  subCat?: string;
  dua?: string;
}

export const MainContentArea = (props: MainContentAreaProps) => {
  
  return (
    <div>
      <main className="h-full flex-1 p-1 overflow-auto">
        <DuaContent {...props} />
      </main>
    </div>
  );
};

export default MainContentArea;
