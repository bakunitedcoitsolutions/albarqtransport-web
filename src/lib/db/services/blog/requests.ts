/**
 * Blog Query Hooks
 */

import { useQuery } from "@/lib/zsa/zsa-query";
import {
  getAllBlogsAction,
  getHomeBlogsAction,
} from "./actions";

// List Blogs
export const useGetAllBlogs = () =>
  useQuery(getAllBlogsAction, {
    queryKey: ["blogs"],
    input: undefined,
  });

// Home Blogs
export const useGetHomeBlogs = () =>
  useQuery(getHomeBlogsAction, {
    queryKey: ["home-blogs"],
    input: undefined,
  });
