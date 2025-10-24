'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import Image from 'next/image';
import {FR, US} from 'country-flag-icons/react/3x2';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const t = useTranslations('Nav');
    const locale = useLocale();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLocale = () => {
        const newLocale = locale === 'fr' ? 'en' : 'fr';
        window.location.href = `/${newLocale}`;
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 md:h-24">
                    <Link href={`/${locale}`} className="flex items-center gap-3">
                        <Image
                            quality={100}
                            src={process.env.NEXT_PUBLIC_CDN_URL + (isScrolled ? 'epicurean_noir.png' : 'epicurean.png')}
                            alt="Logo"
                            width={2746}
                            height={615}
                            className="max-w-[200px] md:max-w-[250px]"
                        />
                    </Link>

                    <div className="hidden md:flex items-center space-x-18">
                        <Link
                            href={`/${locale}`}
                            className={`text-base font-medium uppercase tracking-wider transition-colors ${
                                isScrolled ? 'text-brown-900 hover:text-gold-600' : 'text-white hover:text-gold-300'
                            }`}
                        >
                            {t('LeGroupe.translation.content')}
                        </Link>
                        <Link
                            href={`/${locale}/press`}
                            className={`text-base font-medium uppercase tracking-wider transition-colors ${
                                isScrolled ? 'text-brown-900 hover:text-gold-600' : 'text-white hover:text-gold-300'
                            }`}
                        >
                            {t('Presse.translation.content')}
                        </Link>
                        <Link
                            href={`/${locale}/join-us`}
                            className={`text-base font-medium uppercase tracking-wider transition-colors ${
                                isScrolled ? 'text-brown-900 hover:text-gold-600' : 'text-white hover:text-gold-300'
                            }`}
                        >
                            {t('JoinUs.translation.content')}
                        </Link>
                        <Link
                            href={`/${locale}/contact`}
                            className={`text-base font-medium uppercase tracking-wider transition-colors ${
                                isScrolled ? 'text-brown-900 hover:text-gold-600' : 'text-white hover:text-gold-300'
                            }`}
                        >
                            {t('Contact.translation.content')}
                        </Link>
                        <button
                            onClick={toggleLocale}
                            className={`flex cursor-pointer items-center gap-1 text-sm font-medium uppercase tracking-wider transition-colors ${
                                isScrolled ? 'text-brown-900 hover:text-gold-600' : 'text-white hover:text-gold-300'
                            }`}
                        >
                            {locale === 'fr' ? (
                                <>
                                    <FR className="w-5 h-4" title="Français" />
                                    FR
                                </>
                            ) : (
                                <>
                                    <US className="w-5 h-4" title="English" />
                                    EN
                                </>
                            )}
                        </button>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden focus:outline-none transition-colors cursor-pointer ${
                            isScrolled ? 'text-brown-900' : 'text-white'
                        }`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className={`md:hidden ${isScrolled ? 'bg-white' : 'bg-brown-950/98 backdrop-blur-sm'}`}>
                    <div className="px-4 pt-2 pb-4 space-y-3">
                        <Link
                            href={`/${locale}`}
                            className={`block py-2 text-base uppercase tracking-wider transition-colors ${
                                isScrolled ? 'text-brown-900 hover:text-gold-600' : 'text-white hover:text-gold-300'
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {t('LeGroupe.translation.content')}
                        </Link>
                        <Link
                            href={`/${locale}/presse`}
                            className={`block py-2 text-base uppercase tracking-wider transition-colors ${
                                isScrolled ? 'text-brown-900 hover:text-gold-600' : 'text-white hover:text-gold-300'
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {t('Presse.translation.content')}
                        </Link>
                        <Link
                            href={`/${locale}/join-us`}
                            className={`block py-2 text-base uppercase tracking-wider transition-colors ${
                                isScrolled ? 'text-brown-900 hover:text-gold-600' : 'text-white hover:text-gold-300'
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {t('JoinUs.translation.content')}
                        </Link>
                        <Link
                            href={`/${locale}/contact`}
                            className={`block py-2 text-base uppercase tracking-wider transition-colors ${
                                isScrolled ? 'text-brown-900 hover:text-gold-600' : 'text-white hover:text-gold-300'
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {t('Contact.translation.content')}
                        </Link>
                        <button
                            onClick={toggleLocale}
                            className={`flex items-center cursor-pointer space-x-2 py-2 text-base uppercase w-full text-left tracking-wider transition-colors ${
                                isScrolled ? 'text-brown-900 hover:text-gold-600' : 'text-white hover:text-gold-300'
                            }`}
                        >
                            {locale === 'fr' ? (
                                <>
                                    <FR className="w-5 h-4" title="Français" />
                                    <span>FR</span>
                                </>
                            ) : (
                                <>
                                    <US className="w-5 h-4" title="English" />
                                    <span>EN</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}