import type { GlobalConfig } from 'payload'

export const ContactBackground: GlobalConfig = {
  slug: 'contact-background',
  typescript: { interfcae: 'ContactBackground' },
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }],
}
