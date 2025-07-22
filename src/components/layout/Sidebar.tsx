import { NavLink } from "react-router-dom"
import { LayoutDashboard, Briefcase, BarChart, FileText, File, CircleCheck, Users, MessageSquare } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "OVERVIEW",
    isSection: true,
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
        isActive: true, // This item will be active by default for demonstration
      },
      {
        title: "Portfolio",
        url: "/portfolio",
        icon: Briefcase,
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: BarChart,
      },
    ],
  },
  {
    title: "TRADE CONFIRMATION",
    isSection: true,
    items: [
      {
        title: "E-Statements",
        url: "/e-statements",
        icon: FileText,
      },
      {
        title: "Documents",
        url: "/documents",
        icon: File,
      },
      {
        title: "Approvals",
        url: "/approvals",
        icon: CircleCheck,
      },
    ],
  },
  {
    title: "MANAGEMENT",
    isSection: true,
    items: [
      {
        title: "Householding",
        url: "/householding",
        icon: Users,
      },
      {
        title: "Advisor",
        url: "/advisor",
        icon: MessageSquare,
      },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 pb-2">
        <div className="flex items-center gap-2">
          <img src="/image/OneBoss.png" alt="One Boss Logo" className="h-6 w-6" />
          <span className="text-lg font-semibold">One Boss</span>
        </div>

      </SidebarHeader>
      <SidebarContent>
        {items.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="px-4 py-2 text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      // Use NavLink's isActive prop to apply active styles
                      className={item.isActive ? "bg-black text-white" : ""}
                    >
                      <NavLink to={item.url} className={({ isActive }) => (isActive ? "bg-black text-white" : "")}>
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
