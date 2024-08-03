import { clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function pluralize(count, singular, plural) {
  return count === 1 ? singular : plural;
}

export function formatDate(timestamp) {
  return format(new Date(timestamp), "PP");
}
