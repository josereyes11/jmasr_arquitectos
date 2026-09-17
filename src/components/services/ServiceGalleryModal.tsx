'use client'

import { useRef } from 'react'
import Image from 'next/image'
import type { Service } from '@/payload-types'

/* note: pulls the array-item type straight from the generated Service type instead of hand-typing it, so if the gallery field's shape ever changes, this updates itself (no manual re-typing, and it can't drift out of sync with payload-types.ts). */

type GalleryItem = NonNullable<Service['gallery']>[number]

export function ServiceGalleryModal({
  serviceName,
  images,
}: {
  serviceName: string
  images: GalleryItem[]
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="mt-4 text-sm font-semibold text-greenforest underline"
      >
        Ver fotos
      </button>
      {/* note: first modal in the project. Uses native <dialog> (showModal/close) no library, browser handles ESC/focus. */}
      <dialog ref={dialogRef} className="w-full max-w-3xl rounded-2xl p-6 backdrop:bg-black/60">
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="ml-auto block text-sm font-semibold text-neutral-500"
        >
          Cerrar
        </button>
        <h3 className="mt-2 text-xl font-bold uppercase">{serviceName}</h3>
        <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((item, index) => {
            const media = item.image
            if (typeof media !== 'object' || !media || !media.url) return null
            return (
              <li key={item.id ?? index}>
                <Image
                  src={media.url}
                  alt={media.alt}
                  width={media.width ?? 800}
                  height={media.height ?? 600}
                  className="h-40 w-full rounded-lg object-cover"
                />
              </li>
            )
          })}
        </ul>
      </dialog>
    </>
  )
}
