import {ReactNode} from 'react'
import Container from "@/components/ui/container";

export default function Section({children, className, padded=true}: {children: ReactNode; className?: string; padded?: boolean}) {
    return (
        <section className={`${padded ? 'py-10 sm:py-14 lg:py-20' : ''} ${className || ''}`.trim()}>
            <Container>{children}</Container>
        </section>
    )
}
