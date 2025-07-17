import type { DocumentType } from "@/constants/enums";

export interface ClientIdDocument {
  oneBossId?: number;
  documentType?: DocumentType;
  idNumber?: string;
  issuedDate?: Date;
  expirationDate?: Date;
  issuedCountry?: string;
  issuedProvince?: string;
}
