'use server';

import Hero from "@/components/ui/hero";
import ContactSection from "@/components/contact/contact-section";

export default async function ContactPage() {
    return (
        <>
            <Hero/>
            <ContactSection />
        </>
    )
}