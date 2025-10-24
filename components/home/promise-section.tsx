'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function PromiseSection() {
    const t = useTranslations('HomePromise');

    return (
        <section className="relative overflow-hidden bg-white">
            <div
                aria-hidden
                className="pointer-events-none select-none absolute hidden lg:block left-0 bottom-0 z-10"
            >
                <div className="relative lg:w-80 lg:h-[526px] xl:w-[698px] xl:h-[920px]">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_CDN_URL}cerise 2.png`}
                        alt=""
                        fill
                        priority
                        className="object-contain"
                    />
                </div>
            </div>

            <div
                aria-hidden
                className="pointer-events-none select-none absolute hidden lg:block right-0 top-0 rotate-[6deg] z-10"
            >
                <div className="relative lg:w-80 lg:h-[526px] xl:w-[442px] xl:h-[663px]">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_CDN_URL}118-_e4a1452 1.png`}
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="relative z-20 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl md:max-w-3xl md:pl-14 lg:pl-24">
                    <h2 className="mb-8 md:mb-10 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-brown-900">
                        {t('Title.translation.content')}
                        <br/>
                        {t('Subtitle.translation.content')}
                    </h2>

                    <div className="space-y-7 md:space-y-8">
                        <div>
                            <h3 className="mb-2 font-bold text-lg md:text-xl text-brown-900">
                                {t('Section1Title.translation.content')}
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed text-brown-800">
                                {t('Section1Text.translation.content')}
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-2 font-bold text-lg md:text-xl text-brown-900">
                                {t('Section2Title.translation.content')}
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed text-brown-800">
                                {t('Section2Text.translation.content')}
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-2 font-bold text-lg md:text-xl text-brown-900">
                                {t('Section3Title.translation.content')}
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed text-brown-800">
                                {t('Section3Text.translation.content')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}