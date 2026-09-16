import Link from 'next/link'
import type { Service } from '@/payload-types'

export function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-black uppercase">SERVICIOS</h2>
      <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.id}>
            <h3 className="text-lg font-bold">{service.name}</h3>
            <p className="mt-1 text-sm text-neutral-600">{service.description}</p>
            <Link
              href={'/servicios'}
              className="mt-2 inline-block text-sm font-semibold text-greenforest hover:underline"
            >
              Leer más...
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
