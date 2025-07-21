import type { IndividualClient } from "./individual-client";
import type { CorporateClient } from "./corporate-client";
import type { ClientStatus } from "@/types/client/enums";
import { Gender } from "../commonEnums/enums";
// Union type
export type Client = IndividualClient | CorporateClient;

export interface ClientSearchParams {
  firstname?: string;
  surname?: string;
  phone?: string;
  city?: string;
  status?: ClientStatus;
  modifiedsince?: string;
}

export interface ClientCreateRequest {
  repPersonId: number;
}
export default interface ClientAddress {
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  country?: string;
}
export interface BankAccount {
  id?: number;
  accountNumber?: string;
  institutionNumber?: string;
  transitNumber?: string;
  accountType?: string;
}
import { DocumentType } from "../commonEnums/enums";

export interface ClientIdDocument {
  oneBossId?: number;
  documentType?: DocumentType;
  idNumber?: string;
  issuedDate?: Date;
  expirationDate?: Date;
  issuedCountry?: string;
  issuedProvince?: string;
}
export interface Spouse {
  name?: string;
  surname?: string;
  mailingAddress?: ClientAddress;
  residentialAddress?: ClientAddress;
  title?: string;
  gender?: Gender;
  sin?: string;
  employer?: string;
  occupation?: string;
}
