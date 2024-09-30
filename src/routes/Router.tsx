import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '@/pages/NotFount'
import Home from '@/pages/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
