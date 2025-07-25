import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { PiggyBank, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
export default function UpcomingEvent() {
  const events = [
    {
      id: 1,
      icon: PiggyBank,
      title: "Emergency Fund",
      description: "3 months of Expenses saved",
      progress: 65,
      targetAmount: 15000,
      targetDate: "Dec 2025",
      status: "in-progress",
    },
    {
      id: 2,
      icon: PiggyBank,
      title: "Stock Portfolio",
      description: "3 months of Expenses saved",
      progress: 30,
      targetAmount: 50000,
      targetDate: "Mar 2025",
      status: "pending",
    },
    {
      id: 3,
      icon: PiggyBank,
      title: "Emergency Fund",
      description: "3 months of Expenses saved",
      progress: 80,
      targetAmount: 15000,
      targetDate: "Dec 2025",
      status: "in-progress",
    },
  ]
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "in-progress":
        return "default"
      case "pending":
        return "outline"
      default:
        return "default"
    }
  }


  return (
    <Card className=" w-full p-1 ">
      <CardHeader className="pb-4 p-1 ">
        <CardTitle className="text-base font-semibold">Upcoming Events</CardTitle>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-2 p-1  ">
          {
            events.map((event) => (
              <Card key={event.id} className=" p-1  gap-2 boreder  ">
                <div className="flex items-center gap-2 px-2 py-1 ">
                  <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">
                    <event.icon className="w-4 h-4 " />
                  </div>
                  <span className="font-medium text-xs ">{event.title}</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-[-2px]">{event.description}</p>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Progress</span>
                  <span>{event.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black rounded-full transition-all duration-300"
                    style={{ width: `${event.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="">${event.targetAmount.toLocaleString()} target</span>
                  <Badge variant={getStatusBadgeVariant(event.status)} className="text-[10px] text-info-800 bg-info-100">
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </Badge>
                </div>
                <div className="text-[10px] text-muted-foreground">Target: {event.targetDate}</div>
                <Button variant="ghost" className="w-full justify-between mt-2">
                  View Details
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Card>
            ))
          }

        </CardContent>
      </CardHeader>
    </Card>
  )
}