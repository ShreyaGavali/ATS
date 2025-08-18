"use client"
import Image from 'next/image';
import logoImg from '../public/logoImg.png';
import { BookText, ClipboardList, House, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationPanel = () => {
    const pathname = usePathname();
    const linkClasses = (path: string) =>
        pathname === path ? "text-purple-600" : "text-gray-600 hover:text-purple-400";
    return (
        <div className='w-18 h-screen bg-gray-100 '>
            <div className="logo">
                <Image src={logoImg} alt="Logo" className="w-10 h-auto mb-6 m-3 mt-0" />
            </div>
            <div className="navigation-item m-4">
                <div className="house mb-3">
                    <Link href='/' className={linkClasses("/")}><House /></Link>
                </div>
                <div className="users mb-3">
                    <Link href='/users' className={linkClasses("/users")}><Users /></Link>
                </div>
                <div className="booktext mb-3">
                    <Link href='/booktext' className={linkClasses("/booktext")}><BookText /></Link>
                </div>
                <div className="clipboardlist mb-3">
                    <Link href='/clipboardlist' className={linkClasses("/clipboardlist")}><ClipboardList /></Link>
                </div>
                <div className="seeting mb-3">
                    <Link href='/settings' className={linkClasses("/settings")}><Settings /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavigationPanel