import { getPayload } from 'payload'
import config from '@/payload.config'
import { GalleryHeader } from '@/components/home/GalleryHeader'
import { ProjectsGalelry } from '@/components/home/ProjectsGallery'
import { WhatsAppBanner } from '@/components/home/WhatsAppBanner'
import { ServicesSection } from '@/components/home/ServicesSection'
import { StatsBanner } from '@/components/home/StatsBanner'
import { ContactSection } from '@/components/home/ContactSection'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const [{ docs: featuredProjects }, { docs: services }] = await Promise.all([
    payload.find({
      collection: 'projects',
      where: { featured: { equals: true } },
      depth: 2,
    }),
    payload.find({
      collection: 'services',
    }),
  ])

  return (
    <div>
      <GalleryHeader />
      <ProjectsGalelry projects={featuredProjects} />
      <WhatsAppBanner />
      <ServicesSection services={services} />
      <StatsBanner />
      <ContactSection />
    </div>
  )
}
