// "use client";
// import {
//   AlignEndHorizontal,
//   AlignHorizontalDistributeCenter,
//   BookOpenText,
//   ClipboardMinus,
//   ClipboardPenLine,
//   User,
//   UserCog
// } from "lucide-react"

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";

// const UserSidebar = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(true);
//   const [isCandidatesOpen, setIsCandidatesOpen] = useState<boolean>(true); // open by default
//   const pathname = usePathname();

//   const linkClasses = (path: string) =>
//     `flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors
//      ${pathname === path
//       ? "text-purple-600 font-semibold border-2 border-purple-500 rounded-2xl"
//       : "text-gray-700"}`;

//   return (
//     <div
//       className={`border-r border-gray-300 bg-panel text-foreground h-screen p-4 transition-transform duration-300 ${isOpen ? "translate-x-0 w-56" : "-translate-x-full w-56"
//         }`}
//     >
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <p className="font-bold text-foreground text-lg">ATS</p>
//       </div>

//       {/* Sidebar Items */}
//       <div className="flex flex-col space-y-1 text-foreground">
//         <Link href="/users/overview" className={linkClasses("/users/overview")}>
//           <ClipboardMinus size={18} className='text-foreground' />
//           <p className='text-foreground'>Overview</p>
//         </Link>

//         <Link href="/users/jobposting" className={linkClasses("/users/jobposting")}>
//           <ClipboardPenLine size={18} className='text-foreground' />
//           <p className='text-foreground' >Job Posting</p>
//         </Link>

//         <Link href="/users/assessment" className={linkClasses("/users/assessment")}>
//           <BookOpenText size={18} className='text-foreground' />
//           <p className='text-foreground' >Assessment</p>
//         </Link>

//         <Link href="/users/interviewplan" className={linkClasses("/users/interviewplan")}>
//           <User size={18} className='text-foreground' />
//           <p className='text-foreground' >Interview Plan</p>
//         </Link>

//         <Link href="/users/recruiter" className={linkClasses("/users/recruiter")}>
//           <UserCog size={18} className='text-foreground' />
//           <p className='text-foreground' >Recruiter</p>
//         </Link>

//         {/* ---- Candidates with Tree ---- */}
//         <div
//           className={`px-3 py-2 cursor-pointer flex items-center gap-2 border-2 rounded-2xl transition-colors 
//           ${pathname.startsWith("/users/candidates")
//               ? "text-purple-600 font-semibold border-purple-500"
//               : "text-gray-700 border-transparent"}`}
//           onClick={() => setIsCandidatesOpen(!isCandidatesOpen)}
//         >
//           <AlignHorizontalDistributeCenter size={18} className='text-foreground' />
//           <p className='text-foreground' >Candidates</p>
//         </div>
//         {isCandidatesOpen && (
//           <div className="ml-6 mt-1 flex flex-col relative">

//             <div className="absolute top-0 left-0 h-[calc(100%-1rem)] border-l-2 border-purple-600"></div>


//             <Link
//               href="/users/candidates/leads"
//               className={`relative pl-4 text-sm
//         before:content-[''] before:absolute before:left-0 before:top-1/2 
//         before:w-4 before:border-t-2 before:border-purple-600
//         ${pathname === "/users/candidates/leads"
//                   ? "text-purple-600 font-semibold"
//                   : "text-foreground hover:text-purple-600"}`}
//             >
//               Leads
//             </Link>
//             <Link
//               href="/users/candidates/interviewing"
//               className={`relative pl-4 text-sm
//     before:content-[''] before:absolute before:left-0 before:top-0 
//     before:h-1/2 before:border-l-2 before:border-purple-600
//     after:content-[''] after:absolute after:left-0 after:top-1/2 
//     after:w-4 after:border-t-2 after:border-purple-600 after:rounded-bl-2xl
//     ${pathname === "/users/candidates/interviewing"
//                   ? "text-purple-600 font-semibold"
//                   : "text-foreground hover:text-purple-600"}`}
//             >
//               Interviewing
//             </Link>
//           </div>
//         )}

//         <Link href="/users/reporting" className={linkClasses("/users/reporting")}>
//           <AlignEndHorizontal size={18} className='text-foreground' />
//           <p className='text-foreground' >Reporting</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default UserSidebar;


// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { sidebarMenus } from "@/config/sidebarConfig";

// const UserSidebar = () => {
//   const [openMenus, setOpenMenus] = useState<string[]>([]);
//   const pathname = usePathname();
//   const items = sidebarMenus.users;

//   const toggleMenu = (label: string) => {
//     setOpenMenus((prev) =>
//       prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
//     );
//   };

//   const linkClasses = (path: string) =>
//     `flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors
//      ${pathname === path
//       ? "text-purple-600 font-semibold border-2 border-purple-500 rounded-2xl"
//       : "text-gray-700"}`;

//   return (
//     <div className="border-r border-gray-300 bg-panel text-foreground h-screen p-4 w-56">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <p className="font-bold text-foreground text-lg">ATS</p>
//       </div>

//       {/* Sidebar Items */}
//       <div className="flex flex-col space-y-1 text-foreground">
//         {items.map((item) => {
//           const isActive = item.href && pathname === item.href;
//           const isOpen = item.children && openMenus.includes(item.label);

