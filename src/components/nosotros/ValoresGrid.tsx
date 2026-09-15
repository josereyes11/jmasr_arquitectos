import Image from 'next/image'
import type { Nosotros } from '@/payload-types'

export function ValoresGrid({ images }: { images: Nosotros['valoresImages'] }) {
  return (
    <div className="grid grid-cols-3">
      {images?.map((item, index) => {
        const media = item.image
        if (typeof media !== 'object' || !media || !media.url) return null
        return (
          <div key={item.id ?? index}>
            <Image
              src={media.url}
              alt={media.alt}
              width={media.width ?? 800}
              height={media.height ?? 600}
            />
          </div>
        )
      })}
    </div>
  )
}
