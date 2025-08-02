'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
    return (
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
                    <p className="mb-8 text-xl text-slate-500 dark:text-slate-400">
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
    );
};

export default CTASection;
