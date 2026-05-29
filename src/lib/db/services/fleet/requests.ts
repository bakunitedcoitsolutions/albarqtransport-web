import { useQuery } from "@/lib/zsa/zsa-query";
import { getActiveFleetAction } from "./actions";

export const useGetActiveFleet = () =>
  useQuery(getActiveFleetAction, {
    queryKey: ["active-fleet"],
    input: undefined,
  });
