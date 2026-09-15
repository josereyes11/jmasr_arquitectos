import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'icon'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      // note: icon is now an SVG upload, not text. Existing services need their icon re-uploaded.
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Ícono descriptivo',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      // note: optional photos for this service. If it has any, the card auto-shows a "Ver fotos" button/modal.
      name: 'gallery',
      type: 'array',
      labels: {
        singular: 'Foto',
        plural: 'Fotos',
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
        description:
          'Opcional. Si agregas fotos aquí, la tarjeta de este servicio mostrará un botón "Ver fotos" que abre un modal con estas imágenes.',
      },
    },
  ],
}
