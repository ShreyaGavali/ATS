"use client";
import { Bell, Calendar, Moon, Search, Settings, Sparkles, Sun, User } from "lucide-react";
import userImg from '../public/userImg.png';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Topbar() {
   const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
   
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-topbar border-b h-20">
      {/* Left Section: Greeting + Date */}
      <div className="ml-4">
        <p className="font-medium text-foreground">Hi, Sachin</p>
        <p className="text-xs text-foreground">24/07/2025</p>
      </div>
      <div className="flex gap-10">
      <div className="search flex border-2 border-gray-300 h-10 w-70 align-middle gap-2 rounded-2xl ">
         <Search className="mt-2 ml-2" />
         <input type="text" placeholder="search" className="outline-none focus:outline-none" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <button className="p-2 border-2 border-gray-300  rounded-lg hover:bg-gray-200">
          <Bell size={18} />
        </button>
        <button className="p-2 border-2 border-gray-300  rounded-lg hover:bg-gray-200">
          <Calendar size={18} />
        </button>
        <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:opacity-90">
          Upgrade
        </button>
       <div className="flex items-center gap-3">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 "
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
        <button className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-200">
          <Settings size={18} />
        </button>
        <User className="w-10 h-10 text-foreground bg-background rounded-full border-2 border-gray-300  p-2" />
      </div>
      </div>
    </div>
  );
}
