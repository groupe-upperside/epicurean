import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export type PressCard = {
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

export type PressSectionProps = {
    title?: string;
    subtitle?: string;
    items: PressCard[];
    className?: string;
    containerClassName?: string;
    gridClassName?: string;
    imageHeightClassName?: string;
    headingClassName?: string;
    subtitleClassName?: string;
    titleClassName?: string;
    dateClassName?: string;
    locale?: string;
    dateFormat?: Intl.DateTimeFormatOptions;
    ariaLabelledBy?: string;
};

function cn(...parts: Array<string | false | null | undefined>) {
    return parts.filter(Boolean).join(" ");
}

function formatDate(input: string | Date, locale = "fr-FR", options?: Intl.DateTimeFormatOptions) {
    const d = input instanceof Date ? input : new Date(input);
    const fmt: Intl.DateTimeFormatOptions = options ?? {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    };
    try {
        return new Intl.DateTimeFormat(locale, fmt).format(d);
    } catch {
        return (typeof input === "string" ? input : d.toISOString()).slice(0, 10);
    }
}

export function PressCard({
                              item,
                              imageHeightClassName = "h-80",
                              titleClassName = "font-body font-bold text-brand-charcoal text-lg leading-tight mb-2",
                              dateClassName = "font-body text-sm text-brand-gray",
                          }: {
    item: PressCard;
    imageHeightClassName?: string;
    titleClassName?: string;
    dateClassName?: string;
}) {
    const {href, title, date, image, newTab} = item;
    const target = newTab ? "_blank" : undefined;
    const rel = newTab ? "noopener noreferrer" : undefined;

    return (
        <article className="group">
            <Link href={href} target={target} rel={rel} aria-label={title} className="block">
                <div className={cn("relative bg-gray-100 mb-6 overflow-hidden", imageHeightClassName)}>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={false}
                    />
                </div>
                <div className="text-left">
                    <h3 className={titleClassName}>{title}</h3>
                    <p className={dateClassName}>{formatDate(date)}</p>
                </div>
            </Link>
        </article>
    );
}