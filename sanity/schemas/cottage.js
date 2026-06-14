import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cottage',
  title: 'Cottage',
  type: 'document',
  fields: [
    defineField({
      name: 'namaUnit',
      title: 'Nama Unit',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kapasitas',
      title: 'Kapasitas Tamu (maks)',
      type: 'number',
    }),
    defineField({
      name: 'hargaPerMalam',
      title: 'Harga per Malam (Rupiah)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'deskripsi',
      title: 'Deskripsi',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'fasilitas',
      title: 'Fasilitas',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Contoh: AC, TV, Hot Water, WiFi',
    }),
    defineField({
      name: 'foto',
      title: 'Foto Cottage',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'viewTipe',
      title: 'Tipe View',
      type: 'string',
      options: {
        list: [
          { title: 'City View', value: 'City View' },
          { title: 'Garden View', value: 'Garden View' },
          { title: 'Mountain View', value: 'Mountain View' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'tersedia',
      title: 'Tersedia?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'bahasaInggris',
      title: 'Terjemahan Bahasa Inggris',
      type: 'object',
      fields: [
        defineField({ name: 'deskripsi', title: 'Deskripsi (Inggris)', type: 'text', rows: 4 }),
      ],
    }),
  ],
  preview: {
    select: { title: 'namaUnit', subtitle: 'viewTipe', media: 'foto.0' },
  },
})
