'use server';

import Hero from "@/components/ui/hero";
import StatsSection from "@/components/home/stats-section";
import IntroSection from "@/components/home/intro-section";
import PromiseSection from "@/components/home/promise-section";
import FeaturesSection from "@/components/home/feature-section";

export default async function HomePage() {
    return (
        <>
            <Hero/>
            <IntroSection/>
            <StatsSection/>
            <PromiseSection/>
            <FeaturesSection/>
        </>
    )
}
