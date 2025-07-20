"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Phone,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import RoiCalculator from "../molecules/RoiCalculator";

export default function LandingPage() {
  const companies = [
    "Siemens",
    "BMW",
    "Deutsche Bank",
    "SAP",
    "Volkswagen",
    "Bosch",
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Bot className="w-8 h-8 text-slate-900" />
              </div>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap text-center justify-center mb-8 border-y border-slate-700 text-slate-400 text-sm uppercase tracking-wider"
            >
              <span className="min-w-72 border-r py-1 border-slate-700">
                #1 in Kundenzufriedenheit
              </span>
              <span className="min-w-72 border-r py-1 border-slate-700">
                #1 in Automatisierung
              </span>
              <span className="min-w-72 py-1">#1 Bewertung bei G2</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-none">
                Die #1 AI-Lösung
                <br />
                für{" "}
                <span className="bg-gradient-to-r from-blue-500 from-20% via-violet-300 to-green-300 inline-block text-transparent bg-clip-text">
                  Geschäftstelefonie
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button size="lg">Kostenlos testen</Button>
              <Button size="lg" variant="outline">
                Demo ansehen
              </Button>
            </motion.div>

            {/* Company Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60"
            >
              {companies.map((company, index) => (
                <div key={index} className="text-slate-400  text-lg">
                  {company}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Products Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl  text-white mb-6">
              Zwei Lösungen.
              <br />
              <span className="  text-slate-300">
                Unendliche Möglichkeiten.
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Von einfacher Automatisierung bis hin zu komplexen AI-Workflows
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI SmartDesk Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-slate-700 bg-slate-900/50 hover:bg-slate-800/70 transition-all duration-300 hover:border-slate-600 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl  text-white">AI SmartDesk</h3>
                      <p className="text-slate-400">Plug & Play Lösung</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                    24/7 Erreichbarkeit durch smarte Anrufannahme, Beantwortung
                    häufiger Fragen und gezielte Weiterleitung. Startklar in
                    wenigen Minuten.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Übernimmt bis zu 80% der Anrufe automatisch</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Einrichtung direkt im Placetel Portal</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>
                        Perfekt integriert in bestehende Telefonanlage
                      </span>
                    </div>
                  </div>

                  <Link href="/smartdesk">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:glow-effect transition-all duration-300">
                      Mehr erfahren
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Pro Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-slate-700 bg-slate-900/50 hover:bg-slate-800/70 transition-all duration-300 hover:border-slate-600 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl  text-white">AI Pro</h3>
                      <p className="text-slate-400">Maximale Flexibilität</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                    Flexibler AI-Agent für komplexe Anforderungen mit nahtloser
                    Integration in bestehende Systeme und maßgeschneiderten
                    Workflows.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Eigene Voicebots für individuelle Anliegen</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Visueller Editor für Gesprächsverläufe</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Integration in CRM und Datenbanken</span>
                    </div>
                  </div>

                  <Link href="/pro">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:glow-effect transition-all duration-300">
                      Mehr erfahren
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl  text-white mb-6">
              Warum Placetel AI?
            </h2>
            <p className="text-xl text-slate-400">
              Einfach. Intelligent. Sofort einsetzbar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-600 transition-colors duration-300">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl  text-white mb-4">24/7 Erreichbarkeit</h3>
              <p className="text-slate-400 leading-relaxed">
                Ihre Kunden erreichen Sie immer – auch außerhalb der
                Öffnungszeiten, am Wochenende und an Feiertagen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-600 transition-colors duration-300">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl  text-white mb-4">Team entlasten</h3>
              <p className="text-slate-400 leading-relaxed">
                Bis zu 80% der Anrufe werden automatisch bearbeitet. Mehr Zeit
                für die Gespräche, die wirklich zählen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-600 transition-colors duration-300">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl  text-white mb-4">Sofort startklar</h3>
              <p className="text-slate-400 leading-relaxed">
                Keine komplizierte Installation. Aktivierung direkt im Placetel
                Portal – in wenigen Minuten einsatzbereit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <RoiCalculator />

      {/* CTA Section */}
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl  text-white mb-6">
              Bereit für <span className=" ">smarte Kommunikation?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Testen Sie jetzt Placetel AI und verlieren Sie kein Gespräch –
              ganz ohne zusätzlichen Aufwand im Team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
