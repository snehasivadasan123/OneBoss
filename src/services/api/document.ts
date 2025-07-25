import { DocumentTypeLevel, DocumentTypeStatus } from "@/types/document/enums"
import axiosInstance from "./axiosConfig"
import { DocumentType, } from "@/types/document/documentType"

export const fetchAllDocumentTypes = async (): Promise<DocumentType[]> => {
  const response = await axiosInstance.get("/documentType")
  return response.data
}


export const fetchDocumentTypesByStatusAndLevel = async (status?: DocumentTypeStatus,
  level?: DocumentTypeLevel): Promise<DocumentType> => {
  const params: Record<string, string> = {}
  if (status) params.status = status
  if (level) params.level = level
  const response = await axiosInstance.get("/documentType", { params })
  return response.data
}