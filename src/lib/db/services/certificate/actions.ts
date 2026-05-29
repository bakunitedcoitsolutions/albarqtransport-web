"use server";
import api from "@/lib/zsa/api";
import { serverAction } from "@/lib/zsa/zsa-action";
import { CertificateInterface } from "./certificate.dto";

export const getAllCertificatesAction = serverAction.handler(async () => {
  const response = await api.get<CertificateInterface[]>(`/certificates`);
  return response.data;
});
