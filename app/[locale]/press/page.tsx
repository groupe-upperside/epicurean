'use server';

import Hero from "@/components/ui/hero";
import PressSection from "@/components/press/press-section";

export type PressItem = {
    id?: string | number;
    href: string;
    title: string;
    date: string | Date;
    image: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    };
    newTab?: boolean;
};

export default async function HomePage() {
    const items: PressItem[] = [
        {
            id: 1,
            href: "https://freshmagparis.com/yazid-ichemrahen-maitre-des-fetes-2025/",
            title: "Yazid Ichemrahen, maître des fêtes 2025",
            date: "2025-11-14",
            image: {
                src: "https://freshmagparis.com/wp-content/uploads/2025/11/Buche-Rouge-Pntone-194-3-600x400.jpg",
                alt: "close-up of a person",
            },
            newTab: true,
        },
        {
            id: 2,
            href: "https://www.lechef.com/yazid-ichemrahen-se-devoile-en-toute-intimite-avec-at-home/",
            title: "Yazid Ichemrahen se dévoile en toute intimité avec « At Home »",
            date: "2025-09-05",
            image: {
                src: "https://www.lechef.com/wp-content/uploads/2025/09/at-home-yazid-le-chef.png",
                alt: "a stylish flat lay ...",
            },
            newTab: true,
        },
        {
            id: 3,
            href: "https://mesinfos.fr/13300-salon-de-provence/salon-de-provence-la-villa-salone-toujours-etoilee-au-guide-michelin-219638.html",
            title: "Salon-de-Provence : la Villa Salone toujours étoilée au Guide Michelin",
            date: "2025-04-01",
            image: {
                src: "https://mesinfos.fr/content/articles/638/A219638/big-villa-salone.webp?v=1743517759",
                alt: "collection of elegant, minimalist magazines...",
            },
            newTab: true,
        },
        {
            id: 4,
            href: "https://mesinfos.fr/13300-salon-de-provence/salon-de-provence-la-trattoria-salone-ouvre-ses-portes-jeudi-midi-180342.html",
            title: "Salon-de-Provence : la Trattoria Salone ouvre ses portes jeudi midi",
            date: "2023-07-18",
            image: {
                src: "https://trattoria-salone.fr/wp-content/uploads/2023/08/006accueil.jpg",
                alt: "press event podium ...",
            },
            newTab: true,
        },
    ];

    return (
        <>
            <Hero/>
            <PressSection
                items={items} />
        </>
    )
}