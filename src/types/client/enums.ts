
// Client Type Enumeration

export enum ClientType {
  INDIVIDUAL = "INDIVIDUAL",
  CORPORATION = "CORPORATION",
  ASSOCIATION_TRUST_CLUB_PARTNERSHIP = "ASSOCIATION_TRUST_CLUB_PARTNERSHIP",
  GOVERNMENT = "GOVERNMENT",
}

// Client Marital Status Enumeration

export enum ClientMaritalStatus {
  UNKNOWN_STATUS = "UNKNOWN_STATUS",
  UNKNOWN = "UNKNOWN",
  SINGLE = "SINGLE",
  MARRIED = "MARRIED",
  DIVORCED = "DIVORCED",
  WIDOWED = "WIDOWED",
  COMMON_LAW = "COMMON_LAW",
  SEPARATED = "SEPARATED",
}
// Client Title Enumeration
export enum ClientTitle {
  UNKNOWN = "UNKNOWN",
  MR = "MR",
  MRS = "MRS",
  MISS = "MISS",
  MS = "MS",
  DR = "DR",
  PROF = "PROF",
  COMPANY = "COMPANY",
  OTHER = "OTHER",
}

// Client Status Enumeration
export enum ClientStatus {
  UNKNOWN_STATUS = "UNKNOWN_STATUS",
  ACTIVE = "ACTIVE",
  ACTIVE_PROSPECT = "ACTIVE_PROSPECT",
  INACTIVE = "INACTIVE",
  DECEASED = "DECEASED",
  UNKNOWN = "UNKNOWN",
}
// Client Knowledge Enumeration

export enum ClientKnowledge {
  SOPHISTICATED = "SOPHISTICATED",
  GOOD = "GOOD",
  FAIR = "FAIR",
  UNKNOWN = "UNKNOWN",
}

// Client Delivery Status Enumeration
export enum ClientDeliveryStatus {
  MAIL = "MAIL",
  EMAIL = "EMAIL",
  E_STATEMENT = "E_STATEMENT",
  ELECTRONIC_DELIVERY = "ELECTRONIC_DELIVERY",
  UNKNOWN = "UNKNOWN",
}
// Client FATCA Eligibility Enumeration
export enum ClientFatcaEligibility {
  NON_REPORTABLE = "NON_REPORTABLE",
  REPORTABLE = "REPORTABLE",
  REFUSES_TO_RESPOND = "REFUSES_TO_RESPOND",
  UNKNOWN = "UNKNOWN",
}

// Client CRS Eligibility Enumeration
export enum ClientCrsEligibility {
  NON_REPORTABLE = "NON_REPORTABLE",
  REPORTABLE = "REPORTABLE",
  REFUSES_TO_RESPOND = "REFUSES_TO_RESPOND",
  UNKNOWN = "UNKNOWN",
}

// Document Type Enumeration

// Client FATCA/CRS No TIN Reason Enumeration

// CRS Entity Type Enumeration


// FATCA Entity Type Enumeration


// Client Politically Exposed Person Enumeration
export enum ClientPoliticallyExposedPerson {
  UNKNOWN = "UNKNOWN",
  NO = "NO",
  YES = "YES",
}

