"use server";
import api from "@/lib/zsa/api";
import { VideoInterface } from "./video.dto";
import { serverAction } from "@/lib/zsa/zsa-action";

export const getLatestVideoAction = serverAction.handler(async () => {
  const response = await api.get<VideoInterface>(`/videos`);
  return response.data;
  // only 1 video
});
