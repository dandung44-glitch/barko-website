(function () {
  const API_BASE = '/api'
  let nomorWA = ''

  async function getNomorWA() {
    try {
      const res = await fetch(`${API_BASE}/pengaturan`)
      if (res.ok) {
        const data = await res.json()
        nomorWA = data.nomorWhatsApp || ''
      }
    } catch (_) {}
  }

  function showPesan(form, tipe, teks) {
    let el = form.querySelector('.reservasi-pesan')
    if (!el) {
      el = document.createElement('div')
      el.className = 'reservasi-pesan'
      form.appendChild(el)
    }
    el.className = `reservasi-pesan reservasi-pesan--${tipe}`
    el.textContent = teks
    el.style.display = 'block'
  }

  function validasiForm(data) {
    const errors = []
    if (!data.nama_tamu) errors.push('Nama tamu wajib diisi')
    if (!data.nomor_hp) errors.push('Nomor HP wajib diisi')
    if (!data.tanggal) errors.push('Tanggal kunjungan wajib diisi')
    if (!data.jumlah_tamu || data.jumlah_tamu < 1) errors.push('Jumlah tamu minimal 1 orang')
    if (!data.jenis_reservasi) errors.push('Pilih jenis reservasi')
    const today = new Date(); today.setHours(0,0,0,0)
    if (data.tanggal && new Date(data.tanggal) < today) errors.push('Tanggal tidak boleh di masa lalu')
    return errors
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const btn = form.querySelector('[type="submit"]')
    const originalText = btn ? btn.textContent : ''

    const data = {
      jenis_reservasi: form.querySelector('[name="jenis_reservasi"]')?.value,
      nama_tamu: form.querySelector('[name="nama_tamu"]')?.value,
      nomor_hp: form.querySelector('[name="nomor_hp"]')?.value,
      email: form.querySelector('[name="email"]')?.value,
      tanggal: form.querySelector('[name="tanggal"]')?.value,
      jam: form.querySelector('[name="jam"]')?.value,
      tanggal_checkout: form.querySelector('[name="tanggal_checkout"]')?.value,
      jumlah_tamu: form.querySelector('[name="jumlah_tamu"]')?.value,
      tipe_tempat: form.querySelector('[name="tipe_tempat"]')?.value,
      nama_unit: form.querySelector('[name="nama_unit"]')?.value,
      catatan: form.querySelector('[name="catatan"]')?.value,
    }

    const errors = validasiForm(data)
    if (errors.length) {
      showPesan(form, 'error', errors.join('. '))
      return
    }

    if (btn) { btn.disabled = true; btn.textContent = 'Mengirim...' }

    try {
      const res = await fetch(`${API_BASE}/reservasi`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok || !result.success) {
        showPesan(form, 'error', result.error || 'Terjadi kesalahan. Silakan coba lagi.')
        return
      }

      showPesan(form, 'sukses', 'Reservasi berhasil dikirim! Anda akan diarahkan ke WhatsApp untuk konfirmasi.')
      form.reset()

      setTimeout(() => {
        const waUrl = result.pesan_wa || (nomorWA ? `https://wa.me/${nomorWA}` : null)
        if (waUrl) window.open(waUrl, '_blank')
      }, 1500)

    } catch (err) {
      showPesan(form, 'error', 'Gagal menghubungi server. Periksa koneksi internet Anda.')
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = originalText }
    }
  }

  function init() {
    getNomorWA()
    const forms = document.querySelectorAll('[data-barko-form="reservasi"]')
    forms.forEach(form => form.addEventListener('submit', handleSubmit))
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
