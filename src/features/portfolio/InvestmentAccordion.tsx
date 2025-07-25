"use client"

import { Button } from "@/components/ui/button"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

interface InvestmentItem {
  subject: string
  supplierAccount: string
  units: number
  price: number
  marketValue: number
  bookValue: number
}

interface BalanceItem {
  type: string
  value: number | null
}

interface InvestmentSection {
  id: string
  name: string
  totalValue: number
  items: InvestmentItem[]
  balances: BalanceItem[]
}

interface InvestmentAccordionProps {
  data: InvestmentSection[]
}

export default function InvestmentAccordion({ data }: InvestmentAccordionProps) {
  return (
    <Accordion type="multiple" className="w-full">
      {data.map((section) => (
        <AccordionItem key={section.id} value={section.id} className="border-b bg-white shadow-sm mb-4 rounded-md">
          <AccordionTrigger className="px-4 py-3 text-xs font-medium hover:no-underline">
            <div className="flex justify-between items-center w-full">
              <span className="text-blue-600">{section.name}</span>
              <span className="text-xs font-semibold">
                Total value: ${section.totalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-[40px] text-center">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Subjects</TableHead>
                    <TableHead>Supplier Account</TableHead>
                    <TableHead className="text-right">Units</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Market Value</TableHead>
                    <TableHead className="text-right">Book Value</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {section.items.map((item, itemIndex) => (
                    <TableRow key={itemIndex}>
                      <TableCell className="text-center">
                        <Checkbox />
                      </TableCell>
                      <TableCell className="font-medium text-xs whitespace-nowrap">
                        {(() => {
                          const match = item.subject.match(/^(FID-\d+)\s+(.*)$/)
                          if (match) {
                            return (
                              <>
                                <span className="text-black">{match[1]}</span>{" "}
                                <span className="text-muted-foreground">{match[2]}</span>
                              </>
                            )
                          }
                          return <span className="text-muted-foreground">{item.subject}</span>
                        })()}
                      </TableCell>
                      {/* <TableCell className="font-medium text-[14px] text-primary-600">{item.subject}</TableCell> */}
                      <TableCell className=" text-xs  text-primary-600">{item.supplierAccount}</TableCell>
                      <TableCell className="  text-xs  text-primary-600">{item.units.toLocaleString()}</TableCell>
                      <TableCell className="text-right  text-xs text-primary-600">${item.price.toFixed(2)}</TableCell>
                      <TableCell className="text-right  text-xs text-primary-600">${item.marketValue.toFixed(2)}</TableCell>
                      <TableCell className="text-right  text-xs text-primary-600">${item.bookValue.toFixed(2)}</TableCell>
                      <TableCell className="text-center  text-xs text-primary-600">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {section.balances.map((balance, balanceIndex) => (
                    <TableRow key={`balance-${balanceIndex}`} className="bg-gray-50 text-primary-600">
                      <TableCell colSpan={6} className="font-medium">
                        {balance.type}
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {balance.value !== null ? `$${balance.value.toFixed(2)}` : ""}
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-gray-100 font-semibold  text-primary-600">
                    <TableCell colSpan={6}>Total in CAD</TableCell>
                    <TableCell className="text-right">
                      ${section.totalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
