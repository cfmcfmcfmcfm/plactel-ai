'use client';

import { motion } from 'framer-motion';
import {
    ArrowRight,
    Zap,
    Settings,
    Database,
    MessageSquare,
    Check,
    Play,
    Code,
    Users,
    Clock,
    Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AiProPage = () => {
    const features = [
        {
            icon: MessageSquare,
            title: 'Eigene Voice Agents für Ihre Hotline',
            description:
                'Auf Ihre Anforderungen zugeschnittene AI-Assistenten – abgestimmt auf Ihre Unternehmensprozesse.',
        },
        {
            icon: Settings,
            title: 'Automatisierte Gesprächsanalyse & Routing',
            description:
                'Die AI erkennt Anliegen, Stimmungen oder Eskalationen und leitet automatisch an die passende Stelle weiter.',
        },
        {
            icon: Database,
            title: 'Nahtlose Integration in Ihre Systeme',
            description:
                'Durch die nahtlose Anbindung an externe Systeme wie Datenbanken oder CRM-Lösungen ist die KI in der Lage, strukturierte Daten abzufragen und zu verarbeiten.',
        },
    ];

    const capabilities = [
        'Intelligente Spracherkennung',
        'Automatisierte Terminvergabe',
        'E-Mail-Versand von Unterlagen',
        'Reparatur- & Servicemeldungen',
        'Automatische Ticketerstellung & Eskalation',
    ];

    return (
        <div className="min-h-screen">
            {/* Navigation */}

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
                            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500">
                                <Zap className="h-8 w-8" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <h1 className="mb-8 text-5xl leading-none md:text-6xl lg:text-7xl">
                                Flexibler AI-Agent für
                                <br />
                                <span className="text-slate-400">
                                    komplexe Anforderungen
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mx-auto mb-12 max-w-4xl text-xl text-slate-600 dark:text-slate-400"
                        >
                            Hohe Gesprächsvolumen, individuelle Anliegen,
                            heterogene Systeme? AI Pro erkennt Inhalte live,
                            unterstützt im Gespräch, dokumentiert automatisch –
                            und fügt sich reibungslos in bestehende Abläufe ein.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                        >
                            <Button size="lg">
                                Beta-Zugang anfordern
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Demo Call buchen
                            </Button>
                        </motion.div>
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
                            Flexibilität bis ins
                            <br />
                            <span className="text-slate-600 dark:text-slate-400">
                                kleinste Detail
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            Die smarte Lösung für komplexe Kommunikation
                        </p>
                    </motion.div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {features.map((feature, index) => (
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
                                <Card className="group h-full border-slate-300 bg-slate-200/50 transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/50 dark:hover:border-slate-700 dark:hover:bg-slate-800/70">
                                    <CardContent className="p-8">
                                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500 transition-transform duration-300 group-hover:scale-110">
                                            <feature.icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="mb-4 text-xl">
                                            {feature.title}
                                        </h3>

                                        <p className="dark: text-slate-400">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Case Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-8 rounded-2xl border border-slate-700 bg-slate-800 p-8">
                                <h3 className="mb-4 text-xl">
                                    Use Case: Automatisierte Koordination von
                                    Rauchwarnmelder-Wartungen
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Bei der Minol GmbH & Co. KG kommt es
                                    regelmäßig zu Stoßzeiten, wenn viele Kunden
                                    gleichzeitig wegen der Wartung ihrer
                                    Rauchwarnmelder anrufen. Das führt zu
                                    Überlastung im Kundenservice, langen
                                    Wartezeiten und ineffizienter Terminvergabe.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
                                <h4 className="mb-4 flex items-center text-lg">
                                    <Check className="mr-2 h-5 w-5 text-green-400" />
                                    Lösung mit Placetel AI Pro
                                </h4>
                                <p className="mb-4 text-slate-400">
                                    Zufriedenere Kunden, spürbare Entlastung im
                                    Team und mehr Zeit fürs Wesentliche
                                </p>

                                <div className="space-y-3">
                                    {capabilities.map((capability, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center text-slate-400"
                                        >
                                            <Check className="mr-3 h-4 w-4 flex-shrink-0 text-green-400" />
                                            <span className="text-sm">
                                                {capability}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-slate-700 bg-slate-900/50">
                                <CardContent className="p-8">
                                    <div className="mb-6 text-center">
                                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-500">
                                            <Play className="h-10 w-10 text-current" />
                                        </div>
                                        <h3 className="mb-2 text-xl">
                                            Demo Call
                                        </h3>
                                        <p className="text-slate-400">
                                            Sehen Sie AI Pro in Aktion
                                        </p>
                                    </div>

                                    <div className="mb-6 rounded-xl border border-slate-700 p-6">
                                        <div className="mb-4 flex items-center justify-between">
                                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                                Workflow Beispiel
                                            </span>
                                            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                                        </div>

                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-center">
                                                <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                                                <span className="text-slate-400">
                                                    Anruf: Wartung
                                                    Rauchwarnmelder
                                                </span>
                                            </div>
                                            <div className="ml-3 flex items-center">
                                                <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                                                <span className="text-slate-400">
                                                    CRM-Abfrage: Kundendaten
                                                </span>
                                            </div>
                                            <div className="ml-6 flex items-center">
                                                <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                                                <span className="text-slate-400">
                                                    Termin gebucht & E-Mail
                                                    versendet
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                        Demo Call buchen
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Visual Editor Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-6 text-4xl md:text-5xl">
                                <span className="text-slate-400">
                                    Visueller
                                </span>{' '}
                                Editor
                            </h2>
                            <p className="mb-6 text-xl text-slate-600 dark:text-slate-400">
                                Maßgeschneiderte Gesprächsverläufe – ohne
                                Aufwand.
                            </p>
                            <p className="mb-8 text-slate-400">
                                Konfigurieren Sie Ihre Voice Agents ganz nach
                                Ihrem Bedarf und behalten Sie jederzeit die
                                volle Kontrolle auf unserer Plattform. Mit dem
                                Visual Editor verketten Sie einfach verschiedene
                                Anweisungen (Prompts) hinter einer Rufnummer, um
                                nahezu jede Art von Kundenanfrage
                                vorzuqualifizieren oder komplett zu
                                automatisieren.
                            </p>

                            <div className="mb-8 space-y-4">
                                <div className="flex items-center text-slate-400">
                                    <Check className="mr-3 h-5 w-5 text-green-400" />
                                    <span>
                                        Einfache visuelle Übersicht zum Anlegen
                                        und Bearbeiten Ihrer Voice Agents
                                    </span>
                                </div>
                                <div className="flex items-center text-slate-400">
                                    <Check className="mr-3 h-5 w-5 text-green-400" />
                                    <span>
                                        Mehrere Voice Agents einfach parallel
                                        erstellen und miteinander vernetzen
                                    </span>
                                </div>
                                <div className="flex items-center text-slate-400">
                                    <Check className="mr-3 h-5 w-5 text-green-400" />
                                    <span>
                                        Volle Kontrolle über das Finetuning
                                        Ihrer Voice Agents
                                    </span>
                                </div>
                            </div>

                            <Button size="lg">
                                Jetzt ausprobieren
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="overflow-hidden border-slate-700 bg-slate-900/50">
                                <CardContent className="p-0">
                                    <div className="flex items-center justify-between border-b border-slate-700 p-4">
                                        <div className="flex items-center space-x-2">
                                            <Code className="h-5 w-5 text-current" />
                                            <span className="text-slate-100">
                                                Visual Editor
                                            </span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                            <div className="h-3 w-3 rounded-full bg-green-400"></div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-800 p-8">
                                        <div className="space-y-6">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500">
                                                    <Phone className="h-6 w-6 text-current" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="rounded-lg border border-slate-700 bg-slate-700 p-3 shadow-sm">
                                                        <span className="text-sm text-slate-400">
                                                            Anruf entgegennehmen
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ml-8 flex items-center space-x-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                                                    <MessageSquare className="h-6 w-6 text-current" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="rounded-lg border border-slate-700 bg-slate-700 p-3 shadow-sm">
                                                        <span className="text-sm text-slate-400">
                                                            Anliegen
                                                            klassifizieren
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ml-16 flex items-center space-x-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500">
                                                    <Database className="h-6 w-6 text-current" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="rounded-lg border border-slate-700 bg-slate-700 p-3 shadow-sm">
                                                        <span className="text-sm text-slate-400">
                                                            CRM-System abfragen
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ml-8 flex items-center space-x-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
                                                    <Check className="h-6 w-6 text-current" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="rounded-lg border border-slate-700 bg-slate-700 p-3 shadow-sm">
                                                        <span className="text-sm text-slate-400">
                                                            Aktion ausführen
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
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
                        <h2 className="mb-6 text-4xl md:text-5xl">
                            Automatisierte Kommunikation
                            <br />
                            <span className="text-slate-400">
                                auf höchstem Niveau
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            Individuell, skalierbar und sofort einsatzbereit
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
                                <Settings className="h-8 w-8 text-purple-400" />
                            </div>
                            <h3 className="mb-3 text-lg">
                                Vollständig anpassbar
                            </h3>
                            <p className="text-sm text-slate-400">
                                Maßgeschneiderte Workflows für Ihre spezifischen
                                Geschäftsprozesse
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
                                <Database className="h-8 w-8 text-blue-400" />
                            </div>
                            <h3 className="mb-3 text-lg">System-Integration</h3>
                            <p className="text-sm text-slate-400">
                                Nahtlose Anbindung an CRM, Datenbanken und
                                bestehende Tools
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
                                <Users className="h-8 w-8 text-green-400" />
                            </div>
                            <h3 className="mb-3 text-lg">Skalierbar</h3>
                            <p className="text-sm text-slate-400">
                                Wächst mit Ihrem Unternehmen und passt sich an
                                veränderte Anforderungen an
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
                                <Clock className="h-8 w-8 text-orange-400" />
                            </div>
                            <h3 className="mb-3 text-lg">
                                Sofort einsatzbereit
                            </h3>
                            <p className="text-sm text-slate-400">
                                Schnelle Implementierung ohne lange
                                Einrichtungszeiten
                            </p>
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
                        <h2 className="mb-6 text-4xl md:text-5xl">
                            Bereit für komplexe
                            <br />
                            <span className="text-slate-400">
                                AI-Automatisierung?
                            </span>
                        </h2>
                        <p className="mb-8 text-xl text-slate-600 dark:text-slate-400">
                            Entdecken Sie die Möglichkeiten von AI Pro und
                            automatisieren Sie auch die komplexesten
                            Kommunikationsprozesse in Ihrem Unternehmen.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button size="lg">Beta-Zugang anfordern</Button>
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

export default AiProPage;
