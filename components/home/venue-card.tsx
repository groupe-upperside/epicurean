import Button from "@/components/ui/button";

export default function VenueCard({
                                      title,
                                      excerpt,
                                      image,
                                      href
                                  }: {
    title: string
    excerpt: string
    image: string
    href: string
}) {
    return (
        <article className="rounded-2xl overflow-hidden border border-neutral-100 bg-white shadow-sm">
            <img src={image} alt="" className="w-full h-56 object-cover" />
            <div className="p-5 sm:p-6">
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="text-sm text-neutral-600 mt-2">{excerpt}</p>
                <div className="mt-4">
                    <Button href={href} intent="ghost">{'Découvrir'}</Button>
                </div>
            </div>
        </article>
    )
}
