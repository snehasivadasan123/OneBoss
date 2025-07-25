
import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import PortfolioPage from '../pages/PortfolioPage'
import LoginPage from '../pages/LoginPage'
import AuthCallBackPage from '@/pages/AuthCallBackPage'
import Layout from '@/components/layout/layout'

import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/auth/callback" element={<AuthCallBackPage />} />
      <Route element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/portfolio" element={<PortfolioPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes