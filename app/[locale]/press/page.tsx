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
            href: "#",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            date: "2025-07-30",
            image: {
                src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/810f46d84e-2783a01504fffe09af35.png",
                alt: "collection of elegant, minimalist magazines...",
            },
        },
        {
            id: 2,
            href: "#",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            date: "2025-07-30",
            image: {
                src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7ec8a2e8bb-72cdb01e684f65a38484.png",
                alt: "a stylish flat lay ...",
            },
        },
        {
            id: 3,
            href: "#",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            date: "2025-07-30",
            image: {
                src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9c885ef8b5-e84d2fe2da36d70697b1.png",
                alt: "close-up of a person",
            },
        },
        {
            id: 4,
            href: "#",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            date: "2025-07-30",
            image: {
                src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/dd1c5ed3d4-e76f10d8e1e0514bf8bb.png",
                alt: "press event podium ...",
            },
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