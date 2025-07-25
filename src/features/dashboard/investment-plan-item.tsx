import { type LucideIcon, } from "lucide-react"
//import RecentTradingActivity from "./recent-trading-activity"

interface InvestmentPlanItemProps {
  icon: LucideIcon
  name: string
  description: string
  clients: number
  amount: number
  change: number
}

export default function InvestmentPlanItem({
  icon: Icon,
  name,
  description,
  clients,
  amount,
  change,
}: InvestmentPlanItemProps) {
  return (
    <div className="flex items-center justify-between w-full py-2">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">
          <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </div>
        <div className="grid gap-0.5">
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
          <p className="text-xs text-muted-foreground">{clients} Clients</p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-6">
        <img
          src="/image/group3.svg"
          alt="Growth chart"
          className="w-12 h-12"
        />
        <div className="flex flex-col items-end leading-tight">
          <p className="font-medium text-sm">${amount.toLocaleString()}</p>
          <span className="text-green-500 text-xs">
            {change > 0 ? `+${change}%` : `${change}%`}
          </span>
        </div>

      </div>

      {/* <RecentTradingActivity /> */}
    </div>
  )
}


