// "use client";
// import { AlignEndHorizontal, AlignHorizontalDistributeCenter, ArrowLeftToLine, BookOpenText, ChevronDown, ChevronRight, ClipboardMinus, ClipboardPenLine, User, UserCog } from "lucide-react"
// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";

// const UserSidebar = () => {
//     const [isOpen, setIsOpen] = useState<boolean>(true);
//     const [isCandidatesOpen, setIsCandidatesOpen] = useState<boolean>(false);
//     const pathname = usePathname();
//     const linkClasses = (path: string) =>
//         `flex gap-2 m-2 ml-4 mb-4 items-center cursor-pointer 
//      ${pathname === path ? "text-purple-600 font-semibold border-2 border-purple-500 rounded-2xl " : "text-gray-700 border-2 border-transparent "}`;

//     const toggleSidebar = (): void => {
//         setIsOpen((prev) => !prev);
//     };
//     return (
//         <div className={`bg-gray-200 h-screen m-0 mt-0 p-4 transition-transform duration-300 ${isOpen ? "translate-x-0 w-52" : "-translate-x-full w-52"}`}>
//             <div className='flex justify-between items-center mb-6'>
//                 <p className="font-semibold text-gray-700">ATS</p>
//                 {/* <ArrowLeftToLine onClick={toggleSidebar} className="bg-white rounded-2xl p-1" /> */}
//             </div>
//             <div className="user-sidebar-item">
//                 <Link href='/overview' className={linkClasses("/overview")}>
//                     <div className="overview flex gap-2 m-2 ml-4 mb-2 h-5">
//                         <ClipboardMinus size={18} />
//                         <p>Overview</p>
//                     </div>
//                 </Link>
//                 <Link href='/jobposting' className={linkClasses("/jobposting")}>
//                     <div className="job-posting flex gap-2 m-2 ml-4 mb-2">
//                         <ClipboardPenLine size={18} />
//                         <p>Job Posting</p>
//                     </div>
//                 </Link>
//                 <Link href='/assessment' className={linkClasses("/assessment")}>
//                     <div className="assessment flex gap-2 m-2 ml-4 mb-2">
//                         <BookOpenText size={18} />
//                         <p>Assessment</p>
//                     </div>
//                 </Link>
//                 <Link href='/interviewplan' className={linkClasses("/interviewplan")}>
//                     <div className="interview-plan flex gap-2 m-2 ml-4 mb-2">
//                         <User size={18} />
//                         <p>Interview Plan</p>
//                     </div>
//                 </Link>
//                 <Link href='/recruiter' className={linkClasses("/recruiter")}>
//                     <div className="recruiter flex gap-2 m-2 ml-4 mb-2">
//                         <UserCog size={18} />
//                         <p>Recruiter</p>
//                     </div>
//                 </Link>
                
//                     {/* <div className="candidates flex gap-2 m-2 ml-4 mb-2">
//                     <AlignHorizontalDistributeCenter size={18} />
//                     <p>Candidates</p>
//                 </div> */}
//                     <div
//                         className={`flex justify-between items-center cursor-pointer ${linkClasses("/candidates")}`}
//                         onClick={() => setIsCandidatesOpen(!isCandidatesOpen)}
//                     >
//                         <div className=" gap-2">
//                             <div className="flex">
//                                 <AlignHorizontalDistributeCenter size={18} />
//                                 <p>Candidates</p>
//                             </div>
//                             {isCandidatesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//                             </div>
//                             {isCandidatesOpen && (
//                                 <div className="ml-10 mt-1">
//                                     <Link href="/candidates/leads" className={linkClasses("/candidates/leads")}>
//                                         <p>Leads</p>
//                                     </Link>
//                                     <Link href="/candidates/interviewing" className={linkClasses("/candidates/interviewing")}>
//                                         <p>Interviewing</p>
//                                     </Link>
//                                 </div>
//                             )}
//                         <Link href='/reporting' className={linkClasses("/reporting")}>
//                             <div className="reporting flex gap-2 m-2 ml-4 mb-2">
//                                 <AlignEndHorizontal size={18} />
//                                 <p>Reporting</p>
//                             </div>
//                         </Link>
//                     </div>
//             </div>
//             )
// }

//             export default UserSidebar

// "use client";
// import {
//   AlignEndHorizontal,
//   AlignHorizontalDistributeCenter,
//   BookOpenText,
//   ChevronDown,
//   ChevronRight,
//   ClipboardMinus,
//   ClipboardPenLine,
//   User,
//   UserCog,
// } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";

// const UserSidebar = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(true);
//   const [isCandidatesOpen, setIsCandidatesOpen] = useState<boolean>(false);
//   const pathname = usePathname();

//   const linkClasses = (path: string) =>
//     `flex gap-2 m-2 ml-4 mb-2 items-center cursor-pointer 
//      ${
//        pathname === path
//          ? "text-purple-600 font-semibold border-2 border-purple-500 rounded-2xl"
//          : "text-gray-700 border-2 border-transparent"
//      }`;

//   const toggleSidebar = (): void => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <div
//       className={`bg-gray-200 h-screen m-0 mt-0 p-4 transition-transform duration-300 ${
//         isOpen ? "translate-x-0 w-52" : "-translate-x-full w-52"
//       }`}
//     >
//       <div className="flex justify-between items-center mb-6">
//         <p className="font-semibold text-gray-700">ATS</p>
//         {/* <ArrowLeftToLine onClick={toggleSidebar} className="bg-white rounded-2xl p-1" /> */}
//       </div>

