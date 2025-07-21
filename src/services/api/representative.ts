import axiosInstance from "./axiosConfig";
import { Representative } from "@/types/representative/representative"


export const getRepresentative = (id: number) => {
  return axiosInstance.get<Representative>(`/representative/${id}`);
}

