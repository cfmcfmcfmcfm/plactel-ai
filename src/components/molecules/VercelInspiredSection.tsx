"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Zap } from "lucide-react";

const VercelInspiredSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Grid-based Layout Container with visible borders */}
      <div className="grid grid-cols-12 gap-0 max-w-7xl mx-auto relative z-10">
        {/* Main Headline - spans grid columns and rows */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="col-span-7 flex flex-col justify-center px-6"
        >
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 leading-tight">
            Automatisierte Kommunikation
            <br />
            <span className="text-slate-600">
              mit der AI-Plattform für Telefonie
            </span>
          </h2>

          <p className="text-xl text-slate-600 mb-8  max-w-2xl">
            Reduzieren Sie Wartezeiten, entlasten Sie Ihr Team und verbessern
            Sie die Kundenerfahrung mit intelligenten Voice Agents.
          </p>

          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white w-fit"
          >
            Demo ansehen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Feature Cards - positioned in grid rows */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="col-span-5 col-start-8 flex items-center px-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-full">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  AI SmartDesk
                </h3>
                <p className="text-slate-600 text-sm ">
                  Plug & Play Voice Agent für wiederkehrende Anliegen.
                  Einrichtung in Minuten, ohne technische Hürden.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-3 text-slate-700 hover:text-slate-900 p-0"
                >
                  Mehr erfahren →
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="col-span-5 col-start-8 flex items-center px-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-full">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  AI Pro
                </h3>
                <p className="text-slate-600 text-sm ">
                  Vollständig anpassbare Enterprise-Lösung mit visueller
                  Workflow-Erstellung und System-Integration.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-3 text-slate-700 hover:text-slate-900 p-0"
                >
                  Dokumentation lesen →
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VercelInspiredSection;
