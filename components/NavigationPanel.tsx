"use client"
import Image from 'next/image';
import logoImg from '../public/logoImg.png';
import { BookText, ClipboardList, House, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationPanel = () => {
    const pathname = usePathname();
    const linkClasses = (path: string) =>
        pathname === path || pathname.startsWith(path + "/") ? "text-purple-600" : "text-gray-600";
    const borderClasses = (path: string) =>
        pathname === path || pathname.startsWith(path + "/")
 ? "border-2 border-purple-500" : "border border-transparent";
    return (
        <div className='w-18 h-screen bg-gray-100 flex align-middle flex-col '>
            <div className="logo  bg-white w-13 h-11 mt-3 ml-2 rounded-2xl">
                <Image src={logoImg} alt="Logo" className="w-9 h-auto mb-6 ml-2.5 mt-0 flex justify-center align-middle p-1" />
            </div>
            <div className="navigation-item m-4">
                <div  className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/")}`}>
                    <Link href='/' className={linkClasses("/")}><House /></Link>
                </div>
                <div className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/users")}`}>
                    <Link href='/users' className={linkClasses("/users")}><Users /></Link>
                </div>
                <div  className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/booktext")}`}>
                    <Link href='/booktext' className={linkClasses("/booktext")}><BookText /></Link>
                </div>
                <div  className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/clipboardlist")}`}>
                    <Link href='/clipboardlist' className={linkClasses("/clipboardlist")}><ClipboardList /></Link>
                </div>
                <div  className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/seetings")}`}>
                    <Link href='/settings' className={linkClasses("/settings")}><Settings /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavigationPanel