"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AiProPage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Eigene Voicebots für Ihre Hotline",
      description:
        "Auf Ihre Anforderungen zugeschnittene AI-Assistenten – abgestimmt auf Ihre Unternehmensprozesse.",
    },
    {
      icon: Settings,
      title: "Automatisierte Gesprächsanalyse & Routing",
      description:
        "Die AI erkennt Anliegen, Stimmungen oder Eskalationen und leitet automatisch an die passende Stelle weiter.",
    },
    {
      icon: Database,
      title: "Nahtlose Integration in Ihre Systeme",
      description:
        "Durch die nahtlose Anbindung an externe Systeme wie Datenbanken oder CRM-Lösungen ist die KI in der Lage, strukturierte Daten abzufragen und zu verarbeiten.",
    },
  ];

  const capabilities = [
    "Intelligente Spracherkennung",
    "Automatisierte Terminvergabe",
    "E-Mail-Versand von Unterlagen",
    "Reparatur- & Servicemeldungen",
    "Automatische Ticketerstellung & Eskalation",
  ];

  return (
    <div className="min-h-screen ">
      {/* Navigation */}

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
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="font-light text-5xl md:text-6xl lg:text-7xl  text-white mb-8 leading-none">
                Flexibler AI-Agent für
                <br />
                <span className="text-slate-300">komplexe Anforderungen</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-400 mb-12 max-w-4xl mx-auto "
            >
              Hohe Gesprächsvolumen, individuelle Anliegen, heterogene Systeme?
              AI Pro erkennt Inhalte live, unterstützt im Gespräch, dokumentiert
              automatisch – und fügt sich reibungslos in bestehende Abläufe ein.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg">
                Beta-Zugang anfordern
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Demo Call buchen
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Flexibilität bis ins
              <br />
              <span className="  text-slate-300">kleinste Detail</span>
            </h2>
            <p className="text-xl text-slate-400">
              Die smarte Lösung für komplexe Kommunikation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-slate-700 bg-slate-900/50 hover:bg-slate-800/70 transition-all duration-300 hover:border-slate-600 group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl  text-white mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-slate-400 ">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800 rounded-2xl p-8 mb-8 border border-slate-700">
                <h3 className="text-xl  text-white mb-4">
                  Use Case: Automatisierte Koordination von
                  Rauchwarnmelder-Wartungen
                </h3>
                <p className="text-slate-300 ">
                  Bei der Minol GmbH & Co. KG kommt es regelmäßig zu Stoßzeiten,
                  wenn viele Kunden gleichzeitig wegen der Wartung ihrer
                  Rauchwarnmelder anrufen. Das führt zu Überlastung im
                  Kundenservice, langen Wartezeiten und ineffizienter
                  Terminvergabe.
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <h4 className="text-lg  text-white mb-4 flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                  Lösung mit Placetel AI Pro
                </h4>
                <p className="text-slate-300 mb-4 ">
                  Zufriedenere Kunden, spürbare Entlastung im Team und mehr Zeit
                  fürs Wesentliche
                </p>

                <div className="space-y-3">
                  {capabilities.map((capability, index) => (
                    <div
                      key={index}
                      className="flex items-center text-slate-300"
                    >
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{capability}</span>
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
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl  text-white mb-2">Demo Call</h3>
                    <p className="text-slate-400">Sehen Sie AI Pro in Aktion</p>
                  </div>

                  <div className=" rounded-xl p-6 mb-6 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm  text-slate-400">
                        Workflow Beispiel
                      </span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-slate-300">
                          Anruf: Wartung Rauchwarnmelder
                        </span>
                      </div>
                      <div className="flex items-center ml-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-slate-300">
                          CRM-Abfrage: Kundendaten
                        </span>
                      </div>
                      <div className="flex items-center ml-6">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-slate-300">
                          Termin gebucht & E-Mail versendet
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Demo Call buchen
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Editor Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl  text-white mb-6">
                <span className="  text-slate-300">Visueller</span> Editor
              </h2>
              <p className="text-xl text-slate-400 mb-6 ">
                Maßgeschneiderte Gesprächsverläufe – ohne Aufwand.
              </p>
              <p className="text-slate-300 mb-8 ">
                Konfigurieren Sie Ihre Voicebots ganz nach Ihrem Bedarf und
                behalten Sie jederzeit die volle Kontrolle auf unserer
                Plattform. Mit dem Visual Editor verketten Sie einfach
                verschiedene Anweisungen (Prompts) hinter einer Rufnummer, um
                nahezu jede Art von Kundenanfrage vorzuqualifizieren oder
                komplett zu automatisieren.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-slate-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>
                    Einfache visuelle Übersicht zum Anlegen und Bearbeiten Ihrer
                    Bots
                  </span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>
                    Mehrere Bots einfach parallel erstellen und miteinander
                    vernetzen
                  </span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>Volle Kontrolle über das Finetuning Ihrer Bots</span>
                </div>
              </div>

              <Button size="lg">
                Jetzt ausprobieren
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-slate-700 bg-slate-900/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className=" p-4 flex items-center justify-between border-b border-slate-700">
                    <div className="flex items-center space-x-2">
                      <Code className="w-5 h-5 text-white" />
                      <span className="text-white ">Visual Editor</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-8 bg-slate-800">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-slate-700 rounded-lg p-3 shadow-sm border border-slate-600">
                            <span className="text-sm  text-slate-200">
                              Anruf entgegennehmen
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 ml-8">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-slate-700 rounded-lg p-3 shadow-sm border border-slate-600">
                            <span className="text-sm  text-slate-200">
                              Anliegen klassifizieren
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 ml-16">
                        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                          <Database className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-slate-700 rounded-lg p-3 shadow-sm border border-slate-600">
                            <span className="text-sm  text-slate-200">
                              CRM-System abfragen
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 ml-8">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-slate-700 rounded-lg p-3 shadow-sm border border-slate-600">
                            <span className="text-sm  text-slate-200">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl  text-white mb-6">
              Automatisierte Kommunikation
              <br />
              <span className="  text-slate-300">auf höchstem Niveau</span>
            </h2>
            <p className="text-xl text-slate-400">
              Individuell, skalierbar und sofort einsatzbereit
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
                <Settings className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg  text-white mb-3">
                Vollständig anpassbar
              </h3>
              <p className="text-slate-400 text-sm ">
                Maßgeschneiderte Workflows für Ihre spezifischen
                Geschäftsprozesse
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
                <Database className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg  text-white mb-3">System-Integration</h3>
              <p className="text-slate-400 text-sm ">
                Nahtlose Anbindung an CRM, Datenbanken und bestehende Tools
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
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg  text-white mb-3">Skalierbar</h3>
              <p className="text-slate-400 text-sm ">
                Wächst mit Ihrem Unternehmen und passt sich an veränderte
                Anforderungen an
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
                <Clock className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg  text-white mb-3">Sofort einsatzbereit</h3>
              <p className="text-slate-400 text-sm ">
                Schnelle Implementierung ohne lange Einrichtungszeiten
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
              Bereit für komplexe
              <br />
              <span className="  text-slate-300">AI-Automatisierung?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 ">
              Entdecken Sie die Möglichkeiten von AI Pro und automatisieren Sie
              auch die komplexesten Kommunikationsprozesse in Ihrem Unternehmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
