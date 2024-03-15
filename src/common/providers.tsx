"use client"

import { PropsWithChildren } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { NextUIProvider } from "@nextui-org/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const client = new QueryClient()

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={client}>
      <NextThemesProvider defaultTheme='system' attribute='class'>
        <NextUIProvider>{children}</NextUIProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  )
}
