import React from 'react';
import { DuaContent } from '../local/dua-content';


export const MainContentArea = () => {

  return (
    <div>
      <main className="h-full flex-1 p-1 overflow-auto">
        <DuaContent />
      </main>
    </div>
  );
};

export default MainContentArea;