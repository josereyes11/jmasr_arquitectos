import type { GlobalConfig } from 'payload'

export const ProjectsHeader: GlobalConfig = {
  slug: 'projects-header',
  typescript: { interface: 'ProjectsHeader' },
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
