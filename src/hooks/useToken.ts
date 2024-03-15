import jwt, { JwtPayload } from "jwt-decode"
import { useCallback } from "react"

export const useToken = () => {
  const getPayload = useCallback((token: string) => {
    try {
      return jwt.jwtDecode(token) as JwtPayload
    } catch (e) {
      return null
    }
  }, [])

  const isExpired = useCallback(
    (token: string) => {
      const payload = getPayload(token)

      if (!payload?.exp) return true

      const currentTimestamp = Date.now() / 1000
      return payload.exp < currentTimestamp
    },
    [getPayload]
  )

  return { getPayload, isExpired }
}