//           return (
//             <div key={item.label}>
//               {item.href ? (
//                 <Link href={item.href} className={linkClasses(item.href)}>
//                   {item.icon && <item.icon size={18} />}
//                   <p className="text-foreground">{item.label}</p>
//                 </Link>
//               ) : (
//                 <div
//                   className={`px-3 py-2 flex items-center gap-2 cursor-pointer border-2 rounded-2xl ${
//                     pathname.startsWith("/users/candidates")
//                       ? "text-purple-600 font-semibold border-purple-500"
//                       : "text-gray-700 border-transparent"
//                   }`}
//                   onClick={() => toggleMenu(item.label)}
//                 >
//                   {item.icon && <item.icon size={18} />}
//                   <p className="text-foreground">{item.label}</p>
//                 </div>
//               )}

//               {/* Children (dropdown) */}
//               {item.children && isOpen && (
//                 <div className="ml-6 mt-1 flex flex-col relative">
//                   <div className="absolute top-0 left-0 h-[calc(100%-1rem)] border-l-2 border-purple-600"></div>
//                   {item.children.map((child) => (
//                     <Link
//                       key={child.label}
//                       href={child.href}
//                       className={`relative pl-4 text-sm
//                         ${pathname === child.href
//                           ? "text-purple-600 font-semibold"
//                           : "text-foreground hover:text-purple-600"}`}
//                     >
//                       {child.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default UserSidebar;

// Sidebar.tsx
// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// interface SidebarProps {
//   items: {
//     label: string;
//     href?: string;
//     icon?: any;
//     children?: { label: string; href: string }[];
//   }[];
// }

// const Sidebar = ({ items }: SidebarProps) => {
//   const [openMenus, setOpenMenus] = useState<string[]>([]);
//   const pathname = usePathname();

//   const toggleMenu = (label: string) => {
//     setOpenMenus((prev) =>
//       prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
//     );
//   };

//   const linkClasses = (path: string) =>
//     `flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors
//      ${pathname === path
//       ? "text-purple-600 font-semibold border-2 border-purple-500 rounded-2xl"
//       : "text-gray-700"}`;

//   return (
//     <div className="border-r border-gray-300 bg-panel text-foreground h-screen w-56 p-4">
//       <div className="flex justify-between items-center mb-6">
//         <p className="font-bold text-foreground text-lg">ATS</p>
//       </div>

//       <div className="flex flex-col space-y-1 text-foreground">
//         {items.map((item) => {
//           const isActive = item.href && pathname === item.href;
//           const isOpen = item.children && openMenus.includes(item.label);

//           return (
//             <div key={item.label}>
//               {item.href ? (
//                 <Link href={item.href} className={linkClasses(item.href)}>
//                   {item.icon && <item.icon size={18} />}
//                   {item.label}
//                 </Link>
//               ) : (
//                 <div
//                   className={`px-3 py-2 flex items-center gap-2 cursor-pointer border-2 rounded-2xl ${
//                     pathname.startsWith("/users/candidates")
//                       ? "text-purple-600 font-semibold border-purple-500"
//                       : "text-gray-700 border-transparent"
//                   }`}
//                   onClick={() => toggleMenu(item.label)}
//                 >
//                   {item.icon && <item.icon size={18} />}
//                   {item.label}
//                 </div>
//               )}

//               {item.children && isOpen && (
//                 <div className="ml-6 mt-1 flex flex-col relative">
//                   <div className="absolute top-0 left-0 h-[calc(100%-1rem)] border-l-2 border-purple-600"></div>
//                   {item.children.map((child) => (
//                     <Link
//                       key={child.label}
//                       href={child.href}
//                       className={`relative pl-4 text-sm
//                         ${pathname === child.href
//                           ? "text-purple-600 font-semibold"
//                           : "text-foreground hover:text-purple-600"}`}
//                     >
//                       {child.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarProps {
  items: {
    label: string;
    href?: string;
    icon?: any;
    children?: { label: string; href: string }[];
  }[];
}

const Sidebar = ({ items }: SidebarProps) => {
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const linkClasses = (path: string) =>
    `flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors
     ${pathname === path
      ? "text-purple-600 font-semibold border-2 border-purple-500 rounded-2xl"
      : "text-gray-700 hover:text-purple-600"}`;

  return (
    <div className="border-r border-gray-300 bg-panel text-foreground h-screen w-56 p-4">
      <div className="flex justify-between items-center mb-6">
        <p className="font-bold text-foreground text-lg">ATS</p>
      </div>

      <div className="flex flex-col space-y-1 text-foreground">
        {items.map((item) => {
          const isActive = item.href && pathname === item.href;
          const isOpen = item.children && openMenus.includes(item.label);

          return (
            <div key={item.label} className="relative">
              {/* Parent menu */}
              {item.href ? (
                <Link href={item.href} className={linkClasses(item.href)}>
                  {item.icon && <item.icon size={18} />}
                  {item.label}
                </Link>
              ) : (
                <div
                  className={`flex items-center gap-2 px-3 py-2 cursor-pointer rounded-2xl border-2 transition-all
                    ${isOpen || pathname.startsWith("/users/candidates")
                      ? "text-purple-600 font-semibold border-purple-500"
                      : "text-gray-700 border-transparent hover:border-purple-300 hover:text-purple-600"
                    }`}
                  onClick={() => toggleMenu(item.label)}
                >
                  {item.icon && <item.icon size={18} />}
                  {item.label}
                </div>
              )}

              {/* Child dropdown */}
              {item.children && isOpen && (
                <div className="ml-4 mt-1 flex flex-col relative">
                  {/* Vertical line */}
                  <div className="absolute top-2 left-2 h-[calc(100%-0.5rem)] border-l-2 border-purple-600"></div>

                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={`relative pl-6 py-1 text-sm transition-colors
                        ${pathname === child.href
                          ? "text-purple-600 font-semibold"
                          : "text-gray-400 hover:text-purple-600"}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
