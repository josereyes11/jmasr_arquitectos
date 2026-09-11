import Link from 'next/link'
import Image from 'next/image'
import type { Project } from 'a/payload-types'

export function ProjectsGalelry({ projects }: { projects: Project[] }) {
  return (
    <section>
      <h2>PROYECTOS</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <div>
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
                    />
                  )
                })()}
            </div>
            <div>
              <h3>{project.title}</h3>
              {project.location && <p>{project.location}</p>}
              <Link href={`/proyectos/${project.slug}`}>Ver proyecto</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
