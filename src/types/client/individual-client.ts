import type { BaseClient } from "./base-client";
import type { ClientType, ClientTitle, ClientMaritalStatus } from "@/types/client/enums";
import { Gender } from "../commonEnums/enums";
import { Spouse } from "./client";
export interface IndividualClient extends BaseClient {
  clientType: ClientType.INDIVIDUAL;
  name?: string;
  surname?: string;
  title?: ClientTitle;
  gender?: Gender;
  sin?: string;
  dependents?: number;
  maritalStatus?: ClientMaritalStatus;
  dob?: Date;
  dod?: string;
  employer?: string;
  occupation?: string;
  spouse?: Spouse;
}
