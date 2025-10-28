import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge CSS classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
