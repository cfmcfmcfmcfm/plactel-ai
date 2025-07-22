"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  Bot,
  Clock,
  AlertCircle,
  Users,
  Headphones,
} from "lucide-react";
import { useState, useEffect } from "react";

const PlayfulHero = () => {
  const [showChaos, setShowChaos] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);

  const chaosMessages = [
    {
      text: "Warteschleife seit 20 Minuten...",
      icon: Clock,
      color: "bg-red-500",
      position: { top: "15%", left: "10%" },
    },
    {
      text: "Falsch verbunden!",
      icon: AlertCircle,
      color: "bg-orange-500",
      position: { top: "25%", right: "15%" },
    },
    {
      text: "Kunde ist genervt",
      icon: Users,
      color: "bg-red-400",
      position: { top: "60%", left: "5%" },
    },
    {
      text: "Niemand da um 18:30",
      icon: Clock,
      color: "bg-gray-500",
      position: { top: "70%", right: "10%" },
    },
    {
      text: "Immer die gleichen Fragen",
      icon: Headphones,
      color: "bg-yellow-500",
      position: { top: "40%", left: "20%" },
    },
    {
      text: "Team überlastet",
      icon: AlertCircle,
      color: "bg-red-600",
      position: { top: "30%", right: "25%" },
    },
    {
      text: "Anruf verpasst",
      icon: Phone,
      color: "bg-orange-600",
      position: { top: "80%", left: "15%" },
    },
    {
      text: "Keine Weiterleitung",
      icon: Users,
      color: "bg-gray-600",
      position: { top: "20%", left: "60%" },
    },
  ];

  const organizedMessages = [
    {
      text: "24/7 erreichbar",
      icon: Clock,
      color: "bg-green-500",
      position: { top: "20%", left: "15%" },
    },
    {
      text: "Automatische Weiterleitung",
      icon: ArrowRight,
      color: "bg-blue-500",
      position: { top: "30%", right: "20%" },
    },
    {
      text: "80% weniger Anrufe",
      icon: Users,
      color: "bg-green-400",
      position: { top: "60%", left: "10%" },
    },
    {
      text: "Sofort einsatzbereit",
      icon: Bot,
      color: "bg-purple-500",
      position: { top: "70%", right: "15%" },
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPhase(1);
      setTimeout(() => {
        setShowChaos(false);
        setCurrentPhase(2);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const resetAnimation = () => {
    setShowChaos(true);
    setCurrentPhase(0);
    setTimeout(() => {
      setCurrentPhase(1);
      setTimeout(() => {
        setShowChaos(false);
        setCurrentPhase(2);
      }, 1000);
    }, 3000);
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 min-h-screen">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Chaos Phase */}
        <AnimatePresence>
          {showChaos &&
            chaosMessages.map((message, index) => (
              <motion.div
                key={`chaos-${index}`}
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{
                  opacity: currentPhase === 0 ? 1 : 0.3,
                  scale: currentPhase === 0 ? 1 : 0.8,
                  rotate: currentPhase === 0 ? Math.random() * 20 - 10 : -45,
                  x: currentPhase === 1 ? Math.random() * 100 - 50 : 0,
                  y: currentPhase === 1 ? Math.random() * 100 - 50 : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  rotate: -90,
                  transition: { duration: 0.8, delay: index * 0.1 },
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className="absolute"
                style={message.position}
              >
                <div
                  className={`${message.color} text-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-lg max-w-xs relative transform hover:scale-105 transition-transform cursor-pointer`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <message.icon className="w-4 h-4" />
                    <span className="text-xs font-medium opacity-80">
                      Problem
                    </span>
                  </div>
                  <p className="text-sm font-medium">{message.text}</p>
                  <div className="absolute bottom-0 -left-2 w-4 h-4 bg-current transform rotate-45" />
                </div>
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Organized Phase */}
        <AnimatePresence>
          {!showChaos &&
            organizedMessages.map((message, index) => (
              <motion.div
                key={`organized-${index}`}
                initial={{ opacity: 0, scale: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 120,
                }}
                className="absolute"
                style={message.position}
              >
                <div
                  className={`${message.color} text-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-lg max-w-xs relative transform hover:scale-105 transition-transform cursor-pointer`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <message.icon className="w-4 h-4" />
                    <span className="text-xs font-medium opacity-80">
                      Lösung
                    </span>
                  </div>
                  <p className="text-sm font-medium">{message.text}</p>
                  <div className="absolute bottom-0 -left-2 w-4 h-4 bg-current transform rotate-45" />
                </div>
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Floating Phone Icons */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`phone-${i}`}
            className="absolute opacity-5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            <Phone className="w-8 h-8 text-slate-300" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-slate-900 mb-8 leading-none">
              Vom Chaos zur
              <br />
              <span className="bg-gradient-to-r from-blue-500 from-20% via-violet-300 to-green-300 inline-block text-transparent bg-clip-text">
                perfekten Ordnung
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto"
          >
            Placetel AI verwandelt das tägliche Telefon-Chaos in Ihrem
            Unternehmen in eine perfekt organisierte, automatisierte
            Kommunikation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white shadow-xl"
            >
              Chaos beenden
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
            >
              Animation wiederholen
            </Button>
          </motion.div>

          {/* Reset Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={resetAnimation}
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors underline"
          >
            Animation erneut abspielen
          </motion.button>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default PlayfulHero;
