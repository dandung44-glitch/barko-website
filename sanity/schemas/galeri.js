import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'galeri',
  title: 'Galeri Foto',
  type: 'document',
  fields: [
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'keterangan',
      title: 'Keterangan Foto',
      type: 'string',
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Kebun', value: 'Kebun' },
          { title: 'Peternakan', value: 'Peternakan' },
          { title: 'Pemandangan', value: 'Pemandangan' },
          { title: 'Makanan', value: 'Makanan' },
          { title: 'Cottage', value: 'Cottage' },
          { title: 'Acara', value: 'Acara' },
        ],
      },
    }),
    defineField({
      name: 'urutan',
      title: 'Urutan Tampil',
      type: 'number',
      description: 'Angka lebih kecil tampil lebih dulu',
    }),
  ],
  orderings: [
    { title: 'Urutan', name: 'urutanAsc', by: [{ field: 'urutan', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'keterangan', subtitle: 'kategori', media: 'foto' },
  },
})
