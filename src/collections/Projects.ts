import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'year', 'location'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier e.g. "casa-del-valle"',
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Residencial', value: 'residencial' },
        { label: 'Oficinas', value: 'oficinas' },
        { label: 'Restaurantes', value: 'restaurantes' },
        { label: 'Proyectos especiales', value: 'proyectos-especiales' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mostrar este proyecto en homepage',
      },
    },
  ],
}
