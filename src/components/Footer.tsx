export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="max-w-3xl text-sm leading-relaxed">
          <span className="font-semibold text-white">J+R | ARQUITECTOS</span> Somos un despacho de
          arquitectura ubicado al norte de la Ciudad de México; nos gusta definir nuestro trabajo
          como una arquitectura accesible, funcional y cotidiana, esto nos ha permitido
          posicionarnos como la primer opción de todos nuestros clientes a lo largo de 20 años de
          experiencia. <span className="font-semibold">Seguir leyendo…</span>
        </p>
        <p className="max-w-3xl text-sm leading-relaxed mt-3">
          2159 2828 | 55 3959 5525 informes@jmasrarquitectos.com
        </p>
        <p className="max-w-3xl text-sm leading-relaxed mt-3">
          Boulevard Central #71-D, Bosques del Valle, Coacalco, Estado de México 55717
        </p>
        <p className="max-w-3xl text-sm leading-relaxed">Escríbenos por WhatsApp: (55) 1291 3496</p>
        <div className="mt-8 flex items-center gap-6 text-sm">
          <span className="font-semibold text-white">Síguenos</span>
          <a href="https://www.facebook.com/jmasrarquitectos/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com/jmasrarquitectos/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/j-r-arquitectos/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
