"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AiSmartDeskPage = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="px-6 py-32 text-center justify-center w-full items-center gap-8 flex flex-col">
        <div className="flex flex-col gap-8 max-w-4xl text-balance">
          <motion.ul className="flex gap-8 items-center justify-center">
            <li>
              <div className="h-[1em] w-[1em] bg-accent-primary rounded-full inline-flex mr-1 translate-y-0.5"></div>
              80% automatisiert
            </li>
            <li>
              <div className="h-[1em] w-[1em] bg-accent-primary rounded-full inline-flex mr-1 translate-y-0.5"></div>
              Echtzeit-AI
            </li>

            <li>
              <div className="h-[1em] w-[1em] bg-accent-primary rounded-full inline-flex mr-1 translate-y-0.5"></div>
              Sofort einsetzbar
            </li>
          </motion.ul>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold"
          >
            Intelligente Telefonie,
            <br />
            <span className="font-normal">die für Sie mitdenkt.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl"
          >
            Der <strong>Placetel AI SmartDesk</strong> übernimmt Anrufe,
            entlastet Ihr Team und sorgt für Erreichbarkeit rund um die Uhr.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button size="lg" variant="secondary">
              Jetzt kostenlos testen
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem / Lösung Section */}
      <section className="bg-gray-50 text-black py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Ihre Kunden rufen an. Ihr Team ist am Limit?
          </h2>
          <p className="text-lg mb-6">
            Ob in der Arztpraxis, im Handwerk oder im Kundenservice:
            <br />
            Der AI SmartDesk beantwortet Fragen, leitet gezielt weiter und
            schafft mehr Zeit für das Wesentliche.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-10">
            <li>
              <h3 className="font-semibold mb-2">🏥 Arztpraxis</h3>
              <p>
                Entlastet das Empfangsteam bei hohem Patientenaufkommen.
                Standardanfragen werden automatisiert beantwortet.
              </p>
            </li>
            <li>
              <h3 className="font-semibold mb-2">🔧 Handwerk</h3>
              <p>
                Auch ohne Bürobesetzung erreichbar bleiben. Der SmartDesk
                filtert und leitet weiter – ganz automatisch.
              </p>
            </li>
            <li>
              <h3 className="font-semibold mb-2">💼 Versicherung</h3>
              <p>
                Ob Beratung oder Schadensmeldung – Anliegen werden erkannt und
                sofort an die richtige Stelle vermittelt.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">
            In wenigen Minuten einsatzbereit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <ol className="space-y-3 list-decimal list-inside">
                <li>Begrüßung einsprechen</li>
                <li>Anliegen & Weiterleitungen definieren</li>
                <li>Wissensquelle für FAQs hinterlegen</li>
                <li>Persönlichkeit auswählen</li>
                <li>AI SmartDesk aktivieren</li>
              </ol>
            </div>
            <div>
              <p className="mb-3">
                Die Einrichtung erfolgt direkt im Placetel Webportal. Kein
                technisches Wissen erforderlich, keine Software-Installation.
              </p>
              <p className="font-semibold">
                Einfach zusammenklicken und loslegen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="bg-gray-100 text-black py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl  font-semibold hover:font-extrabold transition-all mb-10">
            Ihre Vorteile mit dem SmartDesk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-2">⚡ 80 % automatisiert</h3>
              <p>
                Der SmartDesk bearbeitet bis zu 80 % aller Anrufe selbstständig.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">🧠 Echtzeit-AI</h3>
              <p>Dialoge klingen menschlich, kontextbezogen und dynamisch.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">🚀 Sofort einsetzbar</h3>
              <p>
                Direkt im Kundenportal aktivierbar – ohne Software oder
                IT-Abteilung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Bereit für smarte Kommunikation?
        </h2>
        <p className="mb-6">
          Testen Sie den SmartDesk jetzt kostenlos – kein Risiko, keine
          Wartezeit.
        </p>
        <Button size="lg">Jetzt kostenlos testen</Button>
      </section>
    </div>
  );
};

export default AiSmartDeskPage;
