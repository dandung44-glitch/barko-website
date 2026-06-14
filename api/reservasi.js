import { createClient } from '@supabase/supabase-js'
import { handleCors } from './_middleware'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

function sanitize(str) {
  if (typeof str !== 'string') return str
  return str.trim().replace(/[<>]/g, '')
}

function buildPesanWA(data) {
  const jenis = data.jenis_reservasi === 'cottage' ? 'Cottage' : 'Restoran'
  let pesan = `Halo BARKO, saya ingin konfirmasi reservasi:\n\n`
  pesan += `📋 *Jenis:* ${jenis}\n`
  pesan += `👤 *Nama:* ${data.nama_tamu}\n`
  pesan += `📅 *Tanggal:* ${data.tanggal}\n`
  pesan += `👥 *Jumlah Tamu:* ${data.jumlah_tamu} orang\n`
  if (data.jam) pesan += `🕐 *Jam:* ${data.jam}\n`
  if (data.tipe_tempat) pesan += `📍 *Tempat:* ${data.tipe_tempat}\n`
  if (data.nama_unit) pesan += `🏡 *Unit:* ${data.nama_unit}\n`
  if (data.tanggal_checkout) pesan += `📅 *Checkout:* ${data.tanggal_checkout}\n`
  if (data.catatan) pesan += `📝 *Catatan:* ${data.catatan}\n`
  pesan += `\nMohon dikonfirmasi. Terima kasih!`
  return pesan
}

export default async function handler(req, res) {
  handleCors(res)

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Metode tidak diizinkan' })
  }

  const body = req.body
  const wajib = ['nama_tamu', 'nomor_hp', 'tanggal', 'jumlah_tamu', 'jenis_reservasi']
  for (const field of wajib) {
    if (!body[field]) {
      return res.status(400).json({ success: false, error: `Field '${field}' wajib diisi` })
    }
  }

  if (!['restoran', 'cottage'].includes(body.jenis_reservasi)) {
    return res.status(400).json({ success: false, error: 'Jenis reservasi tidak valid' })
  }

  const tanggalValid = /^\d{4}-\d{2}-\d{2}$/.test(body.tanggal)
  if (!tanggalValid) {
    return res.status(400).json({ success: false, error: 'Format tanggal tidak valid (gunakan YYYY-MM-DD)' })
  }

  const payload = {
    jenis_reservasi: body.jenis_reservasi,
    nama_tamu: sanitize(body.nama_tamu),
    nomor_hp: sanitize(body.nomor_hp),
    email: sanitize(body.email) || null,
    tanggal: body.tanggal,
    jam: body.jam || null,
    tanggal_checkout: body.tanggal_checkout || null,
    jumlah_tamu: parseInt(body.jumlah_tamu),
    tipe_tempat: sanitize(body.tipe_tempat) || null,
    nama_unit: sanitize(body.nama_unit) || null,
    catatan: sanitize(body.catatan) || null,
    status: 'menunggu',
  }

  const { data, error } = await supabase.from('reservasi').insert([payload]).select().single()

  if (error) {
    console.error('Supabase insert error:', error)
    return res.status(500).json({ success: false, error: 'Gagal menyimpan reservasi. Silakan coba lagi.' })
  }

  const pesanWA = buildPesanWA(payload)
  const waUrl = `https://wa.me/${process.env.WA_NOMOR}?text=${encodeURIComponent(pesanWA)}`

  return res.status(200).json({ success: true, id: data.id, pesan_wa: waUrl })
}
