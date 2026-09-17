import type { Service } from '@/payload-types'
import { ServiceGalleryModal } from './ServiceGalleryModal'

export function ServiceCard({ service }: { service: Service }) {
  const icon = service.icon
  const hasIcon = typeof icon === 'object' && icon !== null && icon.url

  const gallery = service.gallery
  const hasGallery = gallery && gallery.length > 0

  return (
    <article className="mb-6 rounded-2xl border border-neutral-200 bg-white p-6">
      {hasIcon && <img src={icon.url!} alt={icon.alt} className="h-12 w-12" />}
      <h3 className="mt-2 text-lg font-bold uppercase">{service.name}</h3>
      <p className="mt-2 text-sm text-neutral-600">{service.description}</p>
      {hasGallery && <ServiceGalleryModal serviceName={service.name} images={gallery} />}
    </article>
  )
}

// plain <img> for the icon (SVG) next/image would need dangerouslyAllowSVG, skipped on purpose.
