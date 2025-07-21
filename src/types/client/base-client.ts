import type {
  ClientType,
  ClientStatus,
  ClientDeliveryStatus,
  ClientKnowledge,
  ClientFatcaEligibility,
  ClientCrsEligibility,

  ClientPoliticallyExposedPerson,
} from "@/types/client/enums"
import { ClientFatcaCrsNoTinReason, CrsEntityType, FatcaEntityType, PersonalIncomeRange } from "../commonEnums/enums";

import ClientAddress, { ClientIdDocument } from "./client";
// import client-id - document from "./client-id-document";
import { BankAccount } from "./client";
export interface BaseClient {
  oneBossId?: number;
  uuid?: string;
  clientType: ClientType;
  status?: ClientStatus;
  email?: string;
  phone?: string;
  workPhone?: string;
  cellPhone?: string;
  mailingAddress?: ClientAddress;
  residentialAddress?: ClientAddress;
  deliveryStatus?: ClientDeliveryStatus;
  personalIncome?: PersonalIncomeRange;
  personalIncomeValue?: number;
  liquidAssets?: number;
  fixedAssets?: number;
  liabilities?: number;
  knowledge?: ClientKnowledge;
  fatcaEligibility?: ClientFatcaEligibility;
  fatcaSSN?: string;
  fatcaNoTinReason?: ClientFatcaCrsNoTinReason;
  fatcaW8BENW9?: boolean;
  fatcaW8BENW9Date?: Date;
  fatcaEntityType?: FatcaEntityType;
  crsEligibility?: ClientCrsEligibility;
  crsCountry?: string;
  crsTin?: string;
  crsNoTinReason?: ClientFatcaCrsNoTinReason;
  crsEntityType?: CrsEntityType;
  taxCode?: string;
  politicallyExposedForeignPerson?: ClientPoliticallyExposedPerson;
  politicallyExposedForeignPersonTitle?: string;
  politicallyExposedDomesticPerson?: ClientPoliticallyExposedPerson;
  headOfInternationalOrganization?: ClientPoliticallyExposedPerson;
  documents?: ClientIdDocument[];
  bankAccounts?: BankAccount[];
}
