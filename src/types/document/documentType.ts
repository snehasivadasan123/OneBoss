import { DocumentTypeLevel, DocumentTypeStatus } from "./enums";

export interface DocumentType {
  oneBossId: number
  description: string
  status: DocumentTypeStatus
  level: DocumentTypeLevel
  migrateToDMS: boolean
  showInDocumentSupervision: boolean
  showInKYCSupervision: boolean
  visibleToRepresentativeAttachhment: boolean
  availableInClientLevelAttachments?: boolean
}