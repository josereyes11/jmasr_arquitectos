import { getPayload } from 'payload'
import config from '@/payload.config'
import { WhatsAppBanner } from '@/components/home/WhatsAppBanner'
import { StatsBanner } from '@/components/home/StatsBanner'
import { ContactSection } from '@/components/ContactSection'
import { ValoresGrid } from '@/components/nosotros/ValoresGrid'
import { PageHeader } from '@/components/PageHeader'
import type { Media } from '@/payload-types'

export const dynamic = 'force-dynamic'

const CIMIENTOS_PARAGRAPHS = [
  'En J+R | ARQUITECTOS tenemos una propuesta de arquitectura accesible, funcional y cotidiana que nos ha posicionado como la primer opción de todos nuestros clientes a lo largo de 20 años de experiencia y que ahora le dan valor y respaldo a cada uno de nuestros proyectos. Estamos comprometidos con la calidad en construcción, con la vanguardia y la responsabilidad social, mismas que se reflejan en todos nuestros proyectos distribuidos en la Ciudad de México y zona metropolitana así como en el estado de Hidalgo.',

  'El alcance que hemos logrado nos permite concretar proyectos residenciales, industriales y públicos satisfaciendo las necesidades de nuestros clientes y de sus usuarios en cada desarrollo.',

  'Nuestra misión es satisfacer las necesidades del hábitat del ser humano con soluciones arquitectónicas óptimas que impacten directa y positivamente en el entorno de nuestros clientes. Dicho de otra forma, nuestra misión es escuchar, traducir y darle vida a los proyectos de nuestros clientes, caminando junto a ellos y dando pasos firmes hacia la visión que tienen para sus espacios.',

  'Queremos ser una firma reconocida por el carácter profesional que envuelve nuestra trayectoria sumando a esto un liderazgo en la innovación de materiales y procesos de construcción que nos permita ofrecer soluciones eficientes y reales.',

  'Nuestra visión está con la de nuestros clientes, buscamos alternativas para construir juntos el proyecto del que somos parte.',

  'Nuestra filosofía está fundamentada en el ser humano y la relación que tiene con sus propios espacios, vamos más allá de las obras, generamos significados, hábitats, lugares de encuentro y confort. Estamos comprometidos con la calidad de vida de las personas, la responsabilidad social y la importancia que los proyectos tienen para cada uno de nuestros clientes.',
]

export default async function NosotrosPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const nosotros = await payload.findGlobal({
    slug: 'nosotros',
    depth: 2,
  })

  return (
    <div>
      <PageHeader
        image={nosotros.image as Media}
        title="NOSOTROS"
        subtitle="Nuestra visión está con la de nuetsros clientes, buscamos alternativas ara construir juntos el proyecto del que somos parte."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold uppercase">Nuestros cimientos</h2>
        <div className="columns-1 gap-10 text-neutral-700 sm:columns-2">
          {CIMIENTOS_PARAGRAPHS.map((paragraph, index) => (
            <p key={index} className="mb-6 break-inside-avoid leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl font-bold uppercase">Nuestros valores</h2>
        <ValoresGrid images={nosotros.valoresImages} />
      </section>
      <WhatsAppBanner />
      <StatsBanner />
      <ContactSection />
    </div>
  )
}
