import { FundTransactionStatus, FundTransactionType } from "./enums";
export interface Amount {
  quantity: number;
  units:
  | "dollars"
  | "dollars (net)"
  | "shares"
  | "% of shares owned"
  | "All Shares"
  | "Free Shares not subject to CDSC"
  | "Units allowed to be redeemed"
  | "Mature units only"
  | "LSIF s/u"
  | "LSIF s/u & DSC"
  | "% of conversion";
}

export interface FundTransaction {
  id: number;
  fundAccountId: number;
  supplierId: string;
  productCode: string;
  planDealerAccountCode: string;
  status: FundTransactionStatus;
  tradeDate: string;
  settlementDate: string;
  processingDate: string;
  orderDate: string;
  createdDate: string;
  type: FundTransactionType;
  sourceId: string;
  amount: Amount;
  settlementAmount: number;
  fees: number;
  withholdingTax: number;
  sharesUnits: number;
  unitPrice: number;
  wireOrder: number;
  sequenceNumber: number;
}