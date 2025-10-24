import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localePrefix: 'always',
    pathnames: {
        '/': {
            en: '/',
            fr: '/',
            it: '/',
            es: '/',
            pt: '/',
            de: '/'
        },
        '/press': {
            en: '/press',
            fr: '/presse',
            it: '/vietato',
            es: '/prohibido',
            pt: '/proibido',
            de: '/verboten'
        },
        '/contact': {
            en: '/contact',
            fr: '/contact',
            it: '/faq',
            es: '/preguntas-frecuentes',
            pt: '/perguntas-frequentes',
            de: '/haeufig-gestellte-fragen'
        },
        '/join-us': {
            en: '/join-us',
            fr: '/nous-rejoindre',
            it: '/documentazioni',
            es: '/documentaciones',
            pt: '/documentacoes',
            de: '/dokumentationen'
        },
    }
});

export const {locales, defaultLocale, localePrefix, pathnames} = routing;
export type Locale = (typeof locales)[number];