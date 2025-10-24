'use client'

import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {useLocale} from 'next-intl'

export default function LocaleSwitcher({full}: {full?: boolean}) {
    const locale = useLocale()
    const pathname = usePathname()
    const target = locale === 'fr' ? pathname.replace('/fr', '/en') : pathname.replace('/en', '/fr')
    return (
        <Link href={target} className={`${full ? 'w-full text-left' : ''} text-sm px-3 py-1 rounded-full border border-neutral-200`}>
            {locale === 'fr' ? 'EN' : 'FR'}
        </Link>
    )
}
