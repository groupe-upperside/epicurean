import {useTranslations} from 'next-intl'
import Container from "@/components/ui/container";

export default function Footer() {
    const t = useTranslations('Footer')
    return (
        <footer className="bg-black text-white flex items-center justify-center">
            <Container className="w-full flex flex-col justify-between items-center space-y-2 py-12">
                <p>{t("Copyright.translation.content")}</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="underline" >{t("LegalNotice.translation.content")}</a>
            </Container>
        </footer>
    )
}
