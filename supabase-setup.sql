-- ============================================================
-- BARKO — Setup Database Supabase
-- Jalankan script ini di Supabase SQL Editor:
-- https://supabase.com/dashboard → project → SQL Editor
-- ============================================================

-- 1. Tabel Reservasi
CREATE TABLE IF NOT EXISTS reservasi (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  jenis_reservasi TEXT NOT NULL CHECK (jenis_reservasi IN ('restoran', 'cottage')),
  nama_tamu TEXT NOT NULL,
  nomor_hp TEXT NOT NULL,
  email TEXT,
  tanggal DATE NOT NULL,
  jam TIME,
  tanggal_checkout DATE,
  jumlah_tamu INTEGER NOT NULL,
  tipe_tempat TEXT,
  nama_unit TEXT,
  catatan TEXT,
  status TEXT DEFAULT 'menunggu' CHECK (status IN ('menunggu', 'dikonfirmasi', 'ditolak', 'selesai')),
  diproses_oleh TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabel Profil Staf (linked ke Supabase Auth)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  nama TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'editor', 'viewer')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. View Laporan Bulanan
CREATE OR REPLACE VIEW laporan_bulanan AS
SELECT
  DATE_TRUNC('month', tanggal) AS bulan,
  jenis_reservasi,
  COUNT(*) AS total_reservasi,
  COUNT(CASE WHEN status = 'dikonfirmasi' THEN 1 END) AS dikonfirmasi,
  COUNT(CASE WHEN status = 'ditolak' THEN 1 END) AS ditolak,
  SUM(jumlah_tamu) AS total_tamu
FROM reservasi
GROUP BY 1, 2
ORDER BY 1 DESC;

-- 4. Aktifkan Row Level Security
ALTER TABLE reservasi ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policy: Reservasi
-- Pengunjung publik hanya bisa INSERT
CREATE POLICY "Pengunjung bisa buat reservasi"
  ON reservasi FOR INSERT
  TO anon
  WITH CHECK (true);

-- Viewer, editor, admin bisa SELECT
CREATE POLICY "Staf bisa lihat reservasi"
  ON reservasi FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'editor', 'viewer')
    )
  );

-- Admin dan editor bisa UPDATE
CREATE POLICY "Admin dan editor bisa update reservasi"
  ON reservasi FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'editor')
    )
  );

-- Admin bisa DELETE
CREATE POLICY "Admin bisa hapus reservasi"
  ON reservasi FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- 6. RLS Policy: Profiles
-- Semua staf bisa lihat profil
CREATE POLICY "Staf bisa lihat semua profil"
  ON profiles FOR SELECT
  TO authenticated
  USING (true);

-- Hanya admin yang bisa update role
CREATE POLICY "Admin bisa update profil staf"
  ON profiles FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles AS p
      WHERE p.id = auth.uid()
      AND p.role = 'admin'
    )
  );

-- 7. Buat akun admin pertama (ganti email dan nama sesuai kebutuhan)
-- Jalankan ini SETELAH membuat akun di Supabase Auth → Authentication → Users
-- INSERT INTO profiles (id, nama, role)
-- VALUES ('<user-id-dari-supabase-auth>', 'Nama Admin', 'admin');
