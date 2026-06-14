import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pengaturanSitus',
  title: 'Pengaturan Situs',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline Utama',
      type: 'string',
      description: 'Kalimat besar di halaman beranda',
    }),
    defineField({
      name: 'subtitles',
      title: 'Sub-Tagline',
      type: 'string',
      description: 'Kalimat pendek di bawah tagline',
    }),
    defineField({
      name: 'nomorWhatsApp',
      title: 'Nomor WhatsApp',
      type: 'string',
      description: 'Format: 628xxxxxxxxxx (tanpa + atau 0 di depan)',
    }),
    defineField({
      name: 'jamBuka',
      title: 'Jam Operasional',
      type: 'string',
      description: 'Contoh: Setiap hari 07.00 - 22.00 WIB',
    }),
    defineField({
      name: 'alamat',
      title: 'Alamat Lengkap',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'linkGoogleMaps',
      title: 'Link Google Maps',
      type: 'url',
    }),
    defineField({
      name: 'emailKontak',
      title: 'Email Kontak',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'URL Instagram',
      type: 'url',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'URL TikTok',
      type: 'url',
    }),
    defineField({
      name: 'infoCuaca',
      title: 'Info Cuaca & Suhu',
      type: 'text',
      rows: 3,
      description: 'Deskripsi suhu, cuaca, dan saran pakaian untuk tamu',
    }),
    defineField({
      name: 'waktuTerbaikKunjungan',
      title: 'Waktu Terbaik Berkunjung',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Pengaturan Situs BARKO' }
    },
  },
})
