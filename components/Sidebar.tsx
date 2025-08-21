"use client";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarProps {
  items: {
    label: string;
    href?: string;
    icon?: LucideIcon;
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
      ? "border-2 border-blue-500 rounded-2xl text-blue-500"
      : "text-foreground"}`;

  return (
    <div className=" dark:border-gray-600 bg-panel shadow-sm h-screen w-58 p-4">
      <div className="flex justify-between items-center mb-6">
        <p className="font-bold text-foreground text-lg">ATS</p>
      </div>

      <div className="flex flex-col space-y-1">
        {items.map((item) => {
          // const isOpen = item.children && openMenus.includes(item.label);
           const isChildActive =
            item.children?.some((child) => pathname.startsWith(child.href)) ??
            false;

          const isOpen =
            (item.children && openMenus.includes(item.label)) || isChildActive;
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
                      ? "font-semibold border-[#4b2aed]"
                      : "border-transparent"
                    }`}
                  onClick={() => toggleMenu(item.label)}
                >
                  {item.icon && <item.icon size={18} />}
                  {item.label}
                </div>
              )}
              {item.children && isOpen && (
                <div className="ml-4 flex flex-col relative ">
                  
                  <div className="absolute top-2 left-0 h-10 border-l-2 text-[#4b2aed] border-[#4b2aed]"></div>

                  {item.children.map((child, index) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={`relative pl-8 py-1 text-sm flex items-center transition-colors
          ${pathname === child.href
                          ? "text-[#4b2aed] font-semibold"
                          : "text-[#4b2aed] hover:text-[#4b2aed]"}`}
                    >
                    
                      <svg
                        className="absolute left-0 top-1 w-7 h-7 text-[#4b2aed]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M0 0 v12 q0 6 6 6 h12" />
                      </svg>
                      <div className="mt-2">
                        {child.label}
                      </div>
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
