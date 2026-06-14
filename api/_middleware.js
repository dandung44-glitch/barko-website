import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function verifyAdmin(req, allowedRoles = ['admin']) {
  const authHeader = req.headers['authorization']
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Token autentikasi tidak ditemukan', status: 401 }
  }

  const token = authHeader.replace('Bearer ', '')

  const { data: { user }, error: authError } = await supabase.auth.getUser(token)
  if (authError || !user) {
    return { error: 'Token tidak valid atau sudah kadaluarsa', status: 401 }
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('nama, role')
    .eq('id', user.id)
    .single()

  if (profileError || !profile) {
    return { error: 'Profil pengguna tidak ditemukan', status: 401 }
  }

  if (!allowedRoles.includes(profile.role)) {
    return { error: 'Anda tidak memiliki akses ke fitur ini', status: 403 }
  }

  return { user: { ...user, ...profile } }
}

export function handleCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}
