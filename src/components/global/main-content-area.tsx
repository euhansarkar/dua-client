import React from 'react';
import { DuaContent } from '../local/dua-content';
import { IDua } from '@/types';


interface IDuaContetProps {
  duas: IDua[];
}

export const MainContentArea = ({ duas }: IDuaContetProps) => {
  return (
    <div>
      <main className="h-full flex-1 p-1 overflow-auto">
        <DuaContent duas={duas} />
      </main>
    </div>
  );
};

export default MainContentArea;