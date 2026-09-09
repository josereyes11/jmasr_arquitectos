import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <span className="text-lg font-bold tracking-wide">J+R | Arquitectos</span>
        </Link>
        <ul className="flex gap-8 text-sm font-medium text-neutral-700">
          <li>
            <Link href="/proyectos" className="hover:text-neutral-900">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/servicios" className="hover:text-neutral-900">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="hover:text-neutral-900">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-neutral-900">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
