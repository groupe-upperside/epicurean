import * as React from "react";
import {PressCard, PressSectionProps} from "@/components/press/press-card";
import {cn} from "@/lib/utils/utils";
import {useTranslations} from "next-intl";

export default function PressSection({

                                         items,
                                         className,
                                         containerClassName = "max-w-4xl",
                                         gridClassName = "grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16",
                                         imageHeightClassName = "h-80",
                                         headingClassName = "font-display text-5xl tracking-widest text-brand-charcoal",
                                         subtitleClassName = "font-body text-lg text-brand-gray",
                                         titleClassName,
                                         dateClassName,
                                         ariaLabelledBy,
                                     }: PressSectionProps) {
    const headingId = ariaLabelledBy ?? "press_heading";

    const t = useTranslations('Press');

    if (!items || items.length === 0) return null;

    return (
        <section
            aria-labelledby={headingId}
            className={cn("py-24 px-4 sm:px-6 lg:px-8", className)}
        >
            <div className={cn(containerClassName, "mx-auto")}>
                <header id="press_header" className="text-center mb-16">
                    <h1 id={headingId} className={headingClassName}>
                        {t('Title.translation.content')}
                    </h1>
                    <div className="w-16 h-px bg-brand-charcoal mx-auto my-6" />
                    <p className={subtitleClassName}>{t('Subtitle.translation.content')}</p>
                </header>

                <div id="press_grid" className={gridClassName}>
                    {items.map((item) => (
                        <PressCard
                            key={String(item.id ?? item.href)}
                            item={item}
                            imageHeightClassName={imageHeightClassName}
                            titleClassName={titleClassName}
                            dateClassName={dateClassName}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}