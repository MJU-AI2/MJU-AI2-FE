import Router from '@/routes/Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import GlobalStyle from '@/style/globalStyle'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  )
}

export default App
