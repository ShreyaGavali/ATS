"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Topbar from "@/components/Topbar";
import UserSidebar from "@/components/Sidebar";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen relative">
      {/* Sidebar (collapsible) */}
      {isSidebarOpen && (
        <div className="w-58 transition-all duration-300">
          <UserSidebar />
        </div>
      )}

      {/* Toggle button → placed relative to sidebar */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`absolute top-5 z-50 bg-white border rounded-full p-1 shadow-md hover:bg-gray-100 transition-all duration-300
          ${isSidebarOpen ? "left-52 -ml-3" : "left-2 -ml-2"}`}
      >
        {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      {/* Right side: Topbar + content */}
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="flex-1 p-4">
          <h1 className="text-xl font-semibold">Job Posting</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
