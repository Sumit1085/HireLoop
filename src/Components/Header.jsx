"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react"
import { authClient, useSession } from "@/lib/auth-client";
import { userAc } from "better-auth/plugins/admin/access";
import { Button } from "@heroui/react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession()

  const user = session?.user

  console.log(session)

  const handleSignout = async() => {
    await authClient.signOut();

  }

  return (
    <nav className="w-full bg-[#0f0f14] border-b border-white/5 px-6 py-3 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group z-10">
          <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500 transition-colors">
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-sm leading-tight">
            Hire
            <br />
            Loop
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/jobs" className="text-gray-300 hover:text-white text-sm px-4 py-2 rounded-md hover:bg-white/5 transition-colors">
            Browse Jobs
          </Link>
          <Link href="/company" className="text-gray-300 hover:text-white text-sm px-4 py-2 rounded-md hover:bg-white/5 transition-colors">
            Company
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white text-sm px-4 py-2 rounded-md hover:bg-white/5 transition-colors">
            Pricing
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-px h-5 bg-white/20 mr-2" />
          {user ? (
            <>
              <p className="text-white">Hi, {user.name}</p>
              <Button onClick={handleSignout} variant="danger-soft">SignOut</Button>
            </>
          ) : (<>
            <Link href="/signin" className="text-purple-400 hover:text-purple-300 text-sm px-4 py-2 transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="bg-white text-gray-900 hover:bg-gray-100 text-sm font-semibold px-5 py-2 rounded-md transition-colors">
              Get Started
            </Link></>)}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-md hover:bg-white/5 transition-colors gap-1.5 z-10"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="pt-3 pb-4 flex flex-col gap-1 border-t border-white/5 mt-3">
          <Link
            href="/jobs"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white text-sm px-3 py-2.5 rounded-md hover:bg-white/5 transition-colors"
          >
            Browse Jobs
          </Link>
          <Link
            href="/company"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white text-sm px-3 py-2.5 rounded-md hover:bg-white/5 transition-colors"
          >
            Company
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white text-sm px-3 py-2.5 rounded-md hover:bg-white/5 transition-colors"
          >
            Pricing
          </Link>

          <div className="w-full h-px bg-white/10 my-2" />


          <div>
            <Link
              href="/signin"
              onClick={() => setIsOpen(false)}
              className="text-purple-400 hover:text-purple-300 text-sm px-3 py-2.5 rounded-md hover:bg-white/5 transition-colors"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="bg-white text-gray-900 hover:bg-gray-100 text-sm font-semibold px-5 py-2.5 rounded-md transition-colors text-center mt-1"
            >
              Get Started
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}