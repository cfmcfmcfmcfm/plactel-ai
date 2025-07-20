"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Clock,
  Users,
  CheckCircle,
  Stethoscope,
  Wrench,
  Shield,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AiSmartDeskPage = () => {
  const useCases = [
    {
      icon: Stethoscope,
      title: "Arztpraxis",
      subtitle:
        "Besser organisiert in der Arztpraxis – auch bei vollem Wartezimmer",
      description:
        "Gerade bei hohem Patientenaufkommen entlastet der AI SmartDesk das Praxisteam, indem er Anrufe übernimmt, Standardfragen klärt und dringende Anliegen gezielt weiterleitet – für mehr Ruhe am Empfang und bessere Erreichbarkeit.",
      color: "bg-blue-500",
    },
    {
      icon: Wrench,
      title: "Handwerk",
      subtitle: "Besser erreichbar im Handwerk – auch wenn niemand im Büro ist",
      description:
        "Auch ohne Bürobesetzung sorgt der AI SmartDesk dafür, dass kein Anruf verloren geht – er übernimmt die Kommunikation, filtert wichtige Anliegen heraus und entlastet so Außendienst und Büro spürbar.",
      color: "bg-orange-500",
    },
    {
      icon: Shield,
      title: "Versicherungen",
      subtitle:
        "Gezielte Hilfe statt Warteschleife – für die Versicherungsbranche",
      description:
        "Ob Schadensmeldung, Vertragsänderung oder Beratung – der AI SmartDesk versteht das Anliegen sofort und verbindet direkt zur richtigen Ansprechperson. So entfallen Warteschleifen und unnötige Weiterleitungen.",
      color: "bg-green-500",
    },
  ];

  const setupSteps = [
    "Begrüßung erstellen",
    "Anliegen & Weiterleitungen definieren",
    "Wissensquelle für FAQs hinterlegen",
    "Persönlichkeit wählen",
    "AI SmartDesk aktivieren",
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                Intelligente Telefonie
                <br />
                <span className="  text-slate-300">auf Knopfdruck</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Täglich wiederkehrende Anfragen blockieren Ressourcen – der
              Placetel AI SmartDesk übernimmt, entlastet und verbindet
              zuverlässig weiter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4 h-14"
              >
                Kostenlos testen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 text-lg px-8 py-4 h-14 bg-transparent"
              >
                Demo Call buchen
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              So hilft der Placetel AI SmartDesk
              <br />
              <span className="  text-slate-300">in der Praxis</span>
            </h2>
            <p className="text-xl text-slate-400">
              Intelligente Lösungen für reale Herausforderungen
            </p>
          </motion.div>

          <div className="space-y-12 relative">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-slate-700 bg-slate-900/50 hover:bg-slate-800/70 transition-all duration-300 hover:border-slate-600">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-6">
                          <div
                            className={`w-12 h-12 ${useCase.color} rounded-xl flex items-center justify-center mr-4`}
                          >
                            <useCase.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {useCase.title}
                            </h3>
                            <p className="text-slate-400 text-sm">
                              {useCase.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {useCase.description}
                        </p>

                        <Button className={`${useCase.color} hover:opacity-90`}>
                          Demo Call buchen
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>

                      <div className="relative">
                        <div className="bg-slate-800 rounded-2xl p-6 relative overflow-hidden border border-slate-700">
                          <div className="flex items-center justify-center h-48">
                            <div className="text-center">
                              <div
                                className={`w-16 h-16 ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                              >
                                <Play className="w-8 h-8 text-white" />
                              </div>
                              <p className="text-slate-300 font-medium">
                                Demo Video
                              </p>
                              <p className="text-sm text-slate-400">
                                Sehen Sie {useCase.title} in Aktion
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
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Einer, der{" "}
              <span className="  text-slate-300">nie Pause macht</span>
            </h2>
            <p className="text-xl text-slate-400">
              Die smarte Lösung für moderne Erreichbarkeit
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <h3 className="text-lg font-bold text-white mb-3">
                24/7 Erreichbarkeit
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Immer für Kunden da – selbst abends, am Wochenende oder an
                Feiertagen
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
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Plug & Play</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Direkt im Placetel Portal aktivieren – ganz ohne technische
                Hürden
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
                <Phone className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Perfekt integriert
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nahtlos in die Placetel Telefonanlage integriert – alles in
                einem System
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-600 transition-colors duration-300">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                80% Automatisierung
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Übernimmt bis zu 80% der Anrufe vollautomatisch und rund um die
                Uhr
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Einrichtung direkt im
                <br />
                <span className="  text-slate-300">Kundenportal</span>
              </h2>
              <p className="text-xl text-slate-400 mb-6 leading-relaxed">
                Schnell eingerichtet. Sofort einsatzbereit.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Einfach zusammenklicken statt aufwendig konfigurieren: Der AI
                SmartDesk wird Schritt für Schritt im Placetel Portal erstellt
                und ist sofort startklar – ganz ohne technische Hürden.
              </p>

              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4 h-14"
              >
                Kostenlos testen
                <ArrowRight className="ml-2 w-5 h-5" />
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
                  <h3 className="text-xl font-bold text-white mb-6">
                    In wenigen Schritten eingerichtet:
                  </h3>

                  <div className="space-y-4">
                    {setupSteps.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-slate-300 font-medium">
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
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für{" "}
              <span className="  text-slate-300">smarte Kommunikation?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Testen Sie jetzt den SmartDesk und verlieren Sie kein Gespräch –
              ganz ohne zusätzlichen Aufwand im Team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4 h-14"
              >
                Kostenlos testen
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 text-lg px-8 py-4 h-14 bg-transparent"
              >
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
