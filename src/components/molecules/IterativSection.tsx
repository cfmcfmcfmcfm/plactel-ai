"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const content = [
  { title: "Step 1" },
  { title: "Step 2" },
  { title: "Step 3" },
  { title: "Step 4" },
  { title: "Step 5" },
];

export default function IterativSection() {
  return (
    <section className="flex">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen p-6">
        <ul className="space-y-10 pt-20">
          {content.map((item, i) => (
            <SidebarItem key={i} title={item.title} />
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 pt-20 space-y-12">
        {content.map((item, i) => (
          <ContentItem key={i} title={item.title} />
        ))}
      </div>
    </section>
  );
}

function ContentItem({ title }: { title: string }) {
  return (
    <div className="h-screen w-full bg-gray-100 rounded-xl p-6 shadow">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-4 text-muted-foreground">Scrollbare Inhalte …</p>
    </div>
  );
}

function SidebarItem({ title }: { title: string }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <li ref={ref} className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-wide">{title}</span>
      <div className="w-full h-1 bg-gray-300 overflow-hidden rounded">
        <motion.div
          style={{ scaleX, transformOrigin: "left" }}
          className="h-full bg-orange-500"
        />
      </div>
    </li>
  );
}
