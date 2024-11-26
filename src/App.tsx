import Router from '@/constants/Router'
import { AppProvider } from '@/components/providers/app-provider'

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}

export default App
