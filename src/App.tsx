import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'

import Router from '@/constants/Router'
import GlobalFontStyle from '@/styles/globalFontStyle'
import { theme } from '@/styles/theme'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFontStyle />
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
