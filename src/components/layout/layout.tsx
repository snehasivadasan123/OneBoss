import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { AppSidebar } from './Sidebar'
import { SidebarProvider, SidebarInset } from '../ui/sidebar'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SidebarProvider>
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="p-4">
              <Outlet />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Layout
