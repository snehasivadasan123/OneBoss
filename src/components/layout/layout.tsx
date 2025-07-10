import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header always on top */}
      <Header />

      {/* Sidebar and Main Content side-by-side */}
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
