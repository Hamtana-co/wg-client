export const isJSON = (value: string | null) => {
  if (typeof value !== "string") return false

  try {
    JSON.parse(value)
    return true
  } catch (e) {
    return false
  }
}
