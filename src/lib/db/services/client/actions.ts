"use server";
import api from "@/lib/zsa/api";
import { ClientInterface } from "./client.dto";
import { serverAction } from "@/lib/zsa/zsa-action";

export const getAllClientsAction = serverAction.handler(async () => {
  const response = await api.get<ClientInterface[]>(`/clients`);
  return response.data;
});
