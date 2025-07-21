import { FundFactsDocumentType, Language } from "../commonEnums/enums"

export interface FundFacts {
  type: FundFactsDocumentType,
  language: Language,
  lastModified: string,
  guid: string,
  data?: string,

}