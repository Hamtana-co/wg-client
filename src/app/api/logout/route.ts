
import { api } from "@/common"
import { cookies } from "next/headers"

export async function POST() {
  api.defaults.headers.Authorization = null

  cookies().delete("token")
  cookies().delete("user")

  return new Response(null, {
    headers: { "Clear-Site-Data": '"cookies"' },
    status: 200,
    statusText: "OK",
  })
}
