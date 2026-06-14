import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bestTime',
  title: 'Waktu Terbaik Kunjungan',
  type: 'document',
  fields: [
    defineField({
      name: 'waktu',
      title: 'Waktu',
      type: 'string',
      description: 'Contoh: Pagi (06.00 - 09.00)',
    }),
    defineField({
      name: 'deskripsi',
      title: 'Deskripsi',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight',
      type: 'string',
      description: 'Kata kunci, contoh: Kabut Pagi, Sunrise',
    }),
    defineField({
      name: 'ikon',
      title: 'Ikon (Emoji)',
      type: 'string',
      description: 'Contoh: 🌅 🌞 🌙',
    }),
  ],
  preview: {
    select: { title: 'waktu', subtitle: 'highlight' },
  },
})