//       <div className="user-sidebar-item">
//         <Link href="/overview" className={linkClasses("/overview")}>
//           <ClipboardMinus size={18} />
//           <p>Overview</p>
//         </Link>

//         <Link href="/jobposting" className={linkClasses("/jobposting")}>
//           <ClipboardPenLine size={18} />
//           <p>Job Posting</p>
//         </Link>

//         <Link href="/assessment" className={linkClasses("/assessment")}>
//           <BookOpenText size={18} />
//           <p>Assessment</p>
//         </Link>

//         <Link href="/interviewplan" className={linkClasses("/interviewplan")}>
//           <User size={18} />
//           <p>Interview Plan</p>
//         </Link>

//         <Link href="/recruiter" className={linkClasses("/recruiter")}>
//           <UserCog size={18} />
//           <p>Recruiter</p>
//         </Link>

//         {/* ---- Candidates with Dropdown ---- */}
//         <div
//           className={`flex justify-between items-center ${linkClasses(
//             "/candidates"
//           )}`}
//           onClick={() => setIsCandidatesOpen(!isCandidatesOpen)}
//         >
//           <div className="flex gap-2 items-center">
//             <AlignHorizontalDistributeCenter size={18} />
//             <p>Candidates</p>
//           </div>
//           {isCandidatesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//         </div>

//         {/* Dropdown Items */}
//         {isCandidatesOpen && (
//           <div className="ml-10 mt-1 border-2 border-l-4">
//             <Link
//               href="/candidates/leads"
//               className={linkClasses("/candidates/leads")}
//             >
//               <p>Leads</p>
//             </Link>
//             <Link
//               href="/candidates/interviewing"
//               className={linkClasses("/candidates/interviewing")}
//             >
//               <p>Interviewing</p>
//             </Link>
//           </div>
//         )}

//         <Link href="/reporting" className={linkClasses("/reporting")}>
//           <AlignEndHorizontal size={18} />
//           <p>Reporting</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default UserSidebar;

"use client";
import { 
  AlignEndHorizontal, 
  AlignHorizontalDistributeCenter, 
  BookOpenText, 
  ClipboardMinus, 
  ClipboardPenLine, 
  User, 
  UserCog 
} from "lucide-react"

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isCandidatesOpen, setIsCandidatesOpen] = useState<boolean>(true); // open by default
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors
     ${pathname === path 
        ? "text-purple-600 font-semibold border-2 border-purple-500 rounded-2xl" 
        : "text-gray-700"}`;

  return (
    <div
      className={`bg-gray-50 h-screen p-4 transition-transform duration-300 ${
        isOpen ? "translate-x-0 w-56" : "-translate-x-full w-56"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="font-bold text-gray-700 text-lg">ATS</p>
      </div>

      {/* Sidebar Items */}
      <div className="flex flex-col space-y-1">
        <Link href="/users/overview" className={linkClasses("/users/overview")}>
          <ClipboardMinus size={18} />
          <p>Overview</p>
        </Link>

        <Link href="/users/jobposting" className={linkClasses("/users/jobposting")}>
          <ClipboardPenLine size={18} />
          <p>Job Posting</p>
        </Link>

        <Link href="/users/assessment" className={linkClasses("/users/assessment")}>
          <BookOpenText size={18} />
          <p>Assessment</p>
        </Link>

        <Link href="/users/interviewplan" className={linkClasses("/users/interviewplan")}>
          <User size={18} />
          <p>Interview Plan</p>
        </Link>

        <Link href="/users/recruiter" className={linkClasses("/users/recruiter")}>
          <UserCog size={18} />
          <p>Recruiter</p>
        </Link>

        {/* ---- Candidates with Tree ---- */}
        <div
          className={`px-3 py-2 cursor-pointer flex items-center gap-2 border-2 rounded-2xl transition-colors 
          ${pathname.startsWith("/users/candidates") 
            ? "text-purple-600 font-semibold border-purple-500" 
            : "text-gray-700 border-transparent"}`}
          onClick={() => setIsCandidatesOpen(!isCandidatesOpen)}
        >
          <AlignHorizontalDistributeCenter size={18} />
          <p>Candidates</p>
        </div>

        {/* Tree sub-items */}
        {isCandidatesOpen && (
          <div className="ml-6 mt-1 border-l-2 border-purple-600 pl-3 flex flex-col space-y-2">
            {/* Disabled Leads */}
            {/* <div className="text-gray-400 text-sm">
              Leads
            </div> */}
             <Link 
              href="/users/candidates/leads" 
              className={`text-sm 
                ${pathname === "/users/candidates/leads" 
                  ? "text-purple-600 font-semibold" 
                  : "text-gray-700 hover:text-purple-600"}`}
            >
              Leads
            </Link>

            {/* Active Interviewing */}
            <Link 
              href="/users/candidates/interviewing" 
              className={`text-sm 
                ${pathname === "/users/candidates/interviewing" 
                  ? "text-purple-600 font-semibold" 
                  : "text-gray-700 hover:text-purple-600"}`}
            >
              Interviewing
            </Link>
          </div>
        )}
        {/* ----------------------------- */}

        <Link href="/users/reporting" className={linkClasses("/users/reporting")}>
          <AlignEndHorizontal size={18} />
          <p>Reporting</p>
        </Link>
      </div>
    </div>
  );
};

export default UserSidebar;

