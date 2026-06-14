(function () {
  const API_BASE = '/api'

  const SKELETON = `<div style="background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:8px;height:1.2em;width:80%;margin:.5em 0"></div>`

  if (!document.querySelector('#barko-shimmer-style')) {
    const style = document.createElement('style')
    style.id = 'barko-shimmer-style'
    style.textContent = `@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`
    document.head.appendChild(style)
  }

  async function fetchAPI(endpoint) {
    const res = await fetch(`${API_BASE}/${endpoint}`)
    if (!res.ok) throw new Error(`API error: ${res.status}`)
    return res.json()
  }

  function formatRupiah(angka) {
    return 'Rp ' + Number(angka).toLocaleString('id-ID')
  }

  const renderers = {
    'tagline': async (el) => {
      const data = await fetchAPI('pengaturan')
      if (data && data.tagline) el.textContent = data.tagline
    },
    'jam-buka': async (el) => {
      const data = await fetchAPI('pengaturan')
      if (data && data.jamBuka) el.textContent = data.jamBuka
    },
    'nomor-wa': async (el) => {
      const data = await fetchAPI('pengaturan')
      if (data && data.nomorWhatsApp) {
        el.textContent = data.nomorWhatsApp
        if (el.tagName === 'A') el.href = `https://wa.me/${data.nomorWhatsApp}`
      }
    },
    'menu-list': async (el) => {
      const kategori = el.dataset.barkoKategori || ''
      const url = kategori ? `menu?kategori=${encodeURIComponent(kategori)}` : 'menu'
      const items = await fetchAPI(url)
      if (!items || !items.length) { el.innerHTML = '<p>Menu belum tersedia.</p>'; return }
      el.innerHTML = items.map(item => `
        <div class="menu-item" data-kategori="${item.kategori || ''}">
          ${item.foto ? `<img src="${item.foto}" alt="${item.nama}" loading="lazy">` : ''}
          <div class="menu-item-info">
            <h3>${item.nama}${item.isSignature ? ' <span class="badge-signature">Unggulan</span>' : ''}</h3>
            ${item.deskripsi ? `<p>${item.deskripsi}</p>` : ''}
            <strong>${formatRupiah(item.harga)}</strong>
          </div>
        </div>
      `).join('')
    },
    'cottage-list': async (el) => {
      const items = await fetchAPI('cottage')
      if (!items || !items.length) { el.innerHTML = '<p>Informasi cottage belum tersedia.</p>'; return }
      el.innerHTML = items.map(item => `
        <div class="cottage-item">
          ${item.foto && item.foto[0] ? `<img src="${item.foto[0]}" alt="${item.namaUnit}" loading="lazy">` : ''}
          <div class="cottage-info">
            <h3>${item.namaUnit}</h3>
            ${item.viewTipe ? `<span class="cottage-view">${item.viewTipe}</span>` : ''}
            ${item.deskripsi ? `<p>${item.deskripsi}</p>` : ''}
            ${item.kapasitas ? `<p>Kapasitas: ${item.kapasitas} tamu</p>` : ''}
            ${item.fasilitas ? `<ul>${item.fasilitas.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
            <strong>${formatRupiah(item.hargaPerMalam)} / malam</strong>
          </div>
        </div>
      `).join('')
    },
  }

  async function loadAll() {
    const elements = document.querySelectorAll('[data-barko]')
    elements.forEach(el => { el.dataset.barkoOriginal = el.innerHTML; el.innerHTML = SKELETON })

    const promises = Array.from(elements).map(async (el) => {
      const key = el.dataset.barko
      const renderer = renderers[key]
      if (!renderer) return
      try {
        await renderer(el)
      } catch (err) {
        console.warn(`[CMS] Gagal load "${key}":`, err)
        el.innerHTML = el.dataset.barkoOriginal || ''
      }
    })

    await Promise.all(promises)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAll)
  } else {
    loadAll()
  }
})()
