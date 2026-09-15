import { getPayload } from 'payload'
import config from '@/payload.config'
import { GallerySlider } from '@/components/projects/GallerySlider'
import { ProjectsGallery } from '@/components/ProjectsGallery'
import { ContactSection } from '@/components/ContactSection'

export const dynamic = 'force-dynamic'

export default async function ProyectosPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs: projects } = await payload.find({
    collection: 'projects',
    depth: 2,
  })

  const highlightedProjects = projects.filter((project) => project.featured)

  return (
    <div>
      <GallerySlider projects={highlightedProjects} />
      <ProjectsGallery projects={projects} />
      <ContactSection />
    </div>
  )
}
