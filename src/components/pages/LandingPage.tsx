"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function LandingPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start start"],
  });

  const [active, setActive] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v > 0 && !active) setActive(true);
    });
    return () => unsubscribe();
  }, [scrollYProgress, active]);

  return (
    <>
      <div className="h-[200vh] bg-violet-400" />

      <motion.div
        ref={ref}
        animate={{
          backgroundColor: active ? "#22c55e" : "#facc15",
        }}
        transition={{ duration: 0.8 }}
        className="h-[200vh] w-full flex items-center justify-center text-white text-3xl font-bold"
      >
        Smooth color change ✨
      </motion.div>

      <div className="h-[200vh] bg-violet-400" />
    </>
  );
}
