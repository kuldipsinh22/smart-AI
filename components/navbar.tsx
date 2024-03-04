import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileSidebar from "@/components/mobile-sidebar";
import { useEffect, useState } from "react";
import { Montserrat, Raleway, Edu_TAS_Beginner } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const raleway = Raleway({
  weight: "700",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <>
      <div className={(cn("flex items-center p-4"), raleway.className)}>
        <div className="header">
          <div className="navbar">
            <Link href="/dashboard">
              <img src="/logo.png" alt="logo" className="logo" />
            </Link>
            <nav>
              <ul>
                <li>
                  <Link href="/dashboard">Home</Link>
                </li>
                <li>
                  <Link href="/conversation">Conversation</Link>
                </li>
                <li>
                  <Link href="/code">Code</Link>
                </li>
                <li>
                  <Link href="/image">Image</Link>
                </li>
                <li>
                  <Link href="/music">Beats</Link>
                </li>
                <li>
                  <Link href="/video">GIF</Link>
                </li>
                <li>
                  <Link href="/summarizer">Summarizer</Link>
                </li>
              </ul>
            </nav>
            {/* <ThemeToggle /> */}
            <div className="flex justify-end ml-5">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </div>
      <div className="responsive">
        <div className="flex justify-between items-center p-1">
          <div className="lg:hidden">
            <MobileSidebar />
          </div>
          <div className="flex justify-end lg:hidden md:hidden">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
