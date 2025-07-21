"use client";

import { motion } from "framer-motion";
import { Check, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductComparison = () => {
  const smartDeskFeatures = [
    "In Minuten eingerichtet",
    "Autom. Anrufannahme & Weiterleitung",
    "Autom. Beantwortung von FAQs",
    "Zeitsteuerung & Fallbacks",
    "Auswahl von Stimme und Persönlichkeit",
  ];

  const proFeatures = [
    "Alles aus SmartDesk",
    "Zugriff auf das AI Pro Portal",
    "Anbindung an eigene Systeme, z.B. CRM oder ERP",
    "Eigene Prompts & komplexe Dialoge",
    "Detaillierte Auswertungen & Statistiken",
    "Debugging & Testing im Browser",
    "Optional: Bring Your Own LLM",
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Wählen Sie Ihre AI-Lösung
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Vom einfachen SmartDesk bis zur vollständig anpassbaren Pro-Version
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8 rounded-2xl">
            {/* SmartDesk Card */}
            <Card className="border-slate-700 bg-slate-900/50 hover:bg-slate-800/70 transition-all duration-300 hover:border-slate-600 group text-white">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl  mb-3">Placetel AI SmartDesk</h3>
                  <p className="text-sm leading-relaxed mb-6">
                    Der einfachste Voice Agent auf dem Markt - ideal für
                    wiederkehrende Anliegen
                  </p>

                  <div className="mb-4">
                    <div className="text-5xl mb-2">49€</div>
                    <div className=" ">Eur/Monat</div>
                    <div className="text-sm text-slate-400">
                      (+0,29€ pro Minute)
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-6">
                  <div className="space-y-4">
                    {smartDeskFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="mt-8 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    SmartDesk wählen
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pro Card */}
            <Card className="border-slate-700 bg-slate-900/50 hover:bg-slate-800/70 transition-all duration-300 hover:border-slate-600 group text-white">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl mb-3">Placetel AI Pro</h3>
                  <p className="text-sm leading-relaxed mb-6">
                    Die flexible Enterprise-Lösung mit 100% individualisierbaren
                    Voice Agents
                  </p>

                  <div className="mb-4">
                    <div className="text-5xl mb-2">299€</div>
                    <div className="">Eur/Monat</div>
                    <div className="text-sm text-slate-400">
                      (+0,29€ pro Minute)
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-6">
                  <div className="space-y-4">
                    {proFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="mt-8 bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    AI Pro wählen
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
