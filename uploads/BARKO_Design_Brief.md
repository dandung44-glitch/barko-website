# BARKO (Barn and Koffee) — Brief Pembuatan Website

> Dokumen ini adalah instruksi untuk membangun website BARKO. Bangun sebagai website multi-halaman yang modern, responsif (mobile-first), dan estetis. Utamakan rasa "slow living" lewat ruang kosong yang lega, foto besar, dan animasi yang halus dan lambat.

---

## 1. Tentang Brand

- **Nama**: BARKO (singkatan dari Barn and Koffee)
- **Konsep**: Restoran kopi di kaki gunung dengan pemandangan peternakan dan city view dari ketinggian 1000 mdpl.
- **Tagline utama**: Slow Living Experience
- **Lokasi**: Kaki gunung di Jawa Barat (kebun, peternakan, kabut pagi, city view malam hari).
- **Cakupan**: Restoran sekaligus penginapan (cottage). Web ini menampilkan keduanya.

### Janji brand (yang harus terasa di seluruh web)
Tempat untuk melambat. Sasarannya adalah orang kota yang jenuh dengan hiruk pikuk, datang untuk udara dingin, hijau, tenang, dan dekat dengan alam serta hewan ternak. Web harus menjual *perasaan* dulu (tenang, lega, lega napas), baru fasilitas dan menu.

### Target audiens
- Profesional dan keluarga urban (Jakarta, Bandung, sekitarnya) yang mencari pelarian akhir pekan.
- Pencari pengalaman dan konten (spot foto, sunrise/sunset).
- Penyelenggara acara (gathering kantor, prewedding, retreat).

---

## 2. Arah Desain

### Palet warna (earthy, alami)
- Cokelat hangat sebagai warna utama
- Hijau hutan sebagai aksen alam
- Krem dan putih gading sebagai latar lega
- Sentuhan terakota untuk tombol dan highlight

### Tipografi
- Heading: serif yang elegan dan bernuansa tenang
- Body: sans-serif yang bersih dan mudah dibaca
- Ukuran besar dan jarak antar baris longgar untuk kesan santai

### Citra dan tekstur
- Foto full lebar (full-bleed) untuk hero dan transisi antar bagian
- Subjek foto: pemandangan kaki gunung, kebun, peternakan, kabut pagi, city view, secangkir kopi
- Tekstur kayu dan linen sebagai pelengkap, jangan berlebihan
- Untuk sementara, gunakan placeholder gambar dengan rasio yang jelas dan beri label apa isi fotonya, supaya mudah diganti nanti

### Gerak dan interaksi
- Animasi lembut dan lambat: fade-in saat scroll, parallax ringan pada hero
- Hindari animasi cepat atau ramai
- Hover halus pada tombol dan kartu

### Prinsip layout
- Banyak ruang kosong (breathing room)
- Satu pesan kuat per bagian, jangan padat
- Mobile-first, pastikan rapi di layar kecil

---

## 3. Bahasa

- Website dwibahasa: Bahasa Indonesia dan Inggris.
- Sediakan tombol pengalih bahasa (ID / EN) di navigasi.
- Default Bahasa Indonesia.

---

## 4. Struktur Halaman

Navigasi utama: Beranda, Tentang, Pengalaman, Menu, Peternakan, Menginap, Galeri, Reservasi, Lokasi, Kontak.

### 4.1 Beranda
- Hero foto pemandangan full layar dengan tagline "Slow Living Experience" dan subjudul singkat tentang ngopi di ketinggian 1000 mdpl.
- Dua tombol ajakan: "Reservasi Sekarang" dan "Jelajahi Pengalaman".
- Bagian ringkas: cuplikan tentang BARKO, cuplikan menu unggulan, cuplikan peternakan, cuplikan cottage, masing masing dengan tombol ke halaman terkait.
- Sisipkan satu kutipan testimoni singkat.

### 4.2 Tentang BARKO
- Cerita asal usul dan filosofi slow living.
- Penjelasan lokasi, ketinggian, dan suasana.
- Nilai yang diusung: dekat alam, farm-to-table, ketenangan.

### 4.3 The Experience (Pengalaman)
- Jabarkan pengalaman yang dijual dalam beberapa kartu: ngopi dengan city view, sunrise dan sunset, udara gunung, interaksi dengan ternak, suasana kebun.
- Tampilkan dengan foto besar dan teks pendek per poin.

