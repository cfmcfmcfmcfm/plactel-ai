'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Clock, Users, Zap } from 'lucide-react';
import ProductComparison from '@/components/molecules/ProductComparison';
import RoiCalculator from '@/components/molecules/RoiCalculator';

export default function LandingPage() {
    const companies = [
        'Siemens',
        'BMW',
        'Deutsche Bank',
        'SAP',
        'Volkswagen',
        'Bosch',
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="gradient-bg relative overflow-hidden py-20 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8 flex flex-col justify-center border-y border-slate-300 text-center text-sm tracking-wider text-slate-700 uppercase lg:flex-row dark:border-slate-700 dark:text-slate-400"
                        >
                            <span className="min-w-72 border-slate-300 py-1 lg:border-r dark:border-slate-700">
                                #1 in Kundenzufriedenheit
                            </span>
                            <span className="min-w-72 border-slate-300 py-1 lg:border-r dark:border-slate-700">
                                #1 in Automatisierung
                            </span>
                            <span className="min-w-72 py-1">
                                #1 Bewertung bei G2
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <h1 className="mb-8 text-4xl leading-none font-light tracking-tight text-slate-300 md:text-7xl lg:text-8xl">
                                Die{' '}
                                <span className="text-white">#1 AI-Lösung</span>
                                <br />
                                für{' '}
                                <span className="inline-block bg-gradient-to-r from-blue-500 from-20% via-violet-300 to-green-300 bg-clip-text text-transparent">
                                    Geschäftstelefonie
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
                        >
                            <Button size="lg">Kostenlos testen</Button>
                            <Button size="lg" variant="outline">
                                Demo ansehen
                            </Button>
                        </motion.div>

                        {/* Company Logos */}
                        <div className="relative overflow-hidden">
                            <div className="animate-marquee flex w-max whitespace-nowrap">
                                {companies.map((company, index) => (
                                    <div
                                        key={index}
                                        className="mx-8 text-lg font-medium text-slate-400 md:mx-12"
                                    >
                                        {company}
                                    </div>
                                ))}
                                {companies.map((company, index) => (
                                    <div
                                        key={`duplicate-${index}`}
                                        className="mx-8 text-lg font-medium text-slate-400 md:mx-12"
                                    >
                                        {company}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-6 text-4xl text-white md:text-5xl">
                            Warum Placetel AI?
                        </h2>
                        <p className="text-xldark:text-slate-400 text-slate-700">
                            Einfach. Intelligent. Sofort einsetzbar.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group text-center"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white transition-colors duration-300 group-hover:bg-slate-600 dark:bg-slate-700">
                                <Clock className="h-8 w-8 text-blue-400" />
                            </div>

                            <h3 className="mb-4 text-xl">
                                24/7 Erreichbarkeit
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Ihre Kunden erreichen Sie immer – auch außerhalb
                                der Öffnungszeiten, am Wochenende und an
                                Feiertagen.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group text-center"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-700 transition-colors duration-300 group-hover:bg-slate-600">
                                <Users className="h-8 w-8 text-green-400" />
                            </div>
                            <h3 className="mb-4 text-xl text-white">
                                Team entlasten
                            </h3>
                            <p className="text-slate-400">
                                Bis zu 80% der Anrufe werden automatisch
                                bearbeitet. Mehr Zeit für die Gespräche, die
                                wirklich zählen.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="group text-center"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-700 transition-colors duration-300 group-hover:bg-slate-600">
                                <Zap className="h-8 w-8 text-purple-400" />
                            </div>
                            <h3 className="mb-4 text-xl text-white">
                                Sofort startklar
                            </h3>
                            <p className="text-slate-400">
                                Keine komplizierte Installation. Aktivierung
                                direkt im Placetel Portal – in wenigen Minuten
                                einsatzbereit.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ProductComparison />

            <RoiCalculator />

            {/* <VercelInspiredSection /> */}

            {/* CTA Section */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-6 text-4xl text-white md:text-5xl">
                            Bereit für{' '}
                            <span className=" ">smarte Kommunikation?</span>
                        </h2>
                        <p className="text-xldark:text-slate-400 mb-8 text-slate-700">
                            Testen Sie jetzt Placetel AI und verlieren Sie kein
                            Gespräch – ganz ohne zusätzlichen Aufwand im Team.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button size="lg">Kostenlos testen</Button>
                            <Button size="lg" variant="outline">
                                Demo Call buchen
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
