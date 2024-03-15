"use client"

import { isJSON } from "@/utils/json"
import { useCallback } from "react"


type TStorageType = "session" | "local"

const getStorage = (type: TStorageType) => {
  if (typeof window !== "undefined") {
    return type === "session" ? window.sessionStorage : window.localStorage
  }
}

export const useStorage = () => {
  const save = useCallback(
    (key: string, value: string | object, type: TStorageType) => {
      const storage = getStorage(type)

      if (typeof value === "object") {
        value = JSON.stringify(value)
      }

      storage?.setItem(key, value)
    },
    []
  )

  const get = useCallback((key: string, type?: TStorageType): any => {
    if (type) {
      const storage = getStorage(type)
      return storage?.getItem(key)
    }

    const sessionStorage = getStorage("session")
    const localStorage = getStorage("local")

    let localValue = localStorage?.getItem(key)
    let sessionValue = sessionStorage?.getItem(key)

    if (localValue && isJSON(localValue)) {
      localValue = JSON.parse(localValue)
    }

    if (sessionValue && isJSON(sessionValue)) {
      sessionValue = JSON.parse(sessionValue)
    }

    return localValue || sessionValue
  }, [])

  const remove = (key: string, type?: TStorageType) => {
    if (type) {
      const storage = getStorage(type)
      return storage?.removeItem(key)
    }

    const sessionStorage = getStorage("session")
    const localStorage = getStorage("local")

    localStorage?.removeItem(key)
    sessionStorage?.removeItem(key)
  }

  return { get, save, remove }
}
