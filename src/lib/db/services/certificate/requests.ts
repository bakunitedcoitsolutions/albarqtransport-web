import {  useQuery } from "@/lib/zsa/zsa-query";
import { getAllCertificatesAction } from "./actions";

export const useGetAllCertificates = () =>
  useQuery(getAllCertificatesAction, {
    queryKey: ["certificates"],
    input: undefined,
  });
