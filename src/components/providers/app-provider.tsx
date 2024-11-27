import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { ToastProvider } from '@/components/providers/toast-provider'

interface AppProviderProps {
  children: React.ReactNode
}
const queryClient = new QueryClient()

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  )
}
