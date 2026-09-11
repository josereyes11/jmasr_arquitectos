import Link from 'next/link'

const slidesHeader = [1, 2, 3, 4, 5, 6]

export function GalleryHeader() {
  return (
    <section>
      {slidesHeader.map((slide) => (
        <Link key={slide} href="/proyectos"></Link>
      ))}
    </section>
  )
}
