import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'paketAcara',
  title: 'Paket Acara',
  type: 'document',
  fields: [
    defineField({
      name: 'namaPackage',
      title: 'Nama Paket',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deskripsi',
      title: 'Deskripsi',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'kapasitasMin',
      title: 'Kapasitas Minimum (orang)',
      type: 'number',
    }),
    defineField({
      name: 'kapasitasMax',
      title: 'Kapasitas Maksimum (orang)',
      type: 'number',
    }),
    defineField({
      name: 'hargaMulaiDari',
      title: 'Harga Mulai Dari (Rupiah)',
      type: 'number',
    }),
    defineField({
      name: 'termasuk',
      title: 'Yang Termasuk dalam Paket',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Contoh: Dekorasi, Catering, Sound System',
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aktif',
      title: 'Paket Aktif?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'namaPackage', media: 'foto' },
  },
})
