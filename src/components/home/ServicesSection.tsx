import Link from 'next/link'
import type { Service } from '@/payload-types'

export function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section>
      <h2>SERVICIOS</h2>
      <ul>
        {services.map((service) => (
          <li key={dervice.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <Link href={'/servicios'}>Leer más...</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
