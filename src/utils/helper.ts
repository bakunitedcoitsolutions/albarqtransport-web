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
