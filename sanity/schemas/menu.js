import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menu & Minuman',
  type: 'document',
  fields: [
    defineField({
      name: 'nama',
      title: 'Nama Menu',
      type: 'string',
      validation: (Rule) => Rule.required().error('Nama menu wajib diisi'),
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Kopi', value: 'Kopi' },
          { title: 'Non-Kopi', value: 'Non-Kopi' },
          { title: 'Makanan Utama', value: 'Makanan Utama' },
          { title: 'Camilan', value: 'Camilan' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'deskripsi',
      title: 'Deskripsi',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'harga',
      title: 'Harga (Rupiah)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).error('Harga wajib diisi'),
    }),
    defineField({
      name: 'foto',
      title: 'Foto Menu',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'isSignature',
      title: 'Menu Unggulan?',
      type: 'boolean',
      description: 'Centang jika ini adalah menu andalan BARKO',
      initialValue: false,
    }),
    defineField({
      name: 'tersedia',
      title: 'Tersedia?',
      type: 'boolean',
      description: 'Jika tidak dicentang, menu tidak akan tampil di website',
      initialValue: true,
    }),
    defineField({
      name: 'bahasaInggris',
      title: 'Terjemahan Bahasa Inggris',
      type: 'object',
      fields: [
        defineField({ name: 'nama', title: 'Nama (Inggris)', type: 'string' }),
        defineField({ name: 'deskripsi', title: 'Deskripsi (Inggris)', type: 'text', rows: 3 }),
      ],
    }),
  ],
  preview: {
    select: { title: 'nama', subtitle: 'kategori', media: 'foto' },
  },
})
