"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toPng } from "html-to-image";
import { Calculator, Download, FileText, MessageCircle } from "lucide-react";

const Summary = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div className="flex justify-between border-b border-slate-700 pb-3">
      <span className="text-slate-400">{label}</span>
      <span className=" text-white">{value}</span>
    </div>
  );
};

const RoiCalculator = () => {
  const [inputs, setInputs] = useState({
    faqs: true,
    weiterleitungen: true,
    termine: true,
    bestellungen: false,
    anrufe: 350,
    dauer: 5,
    stundensatz: 35,
  });

  const automationsgrad =
    inputs.faqs || inputs.weiterleitungen || inputs.termine ? 0.5 : 0.1;
  const tageProMonat = 20;
  const automatisierteAnrufe = Math.round(
    inputs.anrufe * tageProMonat * automationsgrad
  );
  const freikapazitaet = +(automatisierteAnrufe * (inputs.dauer / 60)).toFixed(
    1
  );
  const zeitwert = +(freikapazitaet * inputs.stundensatz).toFixed(0);
  const potUmsatz = +(automatisierteAnrufe * 7).toFixed(0);
  const kosten = 49 + automatisierteAnrufe * (inputs.dauer * 0.29);
  const roi = +((zeitwert + potUmsatz) / kosten).toFixed(1);

  const format = (num: number | string) =>
    typeof num === "number" ? num.toLocaleString("de-DE") : num;

  const downloadCSV = () => {
    const rows = [
      ["Kennzahl", "Wert"],
      ["Automatisierte Anrufe", automatisierteAnrufe],
      ["Freigewordene Kapazität (Std.)", freikapazitaet],
      ["Wert der gewonnenen Zeit (€)", zeitwert],
      ["Pot. zusätzlicher Umsatz (€)", potUmsatz],
      ["AI-Kosten pro Monat (€)", kosten.toFixed(2)],
      ["Return on AI-Investment", roi + "x"],
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map((row) => row.join(";")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "roi-rechner-ergebnis.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPNG = () => {
    const node = document.getElementById("roi-output");
    if (!node) return;

    toPng(node)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "roi-rechner.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Screenshot fehlgeschlagen", err);
      });
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Calculator className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl  text-white mb-6">
            ROI <span className="text-slate-300">Rechner</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Berechnen Sie Ihren Return on Investment mit Placetel AI
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl  text-white mb-8">Ihre Parameter</h3>
            <div className="space-y-8">
              <div className="space-y-3">
                <Label className="text-slate-300 text-base ">
                  Tägliche Anrufe
                </Label>
                <Slider
                  defaultValue={[inputs.anrufe]}
                  min={0}
                  max={1000}
                  step={1}
                  onValueChange={([val]) =>
                    setInputs({ ...inputs, anrufe: val })
                  }
                  className="w-full"
                />
                <span className="text-sm text-slate-400 block">
                  {inputs.anrufe} Anrufe/Tag
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-slate-300 text-base ">
                    Dauer pro Anruf (Min)
                  </Label>
                  <Input
                    type="number"
                    value={inputs.dauer}
                    onChange={(e) =>
                      setInputs({ ...inputs, dauer: +e.target.value })
                    }
                    min={1}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
                  />
                </div>
                <div className="space-y-3">
                  <Label className="text-slate-300 text-base ">
                    Stundensatz Mitarbeiter (€)
                  </Label>
                  <Input
                    type="number"
                    value={inputs.stundensatz}
                    onChange={(e) =>
                      setInputs({ ...inputs, stundensatz: +e.target.value })
                    }
                    min={1}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            id="roi-output"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-8 space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl  text-white">
                Ihr monatlicher AI-Mehrwert
              </h3>
            </div>

            <div className="space-y-4">
              <Summary
                label="Automatisierte Anrufe"
                value={format(automatisierteAnrufe)}
              />
              <Summary
                label="Freigewordene Kapazität"
                value={`${freikapazitaet} Std.`}
              />
              <Summary
                label="Wert der gewonnenen Zeit"
                value={format(zeitwert) + " €"}
              />
              <Summary
                label="Pot. zusätzlicher Umsatz"
                value={format(potUmsatz) + " €"}
              />
              <Summary
                label="AI-Kosten pro Monat"
                value={format(Math.round(kosten)) + " €"}
              />
              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-slate-400">Return on AI-Investment</span>
                <span className=" text-2xl text-green-400">{roi}×</span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Button size="lg" className="w-full">
                Jetzt unverbindlich beraten lassen
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" onClick={downloadPNG}>
                  <Download className="w-4 h-4 mr-2" />
                  Als Bild
                </Button>
                <Button variant="outline" onClick={downloadCSV}>
                  <FileText className="w-4 h-4 mr-2" />
                  CSV Export
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoiCalculator;
