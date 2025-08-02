'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Check, Phone, Zap } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { AnimateNumber } from 'motion-plus/react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const ProductComparison = () => {
    const smartDeskFeatures = [
        'In Minuten eingerichtet',
        'Autom. Anrufannahme & Weiterleitung',
        'Autom. Beantwortung von FAQs',
        'Zeitsteuerung & Fallbacks',
        'Auswahl von Stimme und Persönlichkeit',
    ];

    const proFeatures = [
        'Alles aus SmartDesk',
        'Zugriff auf das AI Pro Portal',
        'Anbindung an eigene Systeme, z.B. CRM oder ERP',
        'Eigene Prompts & komplexe Dialoge',
        'Detaillierte Auswertungen & Statistiken',
        'Debugging & Testing im Browser',
        'Optional: Bring Your Own LLM',
    ];

    const [isYearly, setIsYearly] = useState(false);

    // const proPrice = isYearly ? 299 * 12 * 0.9 : 299; // 10% discount for yearly
    const proPrice = isYearly ? 299 * 12 * 0.91 : 299; // 10% discount for yearly

    return (
        <section className="relative py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-6 text-4xl md:text-5xl">
                        Wählen Sie Ihre AI-Lösung
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-slate-500 dark:text-slate-400">
                        Vom einfachen SmartDesk bis zur vollständig anpassbaren
                        Pro-Version
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-7xl"
                >
                    {/* Comparison Cards */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* SmartDesk Card */}
                        <Card className="h-full border-r">
                            <CardContent className="flex h-full flex-col items-start justify-between p-8">
                                <div>
                                    <div className="mb-8 text-center">
                                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <h3 className="mb-3 text-2xl">
                                            Placetel AI SmartDesk
                                        </h3>
                                        <p className="mb-6 max-w-sm text-sm text-balance">
                                            Der einfachste Voice Agent auf dem
                                            Markt - ideal für wiederkehrende
                                            Anliegen
                                        </p>

                                        <div className="mb-4">
                                            <div className="mb-2 text-5xl">
                                                0€
                                            </div>
                                            <div className=" ">Eur/Monat</div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                                (+0,39€ pro Minute)
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-y border-slate-700 py-6">
                                        <div className="space-y-4">
                                            {smartDeskFeatures.map(
                                                (feature, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-start"
                                                    >
                                                        <Check className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-blue-500" />
                                                        <span className="text-sm">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Button
                                        size="lg"
                                        className="bg-blue-600 text-slate-100 hover:bg-blue-700"
                                    >
                                        SmartDesk testen
                                    </Button>

                                    <Button size="lg" variant="outline">
                                        Mehr erfahren
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Pro Card */}
                        {/* Pro Card */}
                        <Card className="h-full">
                            <CardContent className="flex h-full flex-col items-start justify-between p-8">
                                <div>
                                    <div className="mb-8 text-center">
                                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500">
                                            <Zap className="h-6 w-6" />
                                        </div>
                                        <h3 className="mb-3 text-2xl">
                                            Placetel AI Pro
                                        </h3>
                                        <p className="mb-6 max-w-sm text-sm text-balance">
                                            Die flexible Enterprise-Lösung mit
                                            100% individualisierbaren Voice
                                            Agents
                                        </p>

                                        {/* Toggle Switch */}
                                        <div className="mb-4 flex items-center justify-center gap-3">
                                            <span
                                                className={cn(
                                                    isYearly &&
                                                        'text-slate-400 dark:text-slate-400'
                                                )}
                                            >
                                                Monatlich
                                            </span>

                                            <Switch
                                                checked={isYearly}
                                                onCheckedChange={setIsYearly}
                                                id="pro-payment-toggle"
                                            />

                                            <span
                                                className={cn(
                                                    !isYearly &&
                                                        'text-slate-400 dark:text-slate-400'
                                                )}
                                            >
                                                Jährlich
                                            </span>
                                        </div>

                                        <div className="mb-4">
                                            <div className="mb-2 text-5xl">
                                                <AnimateNumber suffix=" €">
                                                    {Number(
                                                        proPrice.toFixed(2)
                                                    )}
                                                </AnimateNumber>
                                            </div>

                                            <div className="text-sm">
                                                {isYearly
                                                    ? 'Eur/Jahr (10% Rabatt)'
                                                    : 'Eur/Monat'}
                                            </div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                                (+0,29€ pro Minute)
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-y border-slate-700 py-6">
                                        <div className="space-y-4">
                                            {proFeatures.map(
                                                (feature, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-start"
                                                    >
                                                        <Check className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-blue-500" />
                                                        <span className="text-sm">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Button
                                        size="lg"
                                        className="bg-purple-600 text-current hover:bg-purple-700"
                                    >
                                        AI Pro testen
                                    </Button>

                                    <Button size="lg" variant="outline">
                                        Mehr erfahren
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductComparison;
