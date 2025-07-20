import AiProPage from "@/components/pages/AiProPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placetel AI Pro – Individuelle AI-Sprachdialoge für dein Business",
  description:
    "Mit AI Pro entwickelst du maßgeschneiderte Sprachdialoge für komplexe Anforderungen. Nahtlos integriert – für Unternehmen mit besonderen Prozessen.",
};

const AiPro = () => {
  return <AiProPage />;
};

export default AiPro;
