import React from 'react'
import { Outlet } from 'react-router-dom'
//import { Navbar1 } from './Header'
import Header from './Header'
import { AppSidebar } from './Sidebar'
import { SidebarProvider } from '../ui/sidebar'
const Layout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex flex-col flex-1 min-w-0">
          <Header />
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};


export default Layout
