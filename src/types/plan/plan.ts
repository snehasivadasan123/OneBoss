import {
  PlanType,
  PlanRecipient,
  PlanAccountDesignation,
  PlanTimeHorizon,
} from "./enums";
import { BankAccount } from "../client/bank-account";

export interface Plan {
  dealerAccountCode?: string;
  clients?: string[]; // List of owner UUIDs
  description?: string;
  startDate?: string;
  endDate?: string;
  intentOfUse?: string;
  dealerId?: string;
  repId?: string;
  accountDesignation?: PlanAccountDesignation;
  recipient?: PlanRecipient;
  type?: PlanType;
  lockedIn?: boolean;
  lockedInProvince?: string;
  riskLow?: number;
  riskLowMedium?: number;
  riskMedium?: number;
  riskMediumHigh?: number;
  riskHigh?: number;
  objectiveSafety?: number;
  objectiveIncome?: number;
  objectiveBalanced?: number;
  objectiveGrowth?: number;
  objectiveSpeculation?: number;
  timeHorizon?: PlanTimeHorizon;
  eftPaymentBankAccount?: BankAccount;
  revenueModelId?: number;
}
