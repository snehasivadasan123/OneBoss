import { currency } from "../commonEnums/enums"

export type MutualFundMarketValue = {
  currency: currency;
  marketValue: number;
}


export type GicAccountMarketValue = {
  currency: currency;
  marketValue: number;
}


export type EtfAccountMarketValue = {
  currency: currency;
  marketValue: number;
}
export type TrustAccountBalance = {
  currency: currency
  trustAccountCode: string;
  balanceSettled: number;
  balanceNotSettled: number;
};
export type PlanMarketValue = {
  dealerAccountCode: string;
  mutualFundAccounts: MutualFundMarketValue[];
  gicAccounts: GicAccountMarketValue[];
  etfAccounts: EtfAccountMarketValue[];
  trustAccounts: TrustAccountBalance[];
};
