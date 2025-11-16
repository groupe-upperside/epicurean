'use client';

import {useTranslations} from 'next-intl';
import ImageTextLayout from "@/components/home/image-text-layout";

export default function FeaturesSection() {
    const t = useTranslations('HomeVillaSalone');
    const tTrattoria = useTranslations("HomeHomeTrattoria");
    const tAtHome = useTranslations("HomeAtHome");
    const tAtWork = useTranslations("HomeAtWork");
    const tRiad = useTranslations("HomeRiad")
    const tPeysson = useTranslations("HomePeysson")

    return (
        <section className="py-16 md:py-24">
                <ImageTextLayout
                    title={t('Title.translation.content')}
                    description={
                        <>
                            <p>
                                <span className="underline">{t('Subtitle.translation.content')}</span>{' '}
                                {t('Description1.translation.content')}
                            </p>
                            <p>{t('Description2.translation.content')}</p>
                        </>
                    }
                    mainImage={{
                        src: `${process.env.NEXT_PUBLIC_CDN_URL}Rectangle 10.png`,
                        alt: t('Title.translation.content'),
                    }}
                    smallImage={{
                        src: `${process.env.NEXT_PUBLIC_CDN_URL}PHOTO-VILLA-SALONE-7.webp`,
                        alt: `${t('Title.translation.content')} detail`,
                    }}
                    imageOn="left"
                    overlayAnchor="bottom-right"
                    className="bg-white"
                    cta={{
                        label: t('Cta.translation.content'),
                        href: 'https://villa-salone.com/',
                    }}
                />

                <ImageTextLayout
                    title={tTrattoria('Title.translation.content')}
                    description={
                        <>
                            <p>{tTrattoria('Description.translation.content')}</p>
                        </>
                    }
                    mainImage={{
                        src: `${process.env.NEXT_PUBLIC_CDN_URL}Rectangle 11.png`,
                        alt: tTrattoria('Title.translation.content'),
                    }}
                    smallImage={{
                        src: `${process.env.NEXT_PUBLIC_CDN_URL}Rectangle 16.png`,
                        alt: `${tTrattoria('Title.translation.content')} detail`,
                    }}
                    imageOn="right"
                    overlayAnchor="mid-right"
                    className="bg-white"
                    cta={{
                        label: t('Cta.translation.content'),
                        href: 'https://trattoria-salone.fr/',
                    }}
                />

                <ImageTextLayout
                    title={tAtHome('Title.translation.content')}
                    description={
                        <>
                            <p>{tAtHome('Description.translation.content')}</p>
                        </>
                    }
                    mainImage={{
                        src: `${process.env.NEXT_PUBLIC_CDN_URL}Rectangle 12.png`,
                        alt: tAtHome('Title.translation.content'),
                    }}
                    smallImage={{
                        src: `${process.env.NEXT_PUBLIC_CDN_URL}Rectangle 17.png`,
                        alt: `${tAtHome('Title.translation.content')} detail`,
                    }}
                    imageOn="left"
                    overlayAnchor="bottom-left"
                    className="bg-white"
                    cta={{
                        label: t('Cta.translation.content'),
                        href: 'https://yazid-ichemrahen.com/fr-fr',
                    }}
                />

                <ImageTextLayout
                    title={tAtWork('Title.translation.content')}
                    description={
                        <>
                            <p>{tAtWork('Description.translation.content')}</p>
                        </>
                    }
                    mainImage={{
                        src: `${process.env.NEXT_PUBLIC_CDN_URL}Rectangle 13.png`,
                        alt: tAtWork('Title.translation.content'),
                    }}
                    smallImage={{
                        src: `${process.env.NEXT_PUBLIC_CDN_URL}Rectangle 18.png`,
                        alt: `${tAtWork('Title.translation.content')} detail`,
                    }}
                    imageOn="right"
                    overlayAnchor="mid-left"
                    className="bg-white"
                    cta={{
                        label: t('Cta.translation.content'),
                        href: 'https://yazid-ichemrahen.com/fr-fr',
                    }}
                />

                <ImageTextLayout
                    title={tRiad('Title.translation.content')}
                    description={
                        <>
                            <p>{tRiad('Description.translation.content')}</p>
                        </>
                    }
                    mainImage={{
                        src: `${process.env.NEXT_PUBLIC_CDN_URL}Rectangle 14.png`,
                        alt: tRiad('Title.translation.content'),
                    }}
                    smallImage={{
                        src: `${process.env.NEXT_PUBLIC_CDN_URL}1E8BFEAC-809D-4758-98D9-66FC7DBDA3B4_1_105_c.jpeg`,
                        alt: `${tRiad('Title.translation.content')} detail`,
                    }}
                    imageOn="left"
                    overlayAnchor="top-left"
                    className="bg-white"
                    cta={{
                        label: t('Cta.translation.content'),
                        href: 'https://riadnashira.com/fr/marrakech/accueil',
                    }}
                />
            <ImageTextLayout
                title={tPeysson('Title.translation.content')}
                description={
                    <>
                        <p>{tPeysson('Description.translation.content')}</p>
                    </>
                }
                mainImage={{
                    src: `${process.env.NEXT_PUBLIC_CDN_URL}image00007.jpeg`,
                    alt: tRiad('Title.translation.content'),
                }}
                smallImage={{
                    src: `${process.env.NEXT_PUBLIC_CDN_URL}image00002.jpeg`,
                    alt: `${tRiad('Title.translation.content')} detail`,
                }}
                imageOn="right"
                overlayAnchor="mid-right"
                className="bg-white"
                cta={{
                    label: t('Cta.translation.content'),
                    href: 'https://www.instagram.com/peyssoncreations/',
                }}
            />

        </section>
    );
}