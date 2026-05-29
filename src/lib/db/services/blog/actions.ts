/**
 * Blog Server Actions
 */

"use server";

import api from "@/lib/zsa/api";
import { createServerAction } from "zsa";
import { BlogInterface } from "./blog.dto";

export const getAllBlogsAction = createServerAction().handler(async () => {
  const response = await api.get<BlogInterface[]>(`/blogs`);
  return response.data;
});

export const getHomeBlogsAction = createServerAction().handler(async () => {
  const response = await api.get<BlogInterface[]>(`/blogs?type=home`);
  return response.data;
});
