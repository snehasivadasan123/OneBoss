import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import InvestmentPlanItem from "./investment-plan-item"
import { TrendingUp, ChartPie, ArrowUp, } from "lucide-react"

export default function Summary() {
  const investmentPlans = [
    {
      id: "1",
      icon: TrendingUp,
      name: "Growth Portfolio",
      description: "Tech & Growth Stocks",
      clients: 23,
      amount: 847395,
      change: 12.4,
    },
    {
      id: "2",
      icon: ChartPie,
      name: "Conservative Fund",
      description: "Tech & Growth Stocks",
      clients: 23,
      amount: 847395,
      change: 12.4,
    },
    {
      id: "3",
      icon: TrendingUp,
      name: "Retirement Fund",
      description: "Tech & Growth Stocks",
      clients: 23,
      amount: 847395,
      change: 12.4,
    },
    {
      id: "4",
      icon: ArrowUp,
      name: "Trading Account",
      description: "Tech & Growth Stocks",
      clients: 23,
      amount: 847395,
      change: 12.4,
    },
    {
      id: "5",
      icon: TrendingUp,
      name: "Client Accounts",
      description: "Tech & Growth Stocks",
      clients: 23,
      amount: 847395,
      change: 12.4,
    },
    {
      id: "6",
      icon: TrendingUp,
      name: "Retirement Fund",
      description: "Tech & Growth Stocks",
      clients: 23,
      amount: 847395,
      change: 12.4,
    },
    {
      id: "7",
      icon: ArrowUp,
      name: "Trading Account",
      description: "Tech & Growth Stocks",
      clients: 23,
      amount: 847395,
      change: 12.4,
    },
  ]

  return (
    <Card className="w-full max-w-[600px] flex flex-col  pt-5 px-5 gap-5">
      <CardHeader className="p-0 pb-0 space-y-0 w-full">
        <p className="text-sm text-muted-foreground">Total Assets Under Management</p>
        <h2 className="text-xl font-bold ">$4,195,392.00</h2>
        <p className="text-sm text-success-500">+11.2% this month</p>
      </CardHeader>
      <Separator className="" />
      <CardContent className="p-0 w-full flex flex-col gap-2">
        <div className="flex items-center justify-between w-full mb-2">
          <h3 className="text-lg font-semibold">Investment Plans</h3>
          <p className="text-sm text-muted-foreground">7 Plans</p>
        </div>
        {investmentPlans.map((plan) => (
          <InvestmentPlanItem key={plan.id} {...plan} />
        ))}
      </CardContent>
    </Card>
  )
}
