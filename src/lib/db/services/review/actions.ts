"use server";
import api from "@/lib/zsa/api";
import { ReviewInterface } from "./review.dto";
import { serverAction } from "@/lib/zsa/zsa-action";

export const getHomeReviewsAction = serverAction.handler(async () => {
  const response = await api.get<ReviewInterface[]>(`/reviews?type=home`);
  return response.data;
});

export const getAllReviewsAction = serverAction.handler(async () => {
  const response = await api.get<ReviewInterface[]>(`/reviews`);
  return response.data;
});
