"use client"

import {
  BarChart3,
  FileText,
  User,
  Folder,
  CheckSquare,
  TrendingUp,
  Home,
  UserCheck,
  Menu,
} from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"

const navigationItems = [
  { key: "summary", url: "/summary", icon: BarChart3 },
  { key: "portfolio", url: "/portfolio", icon: TrendingUp },
  { key: "estatements", url: "/portfolio", icon: FileText },
  { key: "profile", url: "/summary", icon: User },
  { key: "documents", url: "/portfolio", icon: Folder },
  { key: "approval", url: "/summary", icon: CheckSquare },
  { key: "tools", url: "/portfolio", icon: BarChart3 },
  { key: "householding", url: "/summary", icon: Home },
  { key: "advisor", url: "/portfolio", icon: UserCheck }
]

interface SidebarProps {
  className?: string
  children?: React.ReactNode
}

import { useTranslation } from "react-i18next"

export default function Sidebar({ className = "", children }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const { t } = useTranslation()

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className={`transition-all duration-300 bg-white border-r border-gray-200 ${isOpen ? "w-64" : "w-16"} ${className}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-8 w-8"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 space-y-1 px-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.url}
                className={({ isActive }) =>
                  `group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                <item.icon className="h-5 w-5 min-w-[20px]" />
                {isOpen && <span className="truncate">{t(`sidebar.${item.key}`)}</span>}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
