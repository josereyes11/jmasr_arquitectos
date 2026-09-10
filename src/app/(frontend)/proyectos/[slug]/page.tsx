import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'

export default async function ProyectosDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  })

  const project = docs[0]

  if (!project) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl max-w-2xl font-semibold">{project.title}</h1>

      {project.location && <p className="mt-2 text-neutral-500">{project.location}</p>}

      {project.description && (
        <div>
          <RichText data={project.description} />
        </div>
      )}

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
                width={media.width ?? 800}
                height={media.height ?? 600}
                className="w-full rounded"
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
