import Link from 'next/link'

export default async function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center items-center">
      <h1 className="text-4xl font-semibold">J+R | Arquitectos</h1>
      <p className="max-w-2xl text-neutral-600">
        Diseñamos espacios funcionales y accesibles para la vida cotidiana. Con más de 20 años de
        experiencia, acompañamos a nuestros clientes desde la idea hasta la obra terminada.
      </p>
      <Link
        href="/proyectos"
        className="rounded-lg bg-neutral-900 w-max px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
      >
        Ver proyectos
      </Link>
    </div>
  )
}

/*      
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'

-----------
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  ----------------

<div>
        {!user && <h1>Welcome to your new project.</h1>}
        {user && <h1>Welcome back, {user.email}</h1>}
        <div className="flex gap-3">
          <a
            className="bg-neutral-200 p-2 rounded-lg font-semibold"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
          <a
            className="bg-neutral-200 p-2 rounded-lg font-semibold"
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Documentation
          </a>
        </div>
      </div>
      <div>
        <p>Update this page by editing</p>
        <a href={fileURL}>
          <code>app/(frontend)/page.tsx</code>
        </a>
      </div> */
