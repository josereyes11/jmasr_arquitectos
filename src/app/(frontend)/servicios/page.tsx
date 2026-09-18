import { getPayload } from 'payload'
import config from '@/payload.config'
import { WhatsAppBanner } from '@/components/home/WhatsAppBanner'
import { ServicesGrid } from '@/components/services/ServicesGrid'
import { PageHeader } from '@/components/PageHeader'
import { Media } from '@/payload-types'

export const dynamic = 'force-dynamic'

export default async function ServicesPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs: services } = await payload.find({
    collection: 'services',
    depth: 2,
  })

  const { image } = await payload.findGlobal({ slug: 'services-header' })

  return (
    <div>
      <PageHeader
        image={image as Media}
        title="SERVICIOS"
        subtitle="Más de veinte años de experiencia en la construcción nos avalan para brindarte un servicio completo y poder solucionar tus necesidades."
      />
      <WhatsAppBanner />
      <ServicesGrid services={services} />
    </div>
  )
}
