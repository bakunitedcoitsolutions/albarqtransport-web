import { useQuery } from "@/lib/zsa/zsa-query";
import { getAllReviewsAction, getHomeReviewsAction } from "./actions";

export const useGetHomeReviews = () =>
  useQuery(getHomeReviewsAction, {
    queryKey: ["home-reviews"],
    input: undefined,
  });

export const useGetAllReviews = () =>
  useQuery(getAllReviewsAction, {
    queryKey: ["all-reviews"],
    input: undefined,
  });
