import {  useQuery } from "@/lib/zsa/zsa-query";
import { getAllClientsAction } from "./actions";

export const useGetAllClients = () =>
  useQuery(getAllClientsAction, {
    queryKey: ["clients"],
    input: undefined,
  });
