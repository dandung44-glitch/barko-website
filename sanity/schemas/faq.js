import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'pertanyaan',
      title: 'Pertanyaan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jawaban',
      title: 'Jawaban',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Umum', value: 'Umum' },
          { title: 'Reservasi', value: 'Reservasi' },
          { title: 'Peternakan', value: 'Peternakan' },
          { title: 'Cottage', value: 'Cottage' },
          { title: 'Acara', value: 'Acara' },
        ],
      },
    }),
    defineField({
      name: 'urutan',
      title: 'Urutan Tampil',
      type: 'number',
    }),
    defineField({
      name: 'bahasaInggris',
      title: 'Terjemahan Bahasa Inggris',
      type: 'object',
      fields: [
        defineField({ name: 'pertanyaan', title: 'Pertanyaan (Inggris)', type: 'string' }),
        defineField({ name: 'jawaban', title: 'Jawaban (Inggris)', type: 'text', rows: 4 }),
      ],
    }),
  ],
  orderings: [
    { title: 'Urutan', name: 'urutanAsc', by: [{ field: 'urutan', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'pertanyaan', subtitle: 'kategori' },
  },
})
