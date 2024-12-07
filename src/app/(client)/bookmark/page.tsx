import ComingSoon from "@/components/coming/comming";
import ResponsiveHeader from "@/components/global/responsive-header";
import React from "react";

 const BookmarkPage = () => {
  return (
    <div>
      <header className="sticky top-0 z-10 w-full items-center justify-between gap-4 bg-[#0E1319] py-4">
        {/* header */}
        <ResponsiveHeader name={"Bookmark Page"} />
      </header>
      <ComingSoon />
    </div>
  );
};

export default BookmarkPage;