export enum RepresentativeAttachmentStatus {
  UNKNOWN = "UNKNOWN",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

// Visible By Client
export enum RepresentativeAttachmentVisibleByClient {
  UNKNOWN = "UNKNOWN",
  NOT_VISIBLE = "NOT_VISIBLE",
  VISIBLE = "VISIBLE",
  REMOVED_BY_CLIENT = "REMOVED_BY_CLIENT",
}

// Attachment Level
export enum RepresentativeAttachmentLevel {
  UNKNOWN = "UNKNOWN",
  CLIENT = "CLIENT",
  PLAN = "PLAN",
  FUND_ACCOUNT = "FUND_ACCOUNT",
  FUND_TRANSACTION = "FUND_TRANSACTION",
  TRUST_TRANSACTION = "TRUST_TRANSACTION",
  GIC = "GIC",
  GIC_TRANSACTION = "GIC_TRANSACTION",
  DEPOSIT_CHEQUE = "DEPOSIT_CHEQUE",
}