import type { GlobalConfig } from 'payload'
export const Nosotros: GlobalConfig = {
  slug: 'nosotros',
  typescript: {
    interface: 'Nosotros',
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'valoresImages',
      type: 'array',
      minRows: 6,
      maxRows: 6,
      labels: {
        singular: 'Imagen',
        plural: 'Imágenes',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      admin: {
        description: 'Imágenes para la sección "Nuestros valores".',
      },
    },
  ],
}
