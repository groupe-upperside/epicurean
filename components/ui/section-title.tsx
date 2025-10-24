export default function SectionTitle({eyebrow, title, subtitle}: {eyebrow?: string; title: string; subtitle?: string}) {
    return (
        <div className="max-w-2xl">
            {eyebrow && <div className="text-xs uppercase tracking-widest text-accent mb-2">{eyebrow}</div>}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display">{title}</h2>
            {subtitle && <p className="text-neutral-600 mt-3">{subtitle}</p>}
        </div>
    )
}
