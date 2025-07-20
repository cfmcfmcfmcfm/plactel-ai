"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../atoms/Logo";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-slate-800 /80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/ai-smartdesk"
              className={cn(
                "hover:text-purple-300 transition-colors",
                pathname === "/ai-smartdesk"
                  ? "text-purple-500"
                  : "text-slate-300"
              )}
            >
              AI SmartDesk
            </Link>

            <Link
              href="/ai-pro"
              className={cn(
                "hover:text-purple-300 transition-colors",
                pathname === "/ai-pro" ? "text-purple-500" : "text-slate-300"
              )}
            >
              AI Pro
            </Link>

            <div className="flex gap-4">
              <Button variant="outline">Demo ansehen</Button>

              <Button>Kostenlos testen</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
