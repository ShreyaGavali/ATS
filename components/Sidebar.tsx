"use client";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarProps {
  items: {
    label: string;
    href?: string;
    icon?: LucideIcon ;
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
