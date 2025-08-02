'use client';

import { motion } from 'framer-motion';
import {
    ArrowRight,
    Phone,
    Clock,
    Users,
    Check,
    Stethoscope,
    Wrench,
    Shield,
    Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AiSmartDeskPage = () => {
    const useCases = [
        {
            icon: Stethoscope,
            title: 'Arztpraxis',
            subtitle:
                'Besser organisiert in der Arztpraxis – auch bei vollem Wartezimmer',
            description:
                'Gerade bei hohem Patientenaufkommen entlastet der AI SmartDesk das Praxisteam, indem er Anrufe übernimmt, Standardfragen klärt und dringende Anliegen gezielt weiterleitet – für mehr Ruhe am Empfang und bessere Erreichbarkeit.',
            color: 'bg-blue-500',
        },
        {
            icon: Wrench,
            title: 'Handwerk',
            subtitle:
                'Besser erreichbar im Handwerk – auch wenn niemand im Büro ist',
            description:
                'Auch ohne Bürobesetzung sorgt der AI SmartDesk dafür, dass kein Anruf verloren geht – er übernimmt die Kommunikation, filtert wichtige Anliegen heraus und entlastet so Außendienst und Büro spürbar.',
            color: 'bg-orange-500',
        },
        {
            icon: Shield,
            title: 'Versicherungen',
            subtitle:
                'Gezielte Hilfe statt Warteschleife – für die Versicherungsbranche',
            description:
                'Ob Schadensmeldung, Vertragsänderung oder Beratung – der AI SmartDesk versteht das Anliegen sofort und verbindet direkt zur richtigen Ansprechperson. So entfallen Warteschleifen und unnötige Weiterleitungen.',
            color: 'bg-green-500',
        },
    ];

    const setupSteps = [
        'Begrüßung erstellen',
        'Anliegen & Weiterleitungen definieren',
        'Wissensquelle für FAQs hinterlegen',
        'Persönlichkeit wählen',
        'AI SmartDesk aktivieren',
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
                            className="mb-8"
                        >
                            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500">
                                <Phone className="h-8 w-8 text-current" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <h1 className="mb-8 text-5xl leading-none font-light tracking-tight md:text-6xl lg:text-7xl">
                                Intelligente Telefonie
                                <br />
                                <span className="text-slate-600 dark:text-slate-400">
                                    auf Knopfdruck
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mx-auto mb-12 max-w-4xl text-xl text-slate-600 dark:text-slate-400"
                        >
                            Täglich wiederkehrende Anfragen blockieren
                            Ressourcen – der Placetel AI SmartDesk übernimmt,
                            entlastet und verbindet zuverlässig weiter.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                        >
                            <Button size="lg">
                                Kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Demo Call buchen
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-6 text-4xl text-current md:text-5xl">
                            So hilft der Placetel AI SmartDesk
                            <br />
                            <span className="text-slate-400 dark:text-slate-400">
                                in der Praxis
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            Intelligente Lösungen für reale Herausforderungen
                        </p>
                    </motion.div>

                    <div className="relative space-y-12">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <Card className="border-slate-700 bg-slate-900/50 transition-all duration-300 hover:border-slate-700 hover:bg-slate-800/70">
                                    <CardContent className="p-8">
                                        <div className="grid items-center gap-8 lg:grid-cols-2">
                                            <div>
                                                <div className="mb-6 flex items-center">
                                                    <div
                                                        className={`h-12 w-12 ${useCase.color} mr-4 flex items-center justify-center rounded-xl`}
                                                    >
                                                        <useCase.icon className="h-6 w-6 text-current" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl text-current">
                                                            {useCase.title}
                                                        </h3>
                                                        <p className="text-sm text-slate-400 dark:text-slate-400">
                                                            {useCase.subtitle}
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className="mb-6 text-slate-400 dark:text-slate-400">
                                                    {useCase.description}
                                                </p>

                                                <Button
                                                    className={`${useCase.color} hover:opacity-90`}
                                                >
                                                    Demo Call buchen
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </div>

                                            <div className="relative">
                                                <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-6">
                                                    <div className="flex h-48 items-center justify-center">
                                                        <div className="text-center">
                                                            <div
                                                                className={`h-16 w-16 ${useCase.color} mx-auto mb-4 flex items-center justify-center rounded-2xl`}
                                                            >
                                                                <Play className="h-8 w-8 text-current" />
                                                            </div>
                                                            <p className="text-slate-600 dark:text-slate-400">
                                                                Demo Video
                                                            </p>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                                Sehen Sie{' '}
                                                                {useCase.title}{' '}
                                                                in Aktion
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
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
                            Einer, der{' '}
                            <span className="text-slate-600 dark:text-slate-400">
                                nie Pause macht
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            Die smarte Lösung für moderne Erreichbarkeit
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group text-center"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-700 transition-colors duration-300 group-hover:bg-slate-600">
                                <Clock className="h-8 w-8 text-blue-400" />
                            </div>
                            <h3 className="mb-3 text-lg">
                                24/7 Erreichbarkeit
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Immer für Kunden da – selbst abends, am
                                Wochenende oder an Feiertagen
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
                                <Check className="h-8 w-8 text-green-400" />
                            </div>
                            <h3 className="mb-3 text-lg">Plug & Play</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Direkt im Placetel Portal aktivieren – ganz ohne
                                technische Hürden
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
                                <Phone className="h-8 w-8 text-purple-400" />
                            </div>
                            <h3 className="mb-3 text-lg">Perfekt integriert</h3>
                            <p className="text-sm text-slate-400 dark:text-slate-400">
                                Nahtlos in die Placetel Telefonanlage integriert
                                – alles in einem System
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="group text-center"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-700 transition-colors duration-300 group-hover:bg-slate-600">
                                <Users className="h-8 w-8 text-orange-400" />
                            </div>
                            <h3 className="mb-3 text-lg text-slate-50">
                                80% Automatisierung
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Übernimmt bis zu 80% der Anrufe vollautomatisch
                                und rund um die Uhr
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Setup Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-6 text-4xl text-slate-50 md:text-5xl">
                                Einrichtung direkt im
                                <br />
                                <span className="text-slate-600 dark:text-slate-400">
                                    Kundenportal
                                </span>
                            </h2>
                            <p className="mb-6 text-xl text-slate-600 dark:text-slate-400">
                                Schnell eingerichtet. Sofort einsatzbereit.
                            </p>
                            <p className="mb-8 text-slate-600 dark:text-slate-400">
                                Einfach zusammenklicken statt aufwendig
                                konfigurieren: Der AI SmartDesk wird Schritt für
                                Schritt im Placetel Portal erstellt und ist
                                sofort startklar – ganz ohne technische Hürden.
                            </p>

                            <Button size="lg">
                                Kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-slate-700 bg-slate-900/50">
                                <CardContent className="p-8">
                                    <h3 className="mb-6 text-xl text-slate-50">
                                        In wenigen Schritten eingerichtet:
                                    </h3>

                                    <div className="space-y-4">
                                        {setupSteps.map((step, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center"
                                            >
                                                <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                                    <span className="text-sm text-slate-50">
                                                        {index + 1}
                                                    </span>
                                                </div>
                                                <span className="text-slate-600 dark:text-slate-400">
                                                    {step}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-6 text-4xl text-slate-50 md:text-5xl">
                            Bereit für{' '}
                            <span className="text-slate-600 dark:text-slate-400">
                                smarte Kommunikation?
                            </span>
                        </h2>
                        <p className="mb-8 text-xl text-slate-600 dark:text-slate-400">
                            Testen Sie jetzt den SmartDesk und verlieren Sie
                            kein Gespräch – ganz ohne zusätzlichen Aufwand im
                            Team.
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
};

export default AiSmartDeskPage;
