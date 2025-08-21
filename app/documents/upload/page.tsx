"use client";

import { useState } from "react";
import { ArrowLeftToLine, ArrowRightToLine, ChevronLeft, ChevronRight } from "lucide-react";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import { sidebarMenus } from "@/config/sidebarConfig";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen relative">
      {/* Sidebar (collapsible) */}
      <div
        className={`transition-all duration-300
          ${isSidebarOpen ? "w-56" : "w-0"} overflow-hidden`}
      >
        <Sidebar items={sidebarMenus.document} />
      </div>

      {/* Toggle button → placed relative to sidebar */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`absolute top-5 z-50 bg-gray-150 border-2 border-gray-300 rounded-full p-1 shadow-md hover:bg-gray-100 transition-all duration-300
          ${isSidebarOpen ? "left-53 -ml-0" : "left-2 -ml-5"}`}
      >
        {isSidebarOpen ? <ArrowLeftToLine className='text-foreground'  size={18}  /> : <ArrowRightToLine className='text-foreground'  size={18} />}
      </button>

      {/* Right side: Topbar + content */}
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="flex-1 p-4 bg-main">
          <h1 className="text-xl font-semibold">Upload</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
