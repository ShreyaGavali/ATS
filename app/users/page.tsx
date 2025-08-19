// import Topbar from "@/components/Topbar";
// import UserSidebar from "@/components/UserSidebar";

// const Page = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar (fixed width) */}
//       <div className="w-54">
//         <UserSidebar />
//       </div>

//       {/* Right side: Topbar + content */}
//       <div className="flex flex-col flex-1">
//         {/* Topbar full width of remaining space */}
//         <Topbar />

//         {/* Page Content */}
//         <div className="flex-1">
//           <h1 className="text-xl font-semibold">Main Content</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

// 

"use client";

import { useState } from "react";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import Topbar from "@/components/Topbar";
import UserSidebar from "@/components/UserSidebar";

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
        className={`absolute top-5 z-50 bg-background border rounded-full p-1 shadow-md hover:bg-gray-100 transition-all duration-300
          ${isSidebarOpen ? "left-52 -ml-3" : "left-2 -ml-2"}`}
      >
        {isSidebarOpen ? <ArrowLeftToLine className='text-foreground'  size={18}  /> : <ArrowRightToLine className='text-foreground'  size={18} />}
      </button>

      {/* Right side: Topbar + content */}
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="flex-1 p-4">
          <h1 className="text-xl font-semibold">Main Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
