import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/payload-types'

export function ProjectsGallery({ projects }: { projects: Project[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-black uppercase">PROYECTOS</h2>
      <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id} className="group">
            <Link
              href={`/proyectos/${project.slug}`}
              className="mt-1 inline-block text-sm font-semibold text-greenforest"
            >
              <div className="aspect-4/3 overflow-hidden rounded-lg bg-neutral-100">
                {project.images?.[0] &&
                  (() => {
                    const media = project.images[0].image
                    if (typeof media !== 'object' || !media.url) return null
                    return (
                      <Image
                        src={media.url}
                        alt={media.alt}
                        width={media.width ?? 600}
                        height={media.height ?? 400}
                        className="h-full w-full object-cover transition group-hover:scale-103"
                      />
                    )
                  })()}
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-bold">{project.title}</h3>
                {project.location && <p className="text-sm text-neutral-600">{project.location}</p>}
                <span className="hover:underline">Ver proyecto</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
