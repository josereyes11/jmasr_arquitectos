import Link from 'next/link'

export function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <span>J+R | Arquitectos</span>
        </Link>
        <ul>
          <li>
            <Link href="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link href="/servicios">Servicios</Link>
          </li>
          <li>
            <Link href="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
