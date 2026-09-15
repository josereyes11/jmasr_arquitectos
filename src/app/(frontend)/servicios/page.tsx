import { getPayload } from 'payload'
import config from '@/payload.config'
import { WhatsAppBanner } from '@/components/home/WhatsAppBanner'
import { ServicesGrid } from '@/components/services/ServicesGrid'

export const dynamic = 'force-dynamic'

export default async function ServicesPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs: services } = await payload.find({
    collection: 'services',
    depth: 2,
  })

  return (
    <div>
      <h1>SERVICIOS</h1>
      <WhatsAppBanner />
      <ServicesGrid services={services} />
    </div>
  )
}
