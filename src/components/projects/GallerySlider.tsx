import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/payload-types'

export function GallerySlider({ projects }: { projects: Project[] }) {
  return (
    <section>
      {projects.map((project) => (
        <Link key={project.id} href={`/proyectos/${project.slug}`}>
          {project.images?.[0] &&
            (() => {
              const media = project.images[0].image
              if (typeof media !== 'object' || !media.url) return null
              return (
                <Image
                  src={media.url}
                  alt={media.alt}
                  width={media.width ?? 1200}
                  height={media.height ?? 900}
                />
              )
            })()}
          <h2>{project.title}</h2>
        </Link>
      ))}
    </section>
  )
}
