import type { DocumentType } from "@/types/client/enums";

export interface ClientIdDocument {
  oneBossId?: number;
  documentType?: DocumentType;
  idNumber?: string;
  issuedDate?: Date;
  expirationDate?: Date;
  issuedCountry?: string;
  issuedProvince?: string;
}