### 4.4 Menu
- Bagi menjadi kategori: Kopi (utama), Non-kopi, Makanan Utama, Camilan.
- Tampilkan dengan foto, nama, deskripsi singkat, dan harga.
- Tandai item signature dengan label khusus.
- Sediakan filter atau tab kategori.
- Kaitkan dengan cerita farm-to-table bila relevan.

### 4.5 Peternakan
- Jelaskan aktivitas: memberi makan ternak, edukasi anak, melihat dari dekat.
- Tampilkan jadwal aktivitas dengan jam yang jelas (contoh: jam memberi makan ternak), supaya pengunjung tahu kapan datang.
- Hubungkan ke konsep farm-to-table.

### 4.6 Menginap (Cottage)
- Tampilkan tipe kamar atau unit cottage dengan foto, kapasitas, fasilitas, dan view.
- Cantumkan harga per malam dan apa yang termasuk (sarapan, akses fasilitas).
- Tombol "Cek Ketersediaan" yang mengarah ke alur reservasi.

### 4.7 Galeri
- Kumpulan foto: kebun, ternak, kabut pagi, city view malam, sudut spot foto.
- Tata sebagai grid yang rapi dengan lightbox saat diklik.

### 4.8 Reservasi
- Lihat detail alur di bagian 5.

### 4.9 Lokasi dan Akses
- Peta lokasi (placeholder embed peta).
- Petunjuk rute dari kota besar terdekat.
- Info parkir: kapasitas mobil dan motor, kondisi jalur menuju lokasi.
- Best time to visit dan info cuaca: waktu terbaik untuk sunrise/sunset, kisaran suhu, dan saran pakaian hangat.

### 4.10 Kontak / Footer
- Jam operasional, nomor WhatsApp, alamat, tautan media sosial.
- Form atau kotak newsletter sederhana untuk promo musiman.
- Tautan cepat ke semua halaman.

---

## 5. Alur Reservasi (penting)

Reservasi memakai pola: isi form dulu, lalu lanjut ke WhatsApp.

### Langkah
1. Pengguna memilih jenis reservasi: Meja Restoran atau Cottage.
2. **Untuk Meja Restoran**, form berisi: tanggal, jam, jumlah tamu, pilihan indoor atau outdoor, dan catatan khusus.
3. **Untuk Cottage**, form berisi: tanggal check-in, tanggal check-out, tipe unit, jumlah tamu, dan catatan khusus.
4. Setelah isi form, tampilkan tombol "Lanjutkan via WhatsApp".
5. Tombol itu membuka WhatsApp dengan pesan yang sudah terisi otomatis berisi semua data dari form (gunakan tautan wa.me dengan teks ter-encode).
6. Validasi input dasar sebelum lanjut (tanggal tidak boleh kosong, jumlah tamu wajib diisi).

### Catatan teknis
- Karena ini prototipe desain, tidak perlu backend. Cukup rakit pesan WhatsApp dari isi form.
- Sediakan nomor WhatsApp placeholder yang mudah diganti.

---

## 6. Fitur Tambahan yang Wajib Ada

- **Paket Acara / Gathering**: bagian atau halaman untuk gathering kantor, prewedding, dan retreat akhir pekan. Sertakan ringkasan paket dan tombol "Tanya Paket" via WhatsApp.
- **Best Time and Cuaca**: sudah masuk di halaman Lokasi, tonjolkan juga sebagai info berguna bagi tamu kota.
- **Galeri Foto**: sudah masuk sebagai halaman tersendiri.
- **FAQ**: pertanyaan umum seperti apakah ramah anak, boleh bawa hewan peliharaan, ramah lansia, ketersediaan wifi dan sinyal, dan kebijakan reservasi. Tata sebagai accordion.
- **Dwibahasa ID/EN**: sudah dijelaskan di bagian 3.

---

## 7. Catatan Konten dan Placeholder

- Semua teks naratif boleh memakai isi sementara yang masuk akal sesuai konsep, tandai jelas mana yang perlu diganti oleh pemilik.
- Semua foto memakai placeholder berlabel isi yang diinginkan (contoh: "FOTO: kabut pagi di kebun").
- Harga, nomor WhatsApp, alamat, jam operasional, dan tautan media sosial memakai placeholder yang mudah dicari dan diganti.

---

## 8. Prioritas Akhir

1. Rasa slow living harus terasa kuat lewat ruang dan foto.
2. Reservasi mudah dan langsung tersambung ke WhatsApp.
3. Tampilan rapi dan cepat di ponsel.
4. Mudah diganti kontennya karena ini masih prototipe.
