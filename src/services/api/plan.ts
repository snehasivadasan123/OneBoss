import axios from "./axiosConfig";
import { Plan } from "../../types/plan/plan";
import { PlanSearchParams } from "../../types/plan/search-params";

// Get a single plan by dealer account code
export const getPlan = (dealerAccountCode: string) => {
  return axios.get<Plan>(`/plan/${dealerAccountCode}`);
};

// Search plans (with optional query parameters)
export const searchPlans = (params?: PlanSearchParams) => {
  return axios.get<Plan[]>("/plan", { params });
};

// Create a new plan

// export const createPlan = (data: Partial<Plan>) => {
//   return axios.post<Plan>("/plan", data);
// };

// Update a plan
// export const updatePlan = (dealerAccountCode: string, data: Partial<Plan>) => {
//   return axios.put<Plan>(`/plan/${dealerAccountCode}`, data);
// };

// Delete a plan (only plans in 'DRAFT' status can be deleted)
// export const deletePlan = (dealerAccountCode: string) => {
//   return axios.delete(`/plan/${dealerAccountCode}`);
// };
