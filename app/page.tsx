// import NavigationPanel from "@/components/NavigationPanel";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import { sidebarMenus } from "@/config/sidebarConfig";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen relative">
      {/* Sidebar (collapsible) */}
      {isSidebarOpen && (
        <div className="w-58 transition-all duration-300">
          <Sidebar items={sidebarMenus.home} />
        </div>
      )}

      {/* Toggle button → placed relative to sidebar */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`absolute top-5 z-50 bg-gray-200 border-gray-100 rounded-full p-1 shadow-md hover:bg-gray-100 transition-all duration-300
          ${isSidebarOpen ? "left-52 -ml-3" : "left-2 -ml-2"}`}
      >
        {isSidebarOpen ? <ArrowLeftToLine className='text-foreground'  size={18}  /> : <ArrowRightToLine className='text-foreground'  size={18} />}
      </button>

      {/* Right side: Topbar + content */}
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="flex-1 p-4 bg-main">
          <h1 className="text-xl font-semibold">Main Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;

