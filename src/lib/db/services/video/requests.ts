import { useQuery } from "@/lib/zsa/zsa-query";
import { getLatestVideoAction } from "./actions";

export const useGetLatestVideo = () =>
  useQuery(getLatestVideoAction, {
    queryKey: ["latest-video"],
    input: undefined,
  });
