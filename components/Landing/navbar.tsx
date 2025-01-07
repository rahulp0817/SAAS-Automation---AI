"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div>
      <nav className="fixed top-4 left-[6%] right-[6%] z-50 transition-all duration-300 backdrop-blur-2xl shadow-sm rounded-xl">
        <div className="max-w-8xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Company Name */}
            <div className="flex items-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-black"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="text-xl font-bold">
                FlowGen
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 ml-28">
              <a
                href="#"
                className="text-black font-semibold hover:text-blue-800 hover:scale-95 transition-transform duration-100"
              >
                Features
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-blue-600 hover:scale-95 transition-transform duration-100"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-blue-600 hover:scale-95 transition-transform duration-100"
              >
                About
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-blue-600 hover:scale-95 transition-transform duration-100"
              >
                Docs
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <button
                className="hidden md:block lg:block px-5 py-2.5 text-black rounded-full items-center hover:bg-gray-100 transition-all ease-in duration-200"
                onClick={() => router.push("/signin")}
              >
                Log in
              </button>
              <button
                className="hidden md:block lg:block px-5 py-2.5 bg-black text-white border-black rounded-full hover:bg-blue-500 transition-all ease-in duration-200"
                onClick={() => router.push("/signup")}
              >
                <p className="text-md ">Get Started</p>
              </button>
              <MenuIcon className="lg:hidden" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
