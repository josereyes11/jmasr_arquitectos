import type { GlobalConfig } from 'payload'

export const ServicesHeader: GlobalConfig = {
  slug: 'services-header',
  typescript: { interface: 'ServicesHeader' },
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }],
}
