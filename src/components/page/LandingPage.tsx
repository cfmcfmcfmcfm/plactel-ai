"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, Users, Zap } from "lucide-react";
import ProductComparison from "../molecules/ProductComparison";
import RoiCalculator from "../molecules/RoiCalculator";
// import PlayfulHero from "../molecules/PlayfulHero";
// import VercelInspiredSection from "../molecules/VercelInspiredSection";

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
      {/* <PlayfulHero /> */}

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row text-center justify-center mb-8 border-y border-slate-700 text-slate-400 text-sm uppercase tracking-wider"
            >
              <span className="min-w-72 lg:border-r py-1 border-slate-700">
                #1 in Kundenzufriedenheit
              </span>
              <span className="min-w-72 lg:border-r py-1 border-slate-700">
                #1 in Automatisierung
              </span>
              <span className="min-w-72 py-1">#1 Bewertung bei G2</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-none text-slate-300">
                Die <span className="text-white">#1 AI-Lösung</span>
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
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap w-max">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="text-slate-400 font-medium text-lg mx-8 md:mx-12"
                  >
                    {company}
                  </div>
                ))}
                {companies.map((company, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="text-slate-400 font-medium text-lg mx-8 md:mx-12"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}

      {/* <section className="py-20 ">
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

          <div className="grid md:grid-cols-2 gap-0">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-none border-y border-l-0 border-r border-slate-700 bg-slate-900/30 hover:bg-slate-800/70 transition-all duration-300 hover:border-slate-600 group">
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

                  <p className="text-slate-300 mb-6 text-lg ">
                    24/7 Erreichbarkeit durch smarte Anrufannahme, Beantwortung
                    häufiger Fragen und gezielte Weiterleitung. Startklar in
                    wenigen Minuten.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      <span>Übernimmt bis zu 80% der Anrufe automatisch</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      <span>Einrichtung direkt im Placetel Portal</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      <span>
                        Perfekt integriert in bestehende Telefonanlage
                      </span>
                    </div>
                  </div>

                  <Link href="/smartdesk">
                    <Button
                      size="lg"
                      className="bg-blue-600 text-white hover:bg-blue-700 group-hover:glow-effect transition-all duration-300"
                    >
                      Mehr erfahren
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-none border-y border-x-0 border-slate-700 bg-slate-900/30 hover:bg-slate-800/70 transition-all duration-300 hover:border-slate-600 group">
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

                  <p className="text-slate-300 mb-6 text-lg ">
                    Flexibler AI-Agent für komplexe Anforderungen mit nahtloser
                    Integration in bestehende Systeme und maßgeschneiderten
                    Workflows.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      <span>Eigene Voicebots für individuelle Anliegen</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      <span>Visueller Editor für Gesprächsverläufe</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      <span>Integration in CRM und Datenbanken</span>
                    </div>
                  </div>

                  <Link href="/pro">
                    <Button
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white group-hover:glow-effect transition-all duration-300"
                    >
                      Mehr erfahren
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-20">
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
              <p className="text-slate-400 ">
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
              <p className="text-slate-400 ">
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
              <p className="text-slate-400 ">
                Keine komplizierte Installation. Aktivierung direkt im Placetel
                Portal – in wenigen Minuten einsatzbereit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ProductComparison />

      <RoiCalculator />

      {/* <VercelInspiredSection /> */}

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
            <p className="text-xl text-slate-400 mb-8 ">
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
