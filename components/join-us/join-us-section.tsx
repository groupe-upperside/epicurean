import {cn} from "@/lib/utils/utils";
import * as React from "react";
import JoinUsForm from "@/components/join-us/join-us-form";
import {useTranslations} from "next-intl";

export default function JoinUsSection() {
    const t = useTranslations('JoinUs');
    return(
        <section
            className={cn("py-24 px-4 sm:px-6 lg:px-8")}
        >
            <div className={cn("max-w-4xl", "mx-auto")}>
                <header id="contact" className="text-center mb-16">
                    <h1 className={"font-display text-5xl tracking-widest text-brand-charcoal"}>
                        {t('Title.translation.content')}
                    </h1>
                    <div className="w-16 h-px bg-brand-charcoal mx-auto my-6" />
                    <p className={"font-body text-lg text-brand-gray"}>
                        {t('Subtitle.translation.content')}
                    </p>
                </header>

                <div>
                    <JoinUsForm />
                </div>
            </div>
        </section>
    )
}