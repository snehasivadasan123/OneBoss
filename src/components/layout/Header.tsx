import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useLocation } from "react-router-dom";

import { items } from "./Sidebar";
export default function Header() {
  const location = useLocation();

  const getPathTitleMap = () => {
    const map: Record<string, string> = {}
    items.forEach(section => {
      section.items.forEach(item => {
        map[item.url] = item.title
      })
    })
    console.log("?????????????????", map)
    return map


  }
  const pageTitles = getPathTitleMap()
  const title = pageTitles[location.pathname]
  return (
    <header className="w-full flex items-center justify-between p-5 bg-white border-b border-gray-200">
      {/* Left Section: Dashboard Title */}
      <div className="flex items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {/* Middle Section: Search Input */}
      <div className="relative flex-1 max-w-md mx-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search here..."
          className="w-full pl-9 pr-4 py-2 rounded-md border border-input bg-background shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>
      {/* Right Section: Notifications and User Profile */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <div className="flex items-center gap-2">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Liana Sepp" />
            <AvatarFallback>LS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Liana Sepp</span>
            <span className="text-xs text-muted-foreground">Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}
