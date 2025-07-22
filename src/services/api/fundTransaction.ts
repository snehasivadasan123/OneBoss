import axiosInstance from "./axiosConfig"
import { FundTransaction } from "@/types/fundTransaction/fundTransaction"


export const getFundTransactionById = async (id: number): Promise<FundTransaction> => {
  const res = await axiosInstance.get(`/fundtransaction/${id}`)
  return res.data
}

export const searchTransactions = async (params: Record<string, string | number>): Promise<FundTransaction[]> => {
  const response = await axiosInstance.get<FundTransaction[]>("/fundtransaction", { params })
  return response.data
}