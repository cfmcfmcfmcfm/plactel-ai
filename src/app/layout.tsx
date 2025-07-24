// layout.tsx

import Footer from "@/components/organisms/Footer";
import Nav from "@/components/organisms/Nav";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DynamicBackground from "@/components/atoms/DynamicBackground";

const whyte = localFont({
  src: "../fonts/ABCWhyteVariable-Trial.woff2",
  // src: "../fonts/ABCWhyteSemi-Mono-Light-Trial.woff2",
  variable: "--font-whyte",
});

export const metadata: Metadata = {
  title: "Placetel AI – Die neue Ära der Business-Telefonie",
  description:
    "Entdecke Placetel AI: Die smarte Lösung für automatisierte Anrufbearbeitung, effizientere Prozesse und echten ROI. Jetzt kennenlernen.",
  openGraph: {
    title: "Placetel AI – Die neue Ära der Business-Telefonie",
    description:
      "Intelligente Sprachassistenten, sofort einsatzbereit – direkt integriert in deine Telefonanlage.",
    url: "https://placetel.ai",
    type: "website",
    images: [
      {
        url: "/og/landing.jpg",
        alt: "Placetel AI Landing Page",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${whyte.variable} bg-black text-gray-100 font-sans antialiased relative selection:bg-blue-500 selection:text-white`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />

        <DynamicBackground />
      </body>
    </html>
  );
}
