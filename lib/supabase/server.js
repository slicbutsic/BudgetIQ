import { createClient as supabaseCreateClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return supabaseCreateClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      // You can handle cookies manually like you were doing before
      localStorage: {
        get(name) {
          return cookieStore.get(name)?.value
        },
        set(name, value, options) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            console.error("Error setting cookie:", error)
          }
        },
        remove(name) {
          try {
            cookieStore.set({ name, value: '' })
          } catch (error) {
            console.error("Error removing cookie:", error)
          }
        },
      },
    }
  )
}
