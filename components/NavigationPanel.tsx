"use client"
import Image from 'next/image';
import logoImg from '../public/logoImg.png';
import { BookText, ClipboardList, House, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationPanel = () => {
    const pathname = usePathname();
    const linkClasses = (path: string) =>
        pathname === path || pathname.startsWith(path + "/") ? "text-black" : "text-foreground";
    const borderClasses = (path: string) =>
        pathname === path || pathname.startsWith(path + "/")
 ? "border-2 border-[#4b2aed]" : "border border-transparent";
    return (
        <div className='border-r border-gray-300 w-18 h-screen bg-panel flex align-middle flex-col shadow-lg'>
            <div className="logo  bg-background w-13 h-11 mt-3 ml-2 rounded-2xl">
                <Image src={logoImg} alt="Logo" className="w-9 h-auto mb-6 ml-2.5 mt-0 flex justify-center align-middle p-1" />
            </div>
            <div className="navigation-item m-4">
                <div  className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/home")}`}>
                    <Link href='/home' className={linkClasses("/home")}><House /></Link>
                </div>
                <div className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/users")}`}>
                    <Link href='/users' className={linkClasses("/users")}><Users /></Link>
                </div>
                <div  className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/documents")}`}>
                    <Link href='/documents' className={linkClasses("/documents")}><BookText /></Link>
                </div>
                <div  className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/documents2")}`}>
                    <Link href='/documents2' className={linkClasses("/documents2")}><ClipboardList /></Link>
                </div>
                <div  className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/settings")}`}>
                    <Link href='/settings' className={linkClasses("/settings")}><Settings /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavigationPanel
