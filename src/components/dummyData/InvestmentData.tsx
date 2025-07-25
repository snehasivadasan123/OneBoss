import ActivityNotifications from "@/features/portfolio/ActivityNotification"
export const investmentData = [
  {
    id: "0706225164",
    name: "TFSA Client Name, Individual Data Entry Wizard (Beneficiary: Estate)",
    totalValue: 77477.32,
    items: [
      {
        subject: "FID-3202 FIDELITY GLOBAL INCOME PORTFOLIO SERIES B ISC FEL CAD",
        supplierAccount: "VANGUARD-VTSAX",
        units: 195.9722,
        price: 98.5,
        marketValue: 2774.81,
        bookValue: 2774.81,
      },
      {
        subject: "FID-2502 FIDELITY GLOBAL INCOME PORTFOLIO DSC DSC CAD",
        supplierAccount: "VANGUARD-VTSAX",
        units: 195.9722,
        price: 98.5,
        marketValue: 33326.39,
        bookValue: 33326.39,
      },
      {
        subject: "FID-2928 FIDELITY GLOBAL INTRINSIC VALUE CLASS SERIES B ISC FEL...",
        supplierAccount: "VANGUARD-VTSAX",
        units: 195.9722,
        price: 98.5,
        marketValue: 33326.39,
        bookValue: 33326.39,
      },
    ],
    balances: [
      { type: "Settled Trust Account Balance CAD", value: null },
      { type: "Settled Trust Account Balance USD", value: null },
    ],
  },
  {
    id: "0706225165",
    name: "TFSA Client Name, Individual Data Entry Wizard (Beneficiary: Estate)",
    totalValue: 77477.32,
    items: [],
    balances: [],
  },
  {
    id: "0706225166",
    name: "TFSA Client Name, Individual Data Entry Wizard (Beneficiary: Estate)",
    totalValue: 77477.32,
    items: [],
    balances: [],
  },
  {
    id: "0706225167",
    name: "TFSA Client Name, Individual Data Entry Wizard (Beneficiary: Estate)",
    totalValue: 77477.32,
    items: [],
    balances: [],
  },
  {
    id: "0706225168",
    name: "TFSA Client Name, Individual Data Entry Wizard (Beneficiary: Estate)",
    totalValue: 77477.32,
    items: [],
    balances: [],
  },
]

export const activityNotifications: ActivityNotifications[] = [
  {
    id: 1,
    stock: "TESLA INC STOCK",
    action: "Buy order executed",
    date: "2024-12-15 13:30:25",
    status: "Completed",
    value: 77477.32,
  },
  {
    id: 2,
    stock: "TESLA INC STOCK",
    action: "Buy order executed",
    date: "2024-12-15 13:30:25",
    status: "Pending",
    value: 77477.32,
  },
  {
    id: 3,
    stock: "TESLA INC STOCK",
    action: "Buy order executed",
    date: "2024-12-15 13:30:25",
    status: "Pending",
    value: 77477.32,
  },
  {
    id: 4,
    stock: "TESLA INC STOCK",
    action: "Buy order executed",
    date: "2024-12-15 13:30:25",
    status: "Pending",
    value: 77477.32,
  },
]