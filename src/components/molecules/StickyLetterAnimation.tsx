"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const StickyLetterAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const text =
    "This creates an immersive reading experience where content reveals itself progressively, engaging users through motion and creating a sense of discovery.";

  const letters = text.split("").map((char, index) => ({
    char: char === " " ? "\u00A0" : char,
    index,
  }));

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-2xl md:text-3xl max-w-4xl px-6 font-normal leading-relaxed text-center">
          {letters.map(({ char, index }) => (
            <AnimatedLetter
              key={index}
              char={char}
              index={index}
              total={letters.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyLetterAnimation;

function AnimatedLetter({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [20, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["rgb(148, 163, 184)", "rgb(30, 41, 59)"]
  );

  return (
    <motion.span style={{ opacity, y, scale, color }} className="inline-block">
      {char}
    </motion.span>
  );
}
