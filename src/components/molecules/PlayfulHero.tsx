'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Bot, Check, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import SpeachBubbles from '../atoms/SpeachBubbles';

const PlayfulHero = () => {
    const [showChaos, setShowChaos] = useState(true);
    const [currentPhase, setCurrentPhase] = useState(0);
    const [currentResponseIndex, setCurrentResponseIndex] = useState(0);
    const [showResponses, setShowResponses] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isClient, setIsClient] = useState(false);

    // Customer inquiries and AI responses
    const messagePairs = [
        {
            customer: {
                text: 'Hallo, ich brauche einen Termin für morgen',
                position: { top: '7%', left: '10%' },
            },
            ai: {
                text: 'Termin für morgen um 14:00 gebucht',
            },
        },
        {
            customer: {
                text: 'Wann haben Sie denn geöffnet?',
                position: { top: '8%', right: '9%' },
            },
            ai: {
                text: 'Öffnungszeiten: Mo-Fr 8-18 Uhr',
            },
        },
        {
            customer: {
                text: 'Können Sie mich bitte weiterverbinden?',
                position: { top: '60%', left: '5%' },
            },
            ai: {
                text: 'Verbinde Sie mit Abteilung XY',
            },
        },
        {
            customer: {
                text: 'Ich habe eine Frage zu meiner Rechnung',
                position: { top: '70%', right: '2%' },
            },
            ai: {
                text: 'Rechnung per E-Mail versendet',
            },
        },
        {
            customer: {
                text: 'Ist jemand da? Hallo?',
                position: { top: '40%', left: '4%' },
            },
            ai: {
                text: 'Ja, Placetel AI ist für Sie da',
            },
        },
        {
            customer: {
                text: 'Ich warte schon 10 Minuten...',
                position: { top: '30%', right: '12%' },
            },
            ai: {
                text: 'Entschuldigung, ich helfe sofort',
            },
        },
        {
            customer: {
                text: 'Können Sie mir helfen?',
                position: { top: '80%', left: '15%' },
            },
            ai: {
                text: 'Natürlich, wie kann ich helfen?',
            },
        },
        {
            customer: {
                text: 'Ich rufe wegen der Wartung an',
                position: { top: '50%', right: '3%' },
            },
            ai: {
                text: 'Wartungstermin eingetragen',
            },
        },
    ];

    useEffect(() => {
        setIsClient(true);

        // Mouse tracking for subtle parallax effect
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20, // Max 10px movement in each direction
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', updateMousePosition);

        const timer = setTimeout(() => {
            setCurrentPhase(1);
            setShowResponses(true);
        }, 4000); // Chaos phase

        // Start cycling through responses and keep cycling forever
        const cycleTimer = setInterval(() => {
            setCurrentResponseIndex((prev) => (prev + 1) % messagePairs.length);
        }, 2500); // Change response every 2.5 seconds

        // Fade customer inquiries after some time but keep cycling responses
        setTimeout(() => {
            setShowChaos(false);
            setCurrentPhase(2);
        }, 8000);

        return () => {
            clearTimeout(timer);
            clearInterval(cycleTimer);
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const resetAnimation = () => {
        setShowChaos(true);
        setCurrentPhase(0);
        setCurrentResponseIndex(0);
        setShowResponses(false);

        setTimeout(() => {
            setCurrentPhase(1);
            setShowResponses(true);
        }, 4000);

        setTimeout(() => {
            setShowChaos(false);
            setCurrentPhase(2);
        }, 8000);
    };

    if (!isClient) return null;

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32">
            {/* Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Customer Inquiries */}
                {messagePairs.map((pair, index) => (
                    <motion.div
                        key={`customer-${index}`}
                        initial={{ opacity: 0, scale: 0, rotate: -10 }}
                        animate={{
                            opacity: currentPhase === 2 ? 0.3 : 1,
                            scale:
                                currentPhase === 0
                                    ? [0.8, 1.2, 0.9, 1.1, 1]
                                    : 1, // Settle to normal scale
                            rotate:
                                currentPhase === 0
                                    ? [
                                          Math.random() * 40 - 20,
                                          Math.random() * 60 - 30,
                                          0,
                                      ]
                                    : 0, // Settle to 0 rotation
                            // Subtle mouse-responsive movement after settling
                            x:
                                currentPhase >= 1
                                    ? mousePosition.x * (0.3 + index * 0.1)
                                    : 0,
                            y:
                                currentPhase >= 1
                                    ? mousePosition.y * (0.3 + index * 0.1)
                                    : 0,
                        }}
                        transition={{
                            duration: currentPhase === 0 ? 0.6 : 0.8,
                            delay: showChaos ? index * 0.08 : 0,
                            //   type: "spring",
                            stiffness: currentPhase === 0 ? 200 : 60, // Gentler spring after settling
                            damping: currentPhase === 0 ? 15 : 25, // More damping for stability
                        }}
                        className="absolute z-20"
                        style={pair.customer.position}
                    >
                        <motion.div
                            animate={
                                // Only shake during chaos phase
                                currentPhase === 0
                                    ? {
                                          x: [0, -2, 2, -1, 1, 0],
                                          y: [0, 1, -1, 2, -2, 0],
                                      }
                                    : {} // No shaking after chaos
                            }
                            transition={{
                                duration: 0.3,
                                repeat:
                                    currentPhase === 0
                                        ? Number.POSITIVE_INFINITY
                                        : 0,
                                repeatDelay: Math.random() * 2,
                            }}
                            //   className=" rounded-bl-sm   relative transform hover:scale-105 transition-transform cursor-pointer"
                        >
                            <SpeachBubbles className="max-w-xs rounded-full bg-slate-700 px-4 py-3 text-slate-100 shadow-lg">
                                <div className="mb-1 flex items-center space-x-2">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                                        <Phone className="h-3 w-3" />
                                    </div>
                                    <span className="text-xs opacity-80">
                                        Kunde
                                    </span>
                                </div>
                                <p className="text-sm font-medium">
                                    {pair.customer.text}
                                </p>
                            </SpeachBubbles>

                            {/* <div className="absolute bottom-0 -left-2 w-4 h-4 bg-current transform rotate-45" /> */}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <h1 className="mb-8 text-5xl leading-none font-light text-balance text-white md:text-7xl lg:text-8xl">
                            Viele Anrufe
                            <br />
                            <span className="inline-block bg-gradient-to-r from-blue-500 from-20% via-violet-300 to-green-300 bg-clip-text text-transparent">
                                smart beantwortet
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-300"
                    >
                        Placetel AI versteht jede Kundenanfrage und antwortet
                        sofort – während Ihr Team sich auf das Wesentliche
                        konzentrieren kann.
                    </motion.p>

                    {/* Fixed AI Response Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="mx-auto mb-12 flex min-h-[140px] max-w-2xl flex-col rounded-2xl border border-slate-700 bg-slate-800/60 p-6 shadow-xl backdrop-blur-sm"
                    >
                        <div className="mb-4 flex items-center">
                            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-500">
                                <Bot className="h-5 w-5 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-medium text-white">
                                    Placetel AI
                                </h3>
                                <p className="text-smdark:text-slate-400 text-slate-700">
                                    Intelligent. Schnell. Zuverlässig.
                                </p>
                            </div>
                        </div>

                        {/* Response Content Area */}
                        <div className="flex flex-1 items-center justify-center">
                            {!showResponses ? (
                                // Loading State
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentResponseIndex}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                            scale: 0.95,
                                        }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{
                                            opacity: 0,
                                            y: -20,
                                            scale: 0.95,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 15,
                                        }}
                                        className="rounded-lg border border-green-500/20 bg-green-500/10 p-4"
                                    >
                                        <p className="text-center text-white">
                                            {
                                                messagePairs[
                                                    currentResponseIndex
                                                ].ai.text
                                            }
                                            <Check className="ml-2 inline h-4 w-4 text-green-400" />
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            ) : (
                                // Cycling Responses (Forever)
                                <div className="w-full">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentResponseIndex}
                                            initial={{
                                                opacity: 0,
                                                y: 20,
                                                scale: 0.95,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -20,
                                                scale: 0.95,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                type: 'spring',
                                                stiffness: 100,
                                                damping: 15,
                                            }}
                                            className="rounded-lg border border-green-500/20 bg-green-500/10 p-4"
                                        >
                                            <p className="text-center text-white">
                                                {
                                                    messagePairs[
                                                        currentResponseIndex
                                                    ].ai.text
                                                }
                                                <Check className="ml-2 inline h-4 w-4 text-green-400" />
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Progress Indicator */}
                                    <div className="mt-4 flex justify-center space-x-1">
                                        {messagePairs.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                                                    index ===
                                                    currentResponseIndex
                                                        ? 'bg-green-400'
                                                        : 'bg-slate-600'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-slate-900 shadow-xl hover:bg-slate-100"
                        >
                            Kostenlos testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-slate-600 bg-transparent text-white hover:bg-slate-800"
                        >
                            Demo ansehen
                        </Button>
                    </motion.div>

                    {/* Reset Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        onClick={resetAnimation}
                        className="text-smdark:text-slate-400 text-slate-700 underline transition-colors hover:text-slate-200"
                    >
                        Animation erneut abspielen
                    </motion.button>
                </div>
            </div>

            {/* Bottom gradient overlay */}
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent" />
        </section>
    );
};

export default PlayfulHero;
