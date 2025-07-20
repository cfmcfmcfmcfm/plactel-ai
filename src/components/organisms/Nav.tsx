"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bot } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-slate-800 /80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-xl font-bold text-white">Placetel AI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/ai-smartdesk"
              className={cn(
                "hover:text-accent-primary transition-colors",
                pathname === "/ai-smartdesk"
                  ? "text-accent-primary"
                  : "text-slate-300"
              )}
            >
              AI SmartDesk
            </Link>

            <Link
              href="/ai-pro"
              className={cn(
                "hover:text-accent-secondary transition-colors",
                pathname === "/ai-pro"
                  ? "text-accent-secondary"
                  : "text-slate-300"
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
