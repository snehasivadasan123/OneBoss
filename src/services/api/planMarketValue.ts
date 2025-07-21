import { PlanMarketValue } from "@/types/planMarketValue/planMarketValue"
import axiosInstance from "./axiosConfig"

export const getPlanMarketValue = async (dealerAccountCode: string): Promise<PlanMarketValue> => {
  const { data } = await axiosInstance.get<PlanMarketValue>(`/V1/planmarketvalue/${dealerAccountCode}`)
  return data;
};