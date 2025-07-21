import { FundAccountStatus } from "../commonEnums/enums";
export interface FundAccount {
  id: number;
  planDealerAccountCode: string;
  supplierId: string;
  productCode: string;
  productName: string;
  supplierAccount: string;
  totalSharesIssued: number;
  totalSharesUnIssued: number;
  currency: string;
  startDate: string;
  endDate: string;
  status: FundAccountStatus;
}

export interface FundAccountSearchParams {
  clientuuid?: string;
  dealeraccountcode?: string;
  supplier?: string;
  productcode?: string;
  modifiedsince?: string;
}
