import Link from 'next/link'
import {ReactNode} from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {clsx} from 'clsx'

const styles = cva('inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition active:scale-[.99] focus:outline-none focus:ring-2 focus:ring-offset-2', {
    variants: {
        intent: {
            primary: 'bg-accent text-white focus:ring-accent',
            ghost: 'bg-transparent border border-neutral-200 text-neutral-900'
        },
        wide: {true: 'w-full sm:w-auto'}
    },
    defaultVariants: {intent: 'primary'}
})

export default function Button(props: {href?: string; children: ReactNode} & VariantProps<typeof styles>) {
    const cls = clsx(styles({intent: props.intent, wide: props.wide}))
    if (props.href) return <Link href={props.href} className={cls}>{props.children}</Link>
    return <button className={cls}>{props.children}</button>
}
