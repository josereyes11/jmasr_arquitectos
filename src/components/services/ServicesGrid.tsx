import type { Service } from '@/payload-types'
import { ServiceCard } from './ServiceCard'

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="columns-3">
      {services.map((service) => (
        <div key={service.id} className="break-inside-avoid">
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  )
}

// 3-column layout via CSS column not grid. Cards flow top-to-bottom per column, pinterest-style.

// break-inside-avoid tells the browser "never split this element between columns." Without this, a card can get visually cut in half across two columns.
