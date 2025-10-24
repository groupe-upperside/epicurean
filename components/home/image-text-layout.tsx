"use client";
import Image from "next/image";
import * as React from "react";

export type Anchor =
    | "bottom-right"
    | "bottom-left"
    | "mid-left"
    | "top-left"
    | "top-right"
    | "mid-right";

export interface ImageObject {
    src: string;
    alt?: string;
}

export interface ImageTextLayoutProps {
    title: string;
    description: React.ReactNode;
    cta?: { label: string; href: string };
    mainImage: ImageObject;
    smallImage: ImageObject;
    imageOn?: "left" | "right";
    overlayAnchor?: Anchor;
    className?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
    return parts.filter(Boolean).join(" ");
}

const overlayByAnchorLg: Record<Anchor, string> = {
    "bottom-right": "lg:bottom-4 lg:-right-10",
    "bottom-left": "lg:bottom-4 lg:left-10",
    "mid-left": "lg:top-28 lg:-left-10",
    "mid-right": "lg:top-28 lg:-right-10",
    "top-left": "lg:top-14 lg:-left-10",
    "top-right": "lg:top-2 lg:right-2",
};

const overlayByAnchorXl: Record<Anchor, string> = {
    "bottom-right": "xl:bottom-0 xl:-right-20",
    "bottom-left": "xl:bottom-0 xl:left-20",
    "mid-left": "xl:top-40 xl:-left-20",
    "mid-right": "xl:top-40 xl:-right-20",
    "top-left": "xl:top-20 xl:-left-20",
    "top-right": "xl:top-0 xl:right-0",
};

export default function ImageTextLayout(props: ImageTextLayoutProps) {
    const {
        title,
        description,
        cta,
        mainImage,
        smallImage,
        imageOn = "left",
        overlayAnchor: providedAnchor,
        className,
    } = props;

    const safeMain = mainImage ?? {src: "", alt: title};
    const safeSmall = smallImage ?? {src: "", alt: `${title} detail`};

    const overlayAnchor: Anchor =
        providedAnchor ?? (imageOn === "left" ? "bottom-right" : "mid-left");
    const isRight = imageOn === "right";

    const overlayClassLg = overlayByAnchorLg[overlayAnchor] ?? overlayByAnchorLg["bottom-right"];
    const overlayClassXl = overlayByAnchorXl[overlayAnchor] ?? overlayByAnchorXl["bottom-right"];

    return (
        <section className={cx("py-8", className)}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-24 xl:gap-x-32 items-center">
                    <div className={cx("relative", isRight && "lg:order-2")}>
                        <div className="lg:hidden">
                            <div className="relative h-64 w-full rounded-md overflow-hidden">
                                <Image
                                    src={safeMain.src}
                                    alt={safeMain.alt || title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div
                            className="hidden lg:block relative w-full lg:max-w-md xl:max-w-lg mx-auto lg:mx-0 lg:h-[620px] xl:h-[750px]">
                            <div className="absolute inset-0">
                                <div className="h-full w-full relative">
                                    <div
                                        className={cx(
                                            "absolute w-full shadow-xl lg:h-[540px] xl:h-[670px]",
                                            isRight ? "top-0 right-0" : "top-0 left-0"
                                        )}
                                    >
                                        <img
                                            src={safeMain.src}
                                            alt={safeMain.alt || title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div
                                        className={cx(
                                            "absolute shadow-2xl border-8 border-white",
                                            "lg:h-56 lg:w-44 xl:h-64 xl:w-48",
                                            overlayClassLg,
                                            overlayClassXl
                                        )}
                                    >
                                        <img
                                            src={safeSmall.src}
                                            alt={safeSmall.alt || `${title} detail`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx(isRight && "lg:order-1", !isRight && "lg:pl-8", isRight && "text-left")}>
                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-charcoal mb-4 md:mb-6">
                            {title}
                        </h2>
                        <div className="text-brand-gray leading-relaxed text-sm md:text-base mb-6 md:mb-8 max-w-md">
                            {description}
                        </div>
                        {cta && (
                            <a
                                href={cta.href}
                                className="font-sans uppercase font-bold tracking-wider text-xs md:text-sm border-b border-brand-charcoal pb-1 hover:text-brand-gray hover:border-brand-gray transition-colors duration-300"
                            >
                                {cta.label}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}