"use client";
import { AlignEndHorizontal, AlignHorizontalDistributeCenter, ArrowLeftToLine, BookOpenText, ClipboardMinus, ClipboardPenLine, User, UserCog } from "lucide-react"
import Link from "next/link";
import { useState } from "react";

const UserSidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const toggleSidebar = (): void => {
    setIsOpen((prev) => !prev);
    };
    return (
        <div  className={`bg-gray-200 h-screen m-0 mt-0 p-4 transition-transform duration-300 ${
        isOpen ? "translate-x-0 w-52" : "-translate-x-full w-52"}`}>
            <div className='flex justify-between items-center mb-6'>
                <p className="font-semibold text-gray-700">ATS</p>
                {/* <ArrowLeftToLine onClick={toggleSidebar} className="bg-white rounded-2xl p-1" /> */}
            </div>
            <div className="user-sidebar-item">
                <Link href='/overview'>
                <div className="overview flex gap-2 m-2 ml-4 mb-4">
                    <ClipboardMinus size={18} />
                    <p>Overview</p>
                </div>
                </Link>
                <Link href='/jobposting'>
                <div className="job-posting flex gap-2 m-2 ml-4 mb-4">
                    <ClipboardPenLine size={18} />
                    <p>Job Posting</p>
                </div>
                </Link>
                <Link href='/assessment'>
                <div className="assessment flex gap-2 m-2 ml-4 mb-4">
                    <BookOpenText size={18} />
                    <p>Assessment</p>
                </div>
                </Link>
                <Link href='/interviewplan'>
                <div className="interview-plan flex gap-2 m-2 ml-4 mb-4">
                    <User size={18} />
                    <p>Interview Plan</p>
                </div>
                </Link>
                <Link href='/recruiter'>
                <div className="recruiter flex gap-2 m-2 ml-4 mb-4">
                    <UserCog size={18} />
                    <p>Recruiter</p>
                </div>
                </Link>
                <Link href='/candidates'>
                <div className="candidates flex gap-2 m-2 ml-4 mb-4">
                    <AlignHorizontalDistributeCenter size={18} />
                    <p>Candidates</p>
                </div>
                </Link>
                <Link href='/reporting'>
                <div className="reporting flex gap-2 m-2 ml-4 mb-4">
                    <AlignEndHorizontal size={18} />
                    <p>Reporting</p>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default UserSidebar