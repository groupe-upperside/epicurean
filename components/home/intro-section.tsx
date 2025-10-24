'use client';

import {useTranslations} from 'next-intl';
import Image from "next/image";

export default function IntroSection() {
    const t = useTranslations('Home');

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-serif text-lg sm:text-xl md:text-2xl text-brown-900 leading-relaxed mb-8">
                        <span className="font-bold">{t('HeroTitle.translation.content')}</span> {t('IntroText.translation.content')}
                    </h2>
                </div>

                <div className="flex justify-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white  flex items-center justify-center">
                            <Image src={process.env.NEXT_PUBLIC_CDN_URL + "ee.png"} width={90} height={82} alt={"logo small"} />
                    </div>
                </div>
            </div>
        </section>
    );
}