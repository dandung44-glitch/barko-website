import { createClient } from '@sanity/client'
import { handleCors } from './_middleware'

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
  apiVersion: '2024-01-01',
})

export default async function handler(req, res) {
  handleCors(res)

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Metode tidak diizinkan' })
  }

  const { kategori } = req.query
  let filter = '*[_type == "menu" && tersedia == true'
  if (kategori) filter += ` && kategori == "${kategori}"`
  filter += ']'

  const query = `${filter} | order(_createdAt asc) {
    _id,
    nama,
    kategori,
    deskripsi,
    harga,
    isSignature,
    "foto": foto.asset->url,
    bahasaInggris
  }`

  try {
    const data = await sanity.fetch(query)
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    return res.status(200).json(data)
  } catch (err) {
    console.error('Sanity fetch error:', err)
    return res.status(500).json({ error: 'Gagal mengambil data menu' })
  }
}
