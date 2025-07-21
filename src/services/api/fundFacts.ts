import axiosInstance from "./axiosConfig"
import { FundFacts } from "@/types/fundFacts/fundFacts"
import { FundFactsDocumentType, Language } from "@/types/commonEnums/enums"

export const getFundFacts = async (
  fundAccountId: number,
  options?: {
    type?: FundFactsDocumentType;
    language?: Language;
    loadData?: boolean;
  }
): Promise<FundFacts[]> => {
  const params = new URLSearchParams();

  if (options?.type) params.append("type", options.type);
  if (options?.language) params.append("language", options.language);
  if (options?.loadData) params.append("loaddata", "TRUE");

  const url = `/V1/fundfacts/${fundAccountId}?${params.toString()}`;

  const { data } = await axiosInstance.get<FundFacts[]>(url);
  return data;
};