import Image from 'next/image'
import type { Media } from '@/payload-types'

export function PageHeader({
  image,
  title,
  subtitle,
}: {
  image: Media
  title: string
  subtitle: string
}) {
  return (
    <section className="relative flex w-full h-[90vh] min-h-[500px] items-center justify-center overflow-hidden">
      {image?.url && (
        <Image src={image.url} alt={image.alt} fill priority className="object-cover" />
      )}

      <div className="absolute inset-0 bg-black/30" />
      <div className="relative px-6 text-center text-white">
        <h1 className="text-5xl font-black uppercase tracking-wide sm:text-7xl">{title}</h1>
        <h2 className="mt-4 text-xl font-light sm:text-2xl">{subtitle}</h2>
      </div>
    </section>
  )
}
