import type { BaseClient } from "./base-client";
import type { ClientType } from "@/types/client/enums";

export interface CorporateClient extends BaseClient {
  clientType:
  | ClientType.CORPORATION
  | ClientType.ASSOCIATION_TRUST_CLUB_PARTNERSHIP
  | ClientType.GOVERNMENT;
  corporateName?: string;
  provincialBusinessNumber?: string;
  federalBusinessNumber?: string;
  incorporationDate?: Date;
}
