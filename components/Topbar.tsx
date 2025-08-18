"use client";
import { Bell, Moon, Settings } from "lucide-react";
import userImg from '../public/userImg.png';
import Image from "next/image";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-b h-20">
      {/* ✅ Left Section: Greeting + Date */}
      <div>
        <p className="font-medium text-gray-800">Hi, Sachin</p>
        <p className="text-xs text-gray-500">24/07/2025</p>
      </div>

      {/* ✅ Middle Section */}
      <div className="flex items-center gap-4 flex-1 justify-center">
        {/* Position Dropdown */}
        <select className="px-3 py-2 border rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
          <option>Position</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
        </select>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 pl-4 pr-12 border rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          {/* Shortcut Hint */}
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 border rounded px-1">
            ⌘F
          </span>
        </div>
      </div>

      {/* ✅ Right Section */}
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:opacity-90">
          Upgrade
        </button>

        {/* Icon Buttons */}
        <button className="p-2 border rounded-lg hover:bg-gray-100">
          <Bell size={18} />
        </button>
        <button className="p-2 border rounded-lg hover:bg-gray-100">
          <Moon size={18} />
        </button>
        <button className="p-2 border rounded-lg hover:bg-gray-100">
          <Settings size={18} />
        </button>

        {/* Avatar */}
        <Image
          src={userImg} // replace with user image
          alt="User"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </div>
  );
}
