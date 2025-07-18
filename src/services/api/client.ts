import axios from "./axiosConfig";
import { Client, ClientSearchParams } from "../../types/client/client";

// Get a single client by UUID
export const getClient = (uuid: string) => {
  return axios.get<Client>(`/client/${uuid}`);
};

// Search clients
export const searchClients = (params: ClientSearchParams) => {
  return axios.get<Client[]>("/client", { params });
};

// Create a new client
export const createClient = (data: Partial<Client>) => {
  return axios.post<Client>("/client", data);
};

// Update a client
export const updateClient = (uuid: string, data: Partial<Client>) => {
  return axios.put<Client>(`/client/${uuid}`, data);
};

// Delete a client
export const deleteClient = (uuid: string) => {
  return axios.delete(`/client/${uuid}`);
};
