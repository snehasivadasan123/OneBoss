"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ChevronDown, TrendingUp } from "lucide-react"

export default function RecentTradingActivity() {
  const [period, setPeriod] = useState("this-week")
  const [open, setOpen] = useState(false)

  const tradingActivities = [
    {
      id: 1,
      type: "Buy FGIB",
      date: "08/01/2024",
      units: 25.0,
      price: 14.05,
      value: 358.28,
      portfolio: "Growth Portfolio",
    },
    {
      id: 2,
      type: "Buy FGIB",
      date: "08/01/2024",
      units: 25.0,
      price: 14.05,
      value: 358.28,
      portfolio: "Growth Portfolio",
    },
    {
      id: 3,
      type: "Buy FGIB",
      date: "08/01/2024",
      units: 25.0,
      price: 14.05,
      value: 358.28,
      portfolio: "Growth Portfolio",
    },
  ]

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Recent Trading Activity</CardTitle>
        <Select value={period} onValueChange={setPeriod}>

          <SelectTrigger className="w-[100px] h-8 text-xs px-4 flex items-center " setOpen={setOpen}>

            <SelectValue>
              {period === "today"
                ? "Today"
                : period === "this-month"
                  ? "This Month"
                  : "This Week"}

            </SelectValue>
            <ChevronDown className="w-4 h-4 " />
          </SelectTrigger>
          <SelectContent open={open} setOpen={setOpen} >


            <SelectItem value="today" setOpen={setOpen}>Today</SelectItem>
            <SelectItem value="this-week" setOpen={setOpen}>This Week</SelectItem>
            <SelectItem value="this-month" setOpen={setOpen}>This Month</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="p-0">
        <div className="grid gap-0">
          {tradingActivities.map((activity, index) => (
            <div
              key={activity.id}
              className={`flex items-center justify-between p-4 ${index < tradingActivities.length - 1 ? "border-gray-200" : ""
                }`}
            >
              <div className="flex items-start gap-3">
                <div className="bg-gray-100 rounded-md p-2">
                  <TrendingUp className="w-4 h-4 " />
                </div>
                <div className="grid gap-1 text-sm">
                  <div className="font-medium">{activity.type}</div>
                  <div className="text-xs text-gray-500">{activity.date}</div>
                  <div className="text-xs text-gray-500">
                    {activity.units.toFixed(4)} units @ ${activity.price.toFixed(2)}
                  </div>
                </div>
              </div>
              <div className="grid gap-1 text-right">
                <div className="font-medium text-green-600">+${activity.value.toFixed(2)}</div>
                <Badge variant="outline" className="text-xs text-info-10 bg-info-20 ">
                  {activity.portfolio}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 ">
          <Button
            variant="ghost"
            className="h-[44px] w-[125px] px-4 py-[10px] border border-gray-300 rounded items-center justify-between gap-2"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </Button>

        </div>
      </CardContent>
    </Card>
  )
}
