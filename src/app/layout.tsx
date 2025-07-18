// layout.tsx

import Footer from "@/components/organisms/Footer";
import Nav from "@/components/organisms/Nav";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const whyte = localFont({
  src: "../fonts/ABCWhyteVariable-Trial.woff2",
  variable: "--font-whyte",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${whyte.variable} bg-gray-950 text-gray-100 font-sans antialiased relative`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
        {/* <BgGrid /> */}
      </body>
    </html>
  );
}
