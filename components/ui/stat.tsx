
"use client";

type Props = { value: string | number; label: string };

export default function StatCard({ value, label }: Props) {
    return (
        <div className="bg-white rounded-xl shadow-soft w-full max-w-[220px] aspect-square grid place-items-center p-6">
            <div className="text-3xl md:text-4xl font-semibold">{value}</div>
            <div className="mt-2 text-xs tracking-widest uppercase text-ink-500">{label}</div>
        </div>
    );
}
