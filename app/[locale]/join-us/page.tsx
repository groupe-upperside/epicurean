'use server';

import Hero from "@/components/ui/hero";
import JoinUsSection from "@/components/join-us/join-us-section";

export default async function JoinUsPage() {
    return (
        <>
            <Hero/>
            <JoinUsSection />
        </>
    )
}