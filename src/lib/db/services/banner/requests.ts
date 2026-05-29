import { useQuery } from "@/lib/zsa/zsa-query";
import { getHomeBannersAction } from "./actions";

export const useGetHomeBanners = () =>
  useQuery(getHomeBannersAction, {
    queryKey: ["home-banners"],
    input: undefined,
  });
