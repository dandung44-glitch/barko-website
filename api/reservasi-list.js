import { createClient } from '@supabase/supabase-js'
import { verifyAdmin, handleCors } from './_middleware'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  handleCors(res)

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method === 'GET') {
    const auth = await verifyAdmin(req, ['admin', 'editor', 'viewer'])
    if (auth.error) return res.status(auth.status).json({ error: auth.error })

    const { status, tanggal } = req.query
    let query = supabase
      .from('reservasi')
      .select('*')
      .order('created_at', { ascending: false })

    if (status) query = query.eq('status', status)
    if (tanggal) {
      query = query
        .gte('tanggal', `${tanggal}-01`)
        .lt('tanggal', nextMonth(tanggal))
    }

    const { data, error } = await query
    if (error) return res.status(500).json({ error: 'Gagal mengambil daftar reservasi' })
    return res.status(200).json(data)
  }

  if (req.method === 'PATCH') {
    const auth = await verifyAdmin(req, ['admin', 'editor'])
    if (auth.error) return res.status(auth.status).json({ error: auth.error })

    const { id, status } = req.body
    if (!id || !status) {
      return res.status(400).json({ error: 'ID dan status wajib diisi' })
    }

    const validStatus = ['menunggu', 'dikonfirmasi', 'ditolak', 'selesai']
    if (!validStatus.includes(status)) {
      return res.status(400).json({ error: 'Status tidak valid' })
    }

    const { error } = await supabase
      .from('reservasi')
      .update({ status, diproses_oleh: auth.user.nama, updated_at: new Date().toISOString() })
      .eq('id', id)

    if (error) return res.status(500).json({ error: 'Gagal memperbarui status reservasi' })
    return res.status(200).json({ success: true })
  }

  return res.status(405).json({ error: 'Metode tidak diizinkan' })
}

function nextMonth(bulan) {
  const [y, m] = bulan.split('-').map(Number)
  const next = m === 12 ? `${y + 1}-01` : `${y}-${String(m + 1).padStart(2, '0')}`
  return `${next}-01`
}
