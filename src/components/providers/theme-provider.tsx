import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import React from 'react'

import { theme } from '@/styles/theme'
import GlobalFontStyle from '@/styles/globalFontStyle'

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalFontStyle />
      {children}
    </StyledThemeProvider>
  )
}
