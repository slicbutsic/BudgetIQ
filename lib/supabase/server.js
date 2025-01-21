// import { createClient as supabaseCreateClient } from '@supabase/supabase-js'
// import { cookies } from 'next/headers'

// export function createClient() {
//   const cookieStore = cookies()

//   return supabaseCreateClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//     {
//       // You can handle cookies manually like you were doing before
//       localStorage: {
//         get(name) {
//           return cookieStore.get(name)?.value
//         },
//         set(name, value, options) {
//           try {
//             cookieStore.set({ name, value, ...options })
//           } catch (error) {
//             console.error("Error setting cookie:", error)
//           }
//         },
//         remove(name) {
//           try {
//             cookieStore.set({ name, value: '' })
//           } catch (error) {
//             console.error("Error removing cookie:", error)
//           }
//         },
//       },
//     }
//   )
// }

import { createServerClient, CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}
