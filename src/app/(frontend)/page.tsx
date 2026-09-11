import Link from 'next/link'

export default async function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center items-center">
      <section>Gallery Header</section>
      <section>Gallery proyects</section>
      <div>
        Ahora también estamos disponibles vía WhatsApp. Tel. (55) 1291 3496. Envíanos tus preguntas
        vía WhatsApp y con gusto un asesor te atenderá.
      </div>
      <section>Servicios</section>
      <div>Gallery statistics</div>
      <div>Contacto</div>
    </div>
  )
}
