import type { Service } from '@/payload-types'
import { ServiceGalleryModal } from './ServiceGalleryModal'

export function ServiceCard({ service }: { service: Service }) {
  const icon = service.icon
  const hasIcon = typeof icon === 'object' && icon !== null && icon.url

  const gallery = service.gallery
  const hasGallery = gallery && gallery.length > 0

  return (
    <article>
      {hasIcon && <img src={icon.url!} alt={icon.alt} />}
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      {hasGallery && <ServiceGalleryModal serviceName={service.name} images={gallery} />}
    </article>
  )
}

// plain <img> for the icon (SVG) next/image would need dangerouslyAllowSVG, skipped on purpose.
