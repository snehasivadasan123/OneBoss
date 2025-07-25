import { NavLink } from "react-router-dom"
import { House, BriefcaseBusiness, ChartPie, FileText, File, CircleCheck, Users, MessageCircle } from "lucide-react"

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


export const items = [
  {
    title: "OVERVIEW",
    isSection: true,
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: House,
        isActive: true, // This item will be active by default for demonstration
      },
      {
        title: "Portfolio",
        url: "/portfolio",
        icon: BriefcaseBusiness,
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: ChartPie,
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
        icon: MessageCircle,
      },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarHeader className="p-4 pb-2">
        <div className="flex items-center gap-2">
          <img src="/image/OneBoss.png" alt="One Boss Logo" className="h-6 w-6" />
          <span className="text-xl font-semibold leading-none">One Boss</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {items.map((section) => (
          <SidebarGroup key={section.title} className="gap-2">
            <SidebarGroupLabel className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="">
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                    // NavLink's isActive prop will determine active state
                    // We pass a function to className to get isActive from NavLink
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
