'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toPng } from 'html-to-image';
import { Calculator, Download, FileText, MessageCircle } from 'lucide-react';

const Summary = ({
    label,
    value,
}: {
    label: string;
    value: string | number;
}) => {
    return (
        <div className="flex justify-between border-b border-slate-300 pb-3 dark:border-slate-700">
            <span className="text-slate-700 dark:text-slate-400">{label}</span>
            <span className="text-slate-950 dark:text-white">{value}</span>
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
    const freikapazitaet = +(
        automatisierteAnrufe *
        (inputs.dauer / 60)
    ).toFixed(1);
    const zeitwert = +(freikapazitaet * inputs.stundensatz).toFixed(0);
    const potUmsatz = +(automatisierteAnrufe * 7).toFixed(0);
    const kosten = 49 + automatisierteAnrufe * (inputs.dauer * 0.29);
    const roi = +((zeitwert + potUmsatz) / kosten).toFixed(1);

    const format = (num: number | string) =>
        typeof num === 'number' ? num.toLocaleString('de-DE') : num;

    const downloadCSV = () => {
        const rows = [
            ['Kennzahl', 'Wert'],
            ['Automatisierte Anrufe', automatisierteAnrufe],
            ['Freigewordene Kapazität (Std.)', freikapazitaet],
            ['Wert der gewonnenen Zeit (€)', zeitwert],
            ['Pot. zusätzlicher Umsatz (€)', potUmsatz],
            ['AI-Kosten pro Monat (€)', kosten.toFixed(2)],
            ['Return on AI-Investment', roi + 'x'],
        ];

        const csvContent =
            'data:text/csv;charset=utf-8,' +
            rows.map((row) => row.join(';')).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'roi-rechner-ergebnis.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const downloadPNG = () => {
        const node = document.getElementById('roi-output');
        if (!node) return;

        toPng(node)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'roi-rechner.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error('Screenshot fehlgeschlagen', err);
            });
    };

    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/50">
                        <Calculator className="h-8 w-8 text-blue-400" />
                    </div>
                    <h2 className="mb-6 text-4xl md:text-5xl">
                        ROI{' '}
                        <span className="text-slate-700 dark:text-slate-400">
                            Rechner
                        </span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-slate-700 dark:text-slate-400">
                        Berechnen Sie Ihren Return on Investment mit Placetel AI
                    </p>
                </motion.div>

                <motion.div
                    className="grid overflow-clip rounded-2xl border border-slate-300 bg-slate-200/50 shadow-sm md:grid-cols-2 dark:border-slate-700 dark:bg-slate-800/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="p-4 lg:p-8">
                        <h3 className="mb-8 text-2xl">Ihre Parameter</h3>
                        <div className="space-y-8">
                            <div className="space-y-3">
                                <Label className="text-base text-slate-700 dark:text-slate-400">
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

                                <span className="block text-sm text-slate-700 dark:text-slate-400">
                                    {inputs.anrufe} Anrufe/Tag
                                </span>
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="space-y-3">
                                    <Label className="text-base text-slate-700 dark:text-slate-400">
                                        Dauer pro Anruf (Min)
                                    </Label>
                                    <Input
                                        type="number"
                                        value={inputs.dauer}
                                        onChange={(e) =>
                                            setInputs({
                                                ...inputs,
                                                dauer: +e.target.value,
                                            })
                                        }
                                        min={1}
                                        className="border-slate-700 bg-slate-700 text-white placeholder:text-slate-400 focus:border-slate-500"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label className="text-base text-slate-700 dark:text-slate-400">
                                        Stundensatz Mitarbeiter (€)
                                    </Label>
                                    <Input
                                        type="number"
                                        value={inputs.stundensatz}
                                        onChange={(e) =>
                                            setInputs({
                                                ...inputs,
                                                stundensatz: +e.target.value,
                                            })
                                        }
                                        min={1}
                                        className="border-slate-700 bg-slate-700 text-white placeholder:text-slate-400 focus:border-slate-500"
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
                        className="space-y-6 p-4 lg:p-8 dark:bg-slate-800/50"
                    >
                        <div className="mb-6 flex items-center space-x-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500">
                                <MessageCircle className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="text-xl">
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
                                value={format(zeitwert) + ' €'}
                            />
                            <Summary
                                label="Pot. zusätzlicher Umsatz"
                                value={format(potUmsatz) + ' €'}
                            />
                            <Summary
                                label="AI-Kosten pro Monat"
                                value={format(Math.round(kosten)) + ' €'}
                            />

                            <div className="flex justify-between border-b border-slate-300 pb-3 dark:border-slate-700">
                                <span className="text-slate-700 dark:text-slate-400">
                                    Return on AI-Investment
                                </span>
                                <span className="text-2xl text-green-400">
                                    {roi}×
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 space-y-3">
                            <Button size="lg" className="w-full">
                                Jetzt unverbindlich beraten lassen
                            </Button>
                            <div className="grid grid-cols-2 gap-3">
                                <Button variant="outline" onClick={downloadPNG}>
                                    <Download className="mr-2 h-4 w-4" />
                                    Als Bild
                                </Button>
                                <Button variant="outline" onClick={downloadCSV}>
                                    <FileText className="mr-2 h-4 w-4" />
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
