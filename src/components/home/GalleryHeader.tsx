import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/payload-types'

export function GalleryHeader({ projects }: { projects: Project[] }) {
  const hero = projects[0]
  const media = hero?.images?.[0]?.image

  return (
    <section className="relative w-full flex h-[80vh] min-h-[420px] items-end overflow-hidden">
      {typeof media === 'object' && media?.url && (
        <Image src={media.url} alt={media.alt} fill priority className="object-over" />
      )}
      <div className="absolute inset-0 bg-gradietn-to-t from-greenforest/90 via-greenforest/50 to-green/30" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 text-white">
        <h1 className="text-4xl font-black uppercase tracking-wide sm:text-6xl">
          J+R | Arquitectos
        </h1>
        <p className="mt-2 text-xl font-light sm:text-2xl">proyectos que suman</p>
        <Link
          href="/proyectos"
          className="mt-6 inline-block rounded-full bg-greenlemon px-6 py-3 font-semibold text-greenforest"
        >
          Ver proyectos
        </Link>
      </div>
    </section>
  )
}
