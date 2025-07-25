import {
  RepresentativeAttachmentStatus,
  RepresentativeAttachmentVisibleByClient,
  RepresentativeAttachmentLevel,
} from "./enums";

// Attachment Mapping
export interface RepresentativeAttachmentMapping {
  entityId: string
  attachmentLevel: RepresentativeAttachmentLevel
}

// Document Type reference
export interface DocumentType {
  oneBossId: number
}

// Main Representative Attachment object
export interface RepresentativeAttachment {
  oneBossId: number
  clientUuid: string
  createdDate: string // ISO date string
  data?: string | null // base64-encoded string 
  description: string
  documentType: DocumentType
  status: RepresentativeAttachmentStatus
  visibleByClient: RepresentativeAttachmentVisibleByClient
  attachmentMappings?: RepresentativeAttachmentMapping[]
}
