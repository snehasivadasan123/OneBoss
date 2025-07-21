import ClientAddress from "../client/client";

export type RepresentativePerson = {
  oneBossId: number;
  businessName?: string;
  surname: string;
  name: string;
  dob?: string;
  startDate?: string;
  endDate?: string;
  homeFax?: string;
  homePhone?: string;
  personalCell?: string;
  personalEmail?: string;
  residentialAddress?: ClientAddress;
  officePhone?: string;
  officeEmail?: string;
  officeAddress?: ClientAddress;
}
export type Representative = {
  code: string;
  credentials?: string;
  dealerId: string;
  managerId?: string;
  name: string;
  surname: string;
  personId: number;
  startDate?: string;
  status: string;
  person: RepresentativePerson;
};