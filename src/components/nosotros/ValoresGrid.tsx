import Image from 'next/image'
import type { Nosotros } from '@/payload-types'

export function ValoresGrid({ images }: { images: Nosotros['valoresImages'] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {images?.map((item, index) => {
        const media = item.image
        if (typeof media !== 'object' || !media || !media.url) return null
        return (
          <div key={item.id ?? index} className="relative aspect-square overflow-hidden rounded-xl">
            <Image src={media.url} alt={media.alt} fill className="object-cover" />
          </div>
        )
      })}
    </div>
  )
}
