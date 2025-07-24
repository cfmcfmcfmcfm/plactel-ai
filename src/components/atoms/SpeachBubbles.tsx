import { cn } from "@/lib/utils";
import React from "react";

const SpeachBubbles = ({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) => {
  return (
    <div className={cn("relative rounded-full p-8", className)}>
      <div>{children}</div>

      <svg
        aria-hidden="true"
        className="absolute bottom-0 right-[-17px] h-6 rounded-tr-[40px] transition-colors md:right-[-7px] md:h-auto lg:right-[-9px] lg:rounded-[0px]"
        fill="none"
        height="45"
        viewBox="0 0 53 45"
        width="53"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="transition-colors"
          d="M44 0H0V0C0 24.8528 20.1472 45 45 45H53V45C47.1396 36.535 44 26.4842 44 16.1886V0Z"
          fill="bg-slate-700"
        ></path>
      </svg>
    </div>
  );
};

export default SpeachBubbles;
