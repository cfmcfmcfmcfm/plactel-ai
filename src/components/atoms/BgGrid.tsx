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
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800" />

      {/* Interactive floating orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 1.5,
          scale: [1, 1.1, 1],
        }}
        transition={{
          // type: "spring",
          stiffness: 50,
          damping: 30,
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
        initial={{ x: "20%", y: "10%" }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          x: -mousePosition.x * 1.5,
          y: mousePosition.y * 2,
          scale: [1, 1.1, 1],
        }}
        transition={{
          // type: "spring",
          stiffness: 40,
          damping: 25,
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
        initial={{ x: "70%", y: "60%" }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 40%, transparent 70%)",
          filter: "blur(15px)",
        }}
        animate={{
          x: mousePosition.x * 1.2,
          y: -mousePosition.y * 1.8,
          scale: [1, 1.1, 1],
        }}
        transition={{
          // type: "spring",
          stiffness: 60,
          damping: 35,
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
        initial={{ x: "40%", y: "80%" }}
      />

      {/* Animated particles */}
      {/* {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-slate-400 rounded-full opacity-60"
          animate={{
            x: [0, Math.random() * 100, Math.random() * 100],
            y: [0, Math.random() * 100, Math.random() * 100],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))} */}

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
};

export default InteractiveBackground;
