import type {
  ClientType,
  ClientStatus,
  ClientDeliveryStatus,
  PersonalIncomeRange,
  ClientKnowledge,
  ClientFatcaEligibility,
  ClientFatcaCrsNoTinReason,
  FatcaEntityType,
  ClientCrsEligibility,
  CrsEntityType,
  ClientPoliticallyExposedPerson,
} from "@/constants/enums";

import type ClientAddress from "./address";
import type { ClientIdDocument } from "./client-id-document";
import type { BankAccount } from "./bank-account";

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
