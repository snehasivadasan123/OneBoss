import type { IndividualClient } from "./individual-client";
import type { CorporateClient } from "./corporate-client";
import type { ClientStatus } from "@/types/client/enums";

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
