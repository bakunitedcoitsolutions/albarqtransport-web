"use server";
import api from "@/lib/zsa/api";
import { BannerInterface } from "./banner.dto";
import { serverAction } from "@/lib/zsa/zsa-action";

export const getHomeBannersAction = serverAction.handler(async () => {
  const response = await api.get<BannerInterface[]>(`/banners`);
  return response.data;
});
