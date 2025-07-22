"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Bot, Check } from "lucide-react";
import { useState, useEffect } from "react";

const PlayfulHero = () => {
  const [showChaos, setShowChaos] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [activeResponses, setActiveResponses] = useState<number[]>([]);

  // Customer inquiries and AI responses
  const messagePairs = [
    {
      customer: {
        text: "Hallo, ich brauche einen Termin für morgen",
        position: { top: "7%", left: "10%" },
      },
      ai: {
        text: "Termin für morgen um 14:00 gebucht",
      },
    },
    {
      customer: {
        text: "Wann haben Sie denn geöffnet?",
        position: { top: "8%", right: "9%" },
      },
      ai: {
        text: "Öffnungszeiten: Mo-Fr 8-18 Uhr",
      },
    },
    {
      customer: {
        text: "Können Sie mich bitte weiterverbinden?",
        position: { top: "60%", left: "5%" },
      },
      ai: {
        text: "Verbinde Sie mit Abteilung XY",
      },
    },
    {
      customer: {
        text: "Ich habe eine Frage zu meiner Rechnung",
        position: { top: "70%", right: "2%" },
      },
      ai: {
        text: "Rechnung per E-Mail versendet",
      },
    },
    {
      customer: {
        text: "Ist jemand da? Hallo?",
        position: { top: "40%", left: "4%" },
      },
      ai: {
        text: "Ja, Placetel AI ist für Sie da",
      },
    },
    {
      customer: {
        text: "Ich warte schon 10 Minuten...",
        position: { top: "30%", right: "12%" },
      },
      ai: {
        text: "Entschuldigung, ich helfe sofort",
      },
    },
    {
      customer: {
        text: "Können Sie mir helfen?",
        position: { top: "80%", left: "15%" },
      },
      ai: {
        text: "Natürlich, wie kann ich helfen?",
      },
    },
    {
      customer: {
        text: "Ich rufe wegen der Wartung an",
        position: { top: "50%", right: "3%" },
      },
      ai: {
        text: "Wartungstermin eingetragen",
      },
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPhase(1);

      // Start showing AI responses one by one
      messagePairs.forEach((_, index) => {
        setTimeout(() => {
          setActiveResponses((prev) => [...prev, index]);
        }, index * 600); // Slower staggered appearance
      });

      // After all responses appear, move to final phase
      setTimeout(() => {
        setShowChaos(false);
        setCurrentPhase(2);
      }, messagePairs.length * 600 + 1000);
    }, 5000); // Chaos phase

    return () => clearTimeout(timer);
  }, []);

  //   const resetAnimation = () => {
  //     setShowChaos(true);
  //     setCurrentPhase(0);
  //     setActiveResponses([]);

  //     setTimeout(() => {
  //       setCurrentPhase(1);

  //       // Start showing AI responses one by one
  //       messagePairs.forEach((_, index) => {
  //         setTimeout(() => {
  //           setActiveResponses((prev) => [...prev, index]);
  //         }, index * 600); // Slower staggered appearance
  //       });

  //       // After all responses appear, move to final phase
  //       setTimeout(() => {
  //         setShowChaos(false);
  //         setCurrentPhase(2);
  //       }, messagePairs.length * 600 + 1000);
  //     }, 5000);
  //   };

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 min-h-screen">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Customer Inquiries */}
        {messagePairs.map((pair, index) => (
          <motion.div
            key={`customer-${index}`}
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={{
              opacity: currentPhase === 2 ? 0.3 : 1, // Fade out slightly in final phase
              scale: currentPhase === 0 ? [0.8, 1.2, 0.9, 1.1, 1] : 0.9, // Chaotic scaling
              rotate:
                currentPhase === 0
                  ? [
                      Math.random() * 40 - 20,
                      Math.random() * 60 - 30,
                      Math.random() * 40 - 20,
                    ] // Wild rotation
                  : Math.random() * 40 - 20,
              x:
                currentPhase === 1
                  ? [0, Math.random() * 60 - 30, Math.random() * 40 - 20] // Chaotic movement
                  : 0,
              y:
                currentPhase === 1
                  ? [0, Math.random() * 60 - 30, Math.random() * 40 - 20] // Chaotic movement
                  : 0,
            }}
            transition={{
              duration: currentPhase === 0 ? 0.6 : 1.2,
              delay: showChaos ? index * 0.08 : 0,
              //   type: "spring",
              stiffness: currentPhase === 0 ? 200 : 80,
              damping: currentPhase === 0 ? 15 : 20,
            }}
            className="absolute z-20"
            style={pair.customer.position}
          >
            <motion.div
              animate={
                currentPhase === 0
                  ? {
                      x: [0, -2, 2, -1, 1, 0],
                      y: [0, 1, -1, 2, -2, 0],
                    }
                  : {}
              }
              transition={{
                duration: 0.3,
                repeat: currentPhase === 0 ? Number.POSITIVE_INFINITY : 0,
                repeatDelay: Math.random() * 2,
              }}
              className="bg-blue-500 text-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-lg max-w-xs relative transform hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="text-xs font-medium opacity-80">Kunde</span>
              </div>
              <p className="text-sm font-medium">{pair.customer.text}</p>
              <div className="absolute bottom-0 -left-2 w-4 h-4 bg-current transform rotate-45" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Central AI Response Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl text-balance lg:text-8xl font-light text-white mb-8 leading-none">
              Ihre Anrufe <br />
              <span className="bg-gradient-to-r from-blue-500 from-20% via-violet-300 to-green-300 inline-block text-transparent bg-clip-text">
                smart beantwortet
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Placetel AI versteht jede Kundenanfrage und antwortet sofort –
            während Ihr Team sich auf das Wesentliche konzentrieren kann.
          </motion.p>

          {/* Central AI Response Panel */}
          {currentPhase >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 max-w-2xl mx-auto bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mr-3">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-medium text-white">
                    Placetel AI
                  </h3>
                  <p className="text-sm text-slate-400">
                    Intelligent. Schnell. Zuverlässig.
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-left">
                {activeResponses.map((index) => (
                  <motion.div
                    key={`ai-response-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      //   type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    className="bg-green-500/10 border border-green-500/20 rounded-lg p-3"
                  >
                    <p className="text-sm text-white">
                      {messagePairs[index].ai.text}{" "}
                      <Check className="ml-1 w-5 h-5 inline" />
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl"
            >
              Kostenlos testen
              <ArrowRight className="ml-1 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
              //   onClick={resetAnimation}
            >
              Demo ansehen
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlayfulHero;
