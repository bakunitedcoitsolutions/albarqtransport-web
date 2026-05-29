"use server";
import api from "@/lib/zsa/api";
import { FleetInterface } from "./fleet.dto";
import { serverAction } from "@/lib/zsa/zsa-action";

export const getActiveFleetAction = serverAction.handler(async () => {
  const response = await api.get<FleetInterface[]>(`/fleet`);
  return response.data;
});
