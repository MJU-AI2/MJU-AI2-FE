import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from '@/components/layouts/main'
import ClassLayout from '@/components/layouts/class'
import NotFound from '@/components/pages/NotFount'
import Home from '@/components/pages/Home'
import AssignmentCreate from '@/features/assignment/create'
import AssignmentRetrieve from '@/features/assignment/retrieve'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={'problems'} element={<AssignmentRetrieve />} />
          <Route path={'problems/create'} element={<AssignmentCreate />} />
        </Route>
        <Route path="/student" element={<ClassLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
