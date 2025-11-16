import '@/styles/globals.css';

import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Toaster} from 'react-hot-toast';
import {Jost, Playfair_Display} from 'next/font/google'

import CustomNextIntlClientProvider from '@/lib/next-intl/custom-next-intl-client-provider';
import {ReactNode} from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-playfair',
    display: 'swap',
});

const jost = Jost({
    subsets: ['latin'],
    weight: ['300','400','500','600','700','800'],
    style: ['normal','italic'],
    variable: '--font-futura-like',
    display: 'swap',
});


export const metadata: Metadata = {
    title: 'Elegance Epicurean Group',
    description: 'Experience luxury at Riad Nashira and SPA. Book your unforgettable stay today.',
}

async function getMessages(locale: string) {
    try {
        const base = (await import(`../../translations/${locale}.json`)).default;
        try {
            const extra = (await import(`../../translations/${locale}.legal.json`)).default;
            return { ...base, ...extra };
        } catch {
            return base;
        }
    } catch {
        return notFound();
    }
}

export default async function RootLayout({
                                             children,
                                             params,
                                         }: { children: ReactNode, params: Promise<{ locale: string }> }) {
    const {locale} = await params;
    const messages = await getMessages(locale);

    return (
        <html lang={locale}  className={`${jost.className} ${jost.variable} ${playfair.variable}`}>
        <body>
        <CustomNextIntlClientProvider locale={locale} messages={messages}>
            <Toaster position="top-center" reverseOrder={false}/>
            <Header/>
            <main> {children}</main>
            <Footer/>
        </CustomNextIntlClientProvider>
        </body>
        </html>
    );
}
