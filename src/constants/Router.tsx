import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from '@/pages/NotFount'
import Home from '@/pages/Home'
import BaseLayout from '@/components/layouts/baseLayout'
import StudentLayout from '@/components/layouts/studentLayout'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path={'problems'} element={<Home />} />
          <Route path={'problems/create'} element={<Home />} />
        </Route>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
