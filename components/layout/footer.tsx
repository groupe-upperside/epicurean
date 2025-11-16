import {useLocale, useTranslations} from 'next-intl'
import Link from 'next/link';
import Container from "@/components/ui/container";

export default function Footer() {
    const t = useTranslations('Footer')
    const locale = useLocale();
    return (
        <footer className="bg-black text-white flex items-center justify-center">
            <Container className="w-full flex flex-col justify-between items-center space-y-2 py-12">
                <p>{t("Copyright.translation.content")}</p>
                <Link href={`/${locale}/mentions-legales`} className="underline">{t("LegalNotice.translation.content")}</Link>
            </Container>
        </footer>
    )
}
