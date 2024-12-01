import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from '@/components/layouts/main'
import ClassLayout from '@/components/layouts/class'
import NotFound from '@/components/pages/NotFount'
import Home from '@/components/pages/Home'
import ProblemCreate from '@/features/problem/create'
import ProblemRetrieve from '@/features/problem/retrieve'
import ProblemDetailPage from '@/features/problem/retrieveDetail/problemDetail'
import SolveProblemsPage from '@/features/problem/retrieveDetail/SolveProblems'
import QuizResultPage from '@/features/problem/result'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={'problems'} element={<ProblemRetrieve />} />
          <Route path={'problems/create'} element={<ProblemCreate />} />
          <Route
            path={'/problems/:problemId'}
            element={<ProblemDetailPage />}
          />
        </Route>
        <Route path="/1" element={<ClassLayout />}>
          <Route index element={<SolveProblemsPage />} />
          <Route path={'result'} element={<QuizResultPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
