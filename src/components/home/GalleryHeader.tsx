'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/payload-types'
import { useEffect, useState } from 'react'

export function GalleryHeader({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (projects.length <= 1) return
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [projects.length])

  const media = projects[active]?.images?.[0]?.image

  return (
    <section className="relative flex h-[80vh] min-h-[420px] w-full items-end overflow-hidden">
      {typeof media === 'object' && media?.url && (
        <Image src={media.url} alt={media.alt} fill priority className="object-cover grayscale" />
      )}
      <div className="pointer-events-none absolute inset-0 mix-blend-multiply bg-gradient-to-t from-greenforest/90 via-greenforest/50 to-green/30" />

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
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 w-2.5 rounded-full ${i === active ? 'bg-greenlemon' : 'bg-white/60'}`}
            aria-label={`Ver proyecto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
