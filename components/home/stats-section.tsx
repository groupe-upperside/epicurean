'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function Stats() {
    const t = useTranslations('HomeStats');
    const tHome = useTranslations('Home');

    const stats = [
        {number: '6', label: t('Maisons.translation.content')},
        {number: '1', label: t('EtoileMichelin.translation.content')},
        {number: '3', label: t('Chefs.translation.content')},
        {number: '4', label: t('Villes.translation.content')},
        {number: '2', label: t('Countries.translation.content')},
    ];

    return (
        <section className="bg-white pb-16 md:pb-24">
            <div className="container-padding">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-xl md:text-2xl text-brown-900">
                        <span
                            className="font-bold">{tHome('HeroTitle.translation.content')}</span>, {t('Is.translation.content')}
                    </h2>
                </div>
                <div className="w-full p-4 sm:p-18 lg: bg-[#F7F7F7]">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 mb-12 md:mb-16">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-8 md:p-10 text-center shadow-sm">
                                <div className="text-4xl md:text-5xl font-bold text-brown-900 mb-3 md:mb-4">
                                    {stat.number}
                                </div>
                                <div
                                    className="text-sm font-medium md:text-base text-brown-900 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="block">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_CDN_URL}Rectangle 1.png`}
                            alt={"donut"}
                            width={1099}
                            height={283}
                            className="object-cover mx-auto"
                        />
                    </div>
                </div> 
            </div>
        </section>
    );
}