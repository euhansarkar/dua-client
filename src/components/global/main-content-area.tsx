import React from 'react';
import { DuaContent } from '../local/dua-content';

export const MainContentArea = () => {
    return (
      <div>
        <main className="flex-1 overflow-y-auto p-4">
          <DuaContent
            section="The servant is dependent on his Lord"
            title="1. The servant is dependent on his Lord #1"
            content="All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy."
            reference="Surah Al-Fatir 35:15"
          />
        </main>
      </div>
    );
};

export default MainContentArea;