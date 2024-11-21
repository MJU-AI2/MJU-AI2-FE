import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Router from '@/constants/Router'
import GlobalFontStyle from '@/styles/globalFontStyle'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <GlobalFontStyle />
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  )
}

export default App
