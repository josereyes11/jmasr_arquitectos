import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'

export default async function ProyectosPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs: projects } = await payload.find({
    collection: 'projects',
    depth: 2,
  })

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Proyectos</h1>
      {projects.length === 0 ? (
        <p className="mt-4 text-neutral-600">No hay projectos aún.</p>
      ) : (
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <Link href={`/proyectos/${project.slug}`}>
                {project.images && project.images.length > 0 && (
                  <div>
                    {project.images.map((item, i) => {
                      const media = item.image
                      if (typeof media !== 'object' || !media.url) return null
                      return (
                        <Image
                          key={i}
                          src={media.url}
                          alt={media.alt}
                          width={media.width ?? 200}
                          height={media.height ?? 160}
                          className="w-full rounded"
                        />
                      )
                    })}
                  </div>
                )}

                <h2 className="text-lg font-medium">{project.title}</h2>
                {project.location && <p className="text-sm text-neutral-500">{project.location}</p>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
