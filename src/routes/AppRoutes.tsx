
import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'
import AuthCallBackPage from '@/pages/AuthCallBackPage'
import Layout from '@/components/layout/layout'
import Summary from '@/components/dashboard/Summary'
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
        <Route path="/dashboard" element={<Summary />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/portfolio" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes