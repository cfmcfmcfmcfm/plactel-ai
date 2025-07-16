"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
// import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toPng } from "html-to-image";

const Summary = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
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
    <section className="p-2">
      <motion.section
        className="bg-neutral-50 border rounded-2xl p-6 md:p-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-2xl mb-12">ROI Rechner</h2>

          <div className="space-y-8">
            {/* {[
              { key: "faqs", label: "FAQs" },
              { key: "weiterleitungen", label: "Weiterleitungen" },
              { key: "termine", label: "Terminvereinbarungen" },
              { key: "bestellungen", label: "Bestellungen & Auftragsannahme" },
            ].map(({ key, label }) => (
              <div className="flex items-center justify-between" key={key}>
                <span>{label}</span>
                <Switch
                  checked={inputs[key]}
                  onCheckedChange={(val) => setInputs({ ...inputs, [key]: val })}
                />
              </div>
            ))} */}

            <div className="space-y-2">
              <Label>Tägliche Anrufe</Label>

              <Slider
                defaultValue={[inputs.anrufe]}
                min={0}
                max={1000}
                step={1}
                onValueChange={([val]) => setInputs({ ...inputs, anrufe: val })}
              />

              <span className="text-sm text-muted-foreground">
                {inputs.anrufe} Anrufe/Tag
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label>Dauer pro Anruf (Min)</Label>

                <Input
                  type="number"
                  value={inputs.dauer}
                  onChange={(e) =>
                    setInputs({ ...inputs, dauer: +e.target.value })
                  }
                  min={1}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Stundensatz Mitarbeiter (€)</Label>
                <Input
                  type="number"
                  value={inputs.stundensatz}
                  onChange={(e) =>
                    setInputs({ ...inputs, stundensatz: +e.target.value })
                  }
                  min={1}
                />
              </div>
            </div>

            {/* <Button className="mt-4 w-full">Jetzt berechnen</Button> */}
          </div>
        </div>

        <motion.div
          id="roi-output"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-neutral-100 rounded-xl p-6 space-y-4"
        >
          <h2 className="text-xl">Ihr monatlicher AI-Mehrwert</h2>

          <div className="grid grid-cols-1 gap-3 text-sm">
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
              value={format(kosten) + " €"}
            />
            <Summary label="Return on AI-Investment" value={`${roi}×`} />
          </div>

          <div className="mt-8 flex flex-col gap-2">
            {/* <Button variant="outline">Ergebnisse herunterladen</Button> */}

            <Button variant="outline" onClick={downloadPNG}>
              Als Bild speichern
            </Button>

            <Button variant="outline" onClick={downloadCSV}>
              CSV herunterladen
            </Button>

            <Button>Jetzt unverbindlich beraten lassen</Button>
          </div>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default RoiCalculator;
