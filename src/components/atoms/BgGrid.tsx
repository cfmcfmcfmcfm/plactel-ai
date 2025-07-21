// test

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800" />

      {/* Interactive floating orbs - subtle and elegant */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)",
          filter: "blur(40px)",
          left: "-300px",
          top: "-300px",
        }}
        animate={{
          x: mousePosition.x * 8,
          y: mousePosition.y * 6,
          scale: [1, 1.2],
        }}
        transition={{
          x: { type: "spring", stiffness: 50, damping: 30 },
          y: { type: "spring", stiffness: 50, damping: 30 },
          scale: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)",
          filter: "blur(30px)",
          right: "-250px",
          top: "50%",
        }}
        animate={{
          x: -mousePosition.x * 6,
          y: mousePosition.y * 8,
          scale: [1, 1.3],
        }}
        transition={{
          x: { type: "spring", stiffness: 40, damping: 25 },
          y: { type: "spring", stiffness: 40, damping: 25 },
          scale: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.5) 0%, rgba(34, 197, 94, 0.2) 40%, transparent 70%)",
          filter: "blur(20px)",
          left: "50%",
          bottom: "-200px",
        }}
        animate={{
          x: mousePosition.x * 5,
          y: -mousePosition.y * 7,
          scale: [1, 1.4],
        }}
        transition={{
          x: { type: "spring", stiffness: 60, damping: 35 },
          y: { type: "spring", stiffness: 60, damping: 35 },
          scale: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
