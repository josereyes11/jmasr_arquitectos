import { getPayload } from 'payload'
import config from '@/payload.config'
import { PageHeader } from '@/components/PageHeader'
import { ProjectsGallery } from '@/components/ProjectsGallery'
import { ContactSection } from '@/components/ContactSection'
import { WhatsAppBanner } from '@/components/home/WhatsAppBanner'
import { StatsBanner } from '@/components/home/StatsBanner'
import type { Media } from '@/payload-types'

export const dynamic = 'force-dynamic'

export default async function ProyectosPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs: projects } = await payload.find({
    collection: 'projects',
    depth: 2,
  })

  const { image } = await payload.findGlobal({ slug: 'projects-header' })

  return (
    <div>
      <PageHeader
        image={image}
        title="PROYECTOS"
        subtitle="     Aquí podrás ver algunas de las obras ue forman parte de nuestro portafolio, proyectos
          residenciales, oficinasy naves industriales"
      />
      <ProjectsGallery projects={projects} />
      <WhatsAppBanner />
      <StatsBanner />
      <ContactSection />
    </div>
  )
}
