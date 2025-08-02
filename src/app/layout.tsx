// layout.tsx

import Footer from '@/components/organisms/Footer';
import Nav from '@/components/organisms/Nav';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import DynamicBackground from '@/components/atoms/DynamicBackground';
import { ThemeProvider } from '@/components/atoms/ThemeProvider';

const whyte = localFont({
    src: '../fonts/ABCWhyteVariable-Trial.woff2',
    // src: "../fonts/ABCWhyteSemi-Mono-Light-Trial.woff2",
    variable: '--font-whyte',
});

export const metadata: Metadata = {
    title: 'Placetel AI – Die neue Ära der Business-Telefonie',
    description:
        'Entdecke Placetel AI: Die smarte Lösung für automatisierte Anrufbearbeitung, effizientere Prozesse und echten ROI. Jetzt kennenlernen.',
    openGraph: {
        title: 'Placetel AI – Die neue Ära der Business-Telefonie',
        description:
            'Intelligente Sprachassistenten, sofort einsatzbereit – direkt integriert in deine Telefonanlage.',
        url: 'https://placetel.ai',
        type: 'website',
        images: [
            {
                url: '/og/landing.jpg',
                alt: 'Placetel AI Landing Page',
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
        <html lang="de" suppressHydrationWarning>
            <body
                className={`${whyte.variable} relative bg-slate-100 font-sans text-slate-950 subpixel-antialiased selection:bg-blue-500 selection:text-slate-100 dark:bg-black dark:text-slate-100`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Nav />
                    <main>{children}</main>
                    <Footer />

                    <DynamicBackground />
                </ThemeProvider>
            </body>
        </html>
    );
}
