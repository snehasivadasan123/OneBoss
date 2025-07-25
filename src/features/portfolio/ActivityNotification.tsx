import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dot } from "lucide-react"

export interface ActivityNotification {
  id: number
  stock: string
  action: string
  date: string
  status: "Completed" | "Pending"
  value: number
}

interface ActivityNotificationsProps {
  data: ActivityNotification[]
}


export default function ActivityNotifications({ data }: ActivityNotificationsProps) {
  const getStatusColor = (status: "Completed" | "Pending") => {
    return status === "Completed" ? "text-green-500" : "text-yellow-500"
  }

  const getBadgeVariant = (status: "Completed" | "Pending") => {
    return status === "Completed" ? "default" : "outline"
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Activity Notifications</CardTitle>
        <Badge variant="outline" className="text-xs text-blue-600 border-blue-200 bg-blue-50">
          <Dot className="h-4 w-4 -ml-1" />
          Real Time Updates
        </Badge>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid gap-0">
          {data.map((activity, index) => (
            <div
              key={activity.id}
              className={`flex items-center justify-between p-4 ${index < data.length - 1 ? "border-b border-gray-200" : ""
                }`}
            >
              <div className="grid gap-1 text-sm">
                <div className="font-medium flex items-center">
                  <Dot className={`h-5 w-5 -ml-1 ${getStatusColor(activity.status)}`} />
                  {activity.stock} - {activity.action}
                </div>
                <div className="text-xs text-gray-500 ml-4">{activity.date}</div>
              </div>
              <div className="flex items-center gap-2 text-right">
                <Badge variant={getBadgeVariant(activity.status)} className="text-xs text-success- bg-success-500">
                  {activity.status}
                </Badge>
                <div className="font-medium text-sm ">${activity.value.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
