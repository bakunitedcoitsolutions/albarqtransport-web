import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const chunkArray = (array: any[], size: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

export const truncateText = (text: string, maxLength: number = 120) => {
  if (text.length <= maxLength) return text;

  // Find the last space before the maxLength
  const truncated = text.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  // If we found a space, truncate at that point, otherwise use the original maxLength
  const endIndex = lastSpaceIndex > 0 ? lastSpaceIndex : maxLength;

  return text.substring(0, endIndex).trim() + "...";
};

export const getYoutubeId = (url: string) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export const createSlug = (text: string, id: number | string) => {
  return `${text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}-${id}`;
};

export const extractIdFromSlug = (slug: string): number | null => {
  if (!slug) return null;

  const parts = slug.split("-");
  if (parts.length === 0) return null;

  const lastPart = parts[parts.length - 1];
  const id = parseInt(lastPart);
  if (!isNaN(id)) {
    return id;
  }

  return null;
};
