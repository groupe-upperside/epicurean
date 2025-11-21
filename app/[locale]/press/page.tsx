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
            href: "https://www.gala.fr/lifestyle/lancome-s-associe-au-champion-du-monde-de-patisserie-pour-ses-creations-de-noel-au-cafe-de-la-rose-a-paris-20251119#photo-29",
            title: "La bûche rouge Pantone 194, Yazid Ichemrahen",
            date: "2025-11-20",
            image: {
                src: "https://i.f1g.fr/media/cms/616x/2025/11/10/78ff67951c0ebd078155ae399de863f02ca80d7ca63fb528f09aeb470647fb99.jpg",
                alt: "close-up of a person",
            },
            newTab: true,
        },
        {
            id: 2,
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
            id: 3,
            href: "https://www.admagazine.fr/article/buches-noel-2025-creations-de-patissiers",
            title: "Bûches de Noël : notre grand palmarès 2025 des meilleures créations de pâtissiers",
            date: "2025-11-13",
            image: {
                src: "https://media.admagazine.fr/photos/6915ca9c4f2b56fab35586e7/master/w_1600,c_limit/6.YAZID%20ICHEMRAHEN%20ROUGE%20PANTONE%20194%20YI4.jpg",
                alt: "close-up of a person",
            },
            newTab: true,
        },
        {
            id: 4,
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
            id: 5,
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
            id: 6,
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