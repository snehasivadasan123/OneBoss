import { FundAccount, FundAccountSearchParams } from "@/types/fundAccount/fundAccount"
import axiosInstance from "./axiosConfig";

export const getFundAccount = async (params: FundAccountSearchParams): Promise<FundAccount[]> => {
  const res = await axiosInstance.get("/fundaccount", { params });
  return res.data
}