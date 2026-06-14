import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'peternakan',
  title: 'Aktivitas Peternakan',
  type: 'document',
  fields: [
    defineField({
      name: 'judulAktivitas',
      title: 'Judul Aktivitas',
      type: 'string',
    }),
    defineField({
      name: 'deskripsi',
      title: 'Deskripsi',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'jadwal',
      title: 'Jadwal',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'hari', title: 'Hari', type: 'string' }),
            defineField({ name: 'jam', title: 'Jam', type: 'string' }),
            defineField({ name: 'aktivitas', title: 'Aktivitas', type: 'string' }),
          ],
          preview: {
            select: { title: 'aktivitas', subtitle: 'hari' },
          },
        },
      ],
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'judulAktivitas', media: 'foto' },
  },
})
