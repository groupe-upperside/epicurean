'use client';

import {useTranslations} from 'next-intl';
import Container from '@/components/ui/container';
import Hero from "@/components/ui/hero";
import {cn} from "@/lib/utils/utils";

export default function MentionsLegalesPage() {
    const t = useTranslations();

    return (
        <>
            <Hero/>
            <section
                className={cn("py-24 px-4 sm:px-6 lg:px-8")}
            >
                <Container className="space-y-8">
                    <header className="space-y-2 text-center mb-16">
                        <h1 className={"font-display text-5xl tracking-widest text-brand-charcoal"}>
                            {t('LegalMentions.Title.translation.content')}
                        </h1>
                        <p className={"font-body text-lg text-brand-gray"}>
                            {t('LegalMentions.Intro.translation.content')}
                        </p>
                    </header>

                    <div className="space-y-6 text-brown-900">
                        <h2 className="text-2xl font-semibold">
                            {t('LegalMentions.CompanyTitle.translation.content')}
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>{t('LegalMentions.CompanyRaisonSociale.translation.content')}</li>
                            <li>{t('LegalMentions.CompanySiegeSocial.translation.content')}</li>
                            <li>{t('LegalMentions.CompanyEtablissementSecondaire.translation.content')}</li>
                            <li>{t('LegalMentions.CompanyTelephone.translation.content')}</li>
                            <li>{t('LegalMentions.CompanyFax.translation.content')}</li>
                            <li>{t('LegalMentions.CompanyEmail.translation.content')}</li>
                            <li>{t('LegalMentions.CompanyDirigeant.translation.content')}</li>
                            <li>{t('LegalMentions.CompanyForme.translation.content')}</li>
                            <li>{t('LegalMentions.CompanyRCS.translation.content')}</li>
                            <li>{t('LegalMentions.CompanyTVA.translation.content')}</li>
                            <li>{t('LegalMentions.CompanyDirecteurPublication.translation.content')}</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold">
                            {t('LegalMentions.SiteDevTitle.translation.content')}
                        </h2>
                        <p className="text-brown-900">
                            {t('LegalMentions.SiteDevContent.translation.content')}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold">
                            {t('LegalMentions.HostTitle.translation.content')}
                        </h2>
                        <p className="text-brown-900">
                            {t('LegalMentions.HostContent.translation.content')}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold">
                            {t('LegalMentions.IPTitle.translation.content')}
                        </h2>
                        <p className="text-brown-900">
                            {t('LegalMentions.IPPara1.translation.content')}
                        </p>
                        <p className="text-brown-900">
                            {t('LegalMentions.IPPara2.translation.content')}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold">
                            {t('LegalMentions.ExternalLinksTitle.translation.content')}
                        </h2>
                        <p className="text-brown-900">
                            {t('LegalMentions.ExternalLinksPara1.translation.content')}
                        </p>
                    </div>

                    <div className="space-y-5">
                        <h2 className="text-2xl font-semibold">
                            {t('LegalMentions.PersonalDataTitle.translation.content')}
                        </h2>
                        <p className="text-brown-900">
                            {t('LegalMentions.PersonalDataIntro.translation.content')}
                        </p>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                                {t('LegalMentions.PersonalDataS1Title.translation.content')}
                            </h3>
                            <p className="text-brown-900">
                                {t('LegalMentions.PersonalDataS1Para1.translation.content')}
                            </p>
                            <p className="text-brown-900 whitespace-pre-line">
                                {t('LegalMentions.PersonalDataS1Para2.translation.content')}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                                {t('LegalMentions.PersonalDataS2Title.translation.content')}
                            </h3>
                            <p className="text-brown-900">
                                {t('LegalMentions.PersonalDataS2Para1.translation.content')}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                                {t('LegalMentions.PersonalDataS3Title.translation.content')}
                            </h3>
                            <p className="text-brown-900">
                                {t('LegalMentions.PersonalDataS3Para1.translation.content')}
                            </p>
                            <p className="text-brown-900">
                                {t('LegalMentions.PersonalDataS3Para2.translation.content')}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                                {t('LegalMentions.PersonalDataS4Title.translation.content')}
                            </h3>
                            <p className="text-brown-900">
                                {t('LegalMentions.PersonalDataS4Para1.translation.content')}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                                {t('LegalMentions.PersonalDataS5Title.translation.content')}
                            </h3>
                            <p className="text-brown-900 whitespace-pre-line">
                                {t('LegalMentions.PersonalDataS5Para1.translation.content')}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                                {t('LegalMentions.PersonalDataS6Title.translation.content')}
                            </h3>
                            <p className="text-brown-900">
                                {t('LegalMentions.PersonalDataS6Para1.translation.content')}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                                {t('LegalMentions.PersonalDataS7Title.translation.content')}
                            </h3>
                            <p className="text-brown-900 whitespace-pre-line">
                                {t('LegalMentions.PersonalDataS7Para1.translation.content')}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                                {t('LegalMentions.PersonalDataS8Title.translation.content')}
                            </h3>
                            <p className="text-brown-900">
                                {t('LegalMentions.PersonalDataS8Para1.translation.content')}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                                {t('LegalMentions.PersonalDataS9Title.translation.content')}
                            </h3>
                            <p className="text-brown-900">
                                {t('LegalMentions.PersonalDataS9Para1.translation.content')}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                                {t('LegalMentions.PersonalDataS10Title.translation.content')}
                            </h3>
                            <p className="text-brown-900">
                                {t('LegalMentions.PersonalDataS10Para1.translation.content')}
                            </p>
                        </div>
                    </div>

                    <p className="text-brown-700">
                        {t('LegalMentions.Footer.translation.content')}
                    </p>
                </Container>
            </section>
        </>
    );
}
