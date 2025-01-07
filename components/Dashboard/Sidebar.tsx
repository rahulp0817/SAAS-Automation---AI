"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { menuOptions } from "@/lib/constant";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-screen border-r border-gray-200">
      <div className="px-4 py-3 mt-[6px] flex justify-between items-center border-b border-gray-200 gap-4">
        <div className="flex gap-2 items-center ">
          <div className="rounded-full object-cover overflow-hidden h-[40px] w-[40px] relative">
            <Image src={"/profile2.jpg"} layout="fill" alt="profile pic" style={{ objectFit: 'fill' }} />
          </div>
          <div className="flex flex-col w-24 ">
            <span className="text-sm font-semibold truncate">John Doe</span>
            <span className="text-xs text-gray-500 truncate">
              Johndoe@gamil.com
            </span>
          </div>
        </div>
        {/* <div className="text-2xl font-semibold">FlowGen</div> */}
        <button className="text-gray-500 hover:text-black">
          <ChevronDown width={16} height={16}/>
        </button>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-6">
          {menuOptions.map((menuItem) => (
            <li key={menuItem.name}>
              <Link
                href={menuItem.href}
                className={clsx(
                  "group flex items-center gap-4 p-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#EEE0FF]/50",
                  {
                    "bg-[#EEE0FF]": pathname === menuItem.href,
                  }
                )}
              >
                <div className="h-8 w-8 flex items-center justify-center scale-[1.5] transition-transform duration-300 group-hover:scale-[1.6]">
                  <menuItem.Component selected={pathname === menuItem.href} />
                </div>
                <span className="text-sm">{menuItem.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
