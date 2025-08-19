"use client";
import { Bell, Moon, Settings, Sun, User } from "lucide-react";
import userImg from '../public/userImg.png';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Topbar() {
  const [darkMode, setDarkMode] = useState(false);

  //  Sync dark mode with <html> class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-background border-b h-20">
      {/* Left Section: Greeting + Date */}
      <div>
        <p className="font-medium text-foreground">Hi, Sachin</p>
        <p className="text-xs text-foreground">24/07/2025</p>
      </div>

      {/* Middle Section */}
      <div className="flex items-center flex-1 justify-between m-5">
        {/* Position Dropdown */}
        <select className="w-60 ml-5 px-3 py-2 border-1 border-gray-300 rounded-2xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
          <option>Position</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
        </select>

        {/* Search Bar */}
        <div className="relative w-60">
          <input
            type="text"
            placeholder="Search"
            className=" mr-5 px-3 py-2 pl-4 pr-12 border-1 border-gray-300 rounded-2xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          {/* Shortcut Hint */}
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 border rounded px-1">
            ⌘F
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:opacity-90">
          Upgrade
        </button>

        {/* Icon Buttons */}
        <button className="p-2 border-2 border-gray-300  rounded-lg hover:bg-gray-200">
          <Bell size={18} />
        </button>
        {/* <button className="p-2 border-2 border-gray-300  rounded-lg hover:bg-gray-200">
          <Moon size={18} />
        </button> */}
        <div className="flex items-center gap-3">
        {/* Toggle Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 border-2 border-gray-300 dark:border-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
        <button className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-200">
          <Settings size={18} />
        </button>

        {/* Avatar */}
        {/* <Image
          src={userImg} // replace with user image
          alt="User"
          className="w-10 h-10 text-foreground bg-background rounded-full border-2 border-gray-300  p-2"
        /> */}
        <User className="w-10 h-10 text-foreground bg-background rounded-full border-2 border-gray-300  p-2" />
      </div>
    </div>
  );
}
