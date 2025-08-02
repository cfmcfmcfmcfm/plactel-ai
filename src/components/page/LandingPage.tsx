'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Clock, Users, Zap } from 'lucide-react';
import ProductComparison from '@/components/molecules/ProductComparison';
import RoiCalculator from '@/components/molecules/RoiCalculator';
import PlayfulHero from '../molecules/PlayfulHero';

export default function LandingPage() {
    return (
        <div className="min-h-screen">
            <PlayfulHero />

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
                        <h2 className="mb-6 text-4xl md:text-5xl">
                            Warum Placetel AI?
                        </h2>
                        <p className="text-xl text-slate-600 dark:dark:text-slate-400">
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
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white transition-colors duration-300 group-hover:bg-slate-100 dark:bg-slate-700 dark:group-hover:bg-slate-600">
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
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white transition-colors duration-300 group-hover:bg-slate-100 dark:bg-slate-700 dark:group-hover:bg-slate-600">
                                <Users className="h-8 w-8 text-green-400" />
                            </div>

                            <h3 className="mb-4 text-xl">Team entlasten</h3>

                            <p className="text-slate-600 dark:text-slate-400">
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
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white transition-colors duration-300 group-hover:bg-slate-100 dark:bg-slate-700 dark:group-hover:bg-slate-600">
                                <Zap className="h-8 w-8 text-purple-400" />
                            </div>

                            <h3 className="mb-4 text-xl">Sofort startklar</h3>

                            <p className="text-slate-600 dark:text-slate-400">
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
                        <h2 className="mb-6 text-4xl md:text-5xl">
                            Bereit für smarte Kommunikation?
                        </h2>
                        <p className="mb-8 text-xl text-slate-600 dark:text-slate-400">
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
