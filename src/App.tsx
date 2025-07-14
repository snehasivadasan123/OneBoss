import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import AuthCallBackPage from './pages/AuthCallBackPage'
import Layout from './components/layout/layout'
import Summary from './components/dashboard/Summary'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/auth/callback" element={<AuthCallBackPage />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Summary />} />
          <Route path="/summary" element={<Summary />} />

          <Route path="/portfolio" element={<DashboardPage />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App