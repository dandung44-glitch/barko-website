import { createClient } from '@supabase/supabase-js'
import { verifyAdmin, handleCors } from './_middleware'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  handleCors(res)

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Metode tidak diizinkan' })
  }

  const auth = await verifyAdmin(req, ['admin'])
  if (auth.error) {
    return res.status(auth.status).json({ error: auth.error })
  }

  const { bulan } = req.query
  let query = supabase.from('laporan_bulanan').select('*').order('bulan', { ascending: false })

  if (bulan) {
    query = query.gte('bulan', `${bulan}-01`).lt('bulan', nextMonth(bulan))
  } else {
    query = query.limit(6)
  }

  const { data, error } = await query
  if (error) {
    return res.status(500).json({ error: 'Gagal mengambil data laporan' })
  }

  return res.status(200).json(data)
}

function nextMonth(bulan) {
  const [y, m] = bulan.split('-').map(Number)
  const next = m === 12 ? `${y + 1}-01` : `${y}-${String(m + 1).padStart(2, '0')}`
  return `${next}-01`
}
