import { clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function pluralize(count, singular, plural) {
  if (count < 1) return null;

  return count === 1 ? singular : plural;
}

export function formatDate(timestamp) {
  return format(new Date(timestamp), "PP");
}
