import { Button } from "@/components/ui/button"

export default function QuickAccountSwitch() {
  const accounts = [
    "TFSA Client Name, Individual Data Entry Wizard",
    "TFSA Client Name, Individual Data Entry Wizard",
    "Grow Portfolio",
    "Conservative Fund",
    "Client Accounts",
  ]
  return (
    <div className="space-y-1 p-2 border border-green-2000 ">
      <h2 className="text-[18px] font-semibold ml-2">Quick Account Switch</h2>
      <div className="flex flex-wrap gap-2 text-[16px] p-2">
        {accounts.map((account, index) => (
          <Button key={index} variant="outline" className="text-[12px] bg-transparent">
            {account}
          </Button>
        ))}
      </div>
    </div>
  )
}
