import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns"

export function cn (...inputs) {
  return twMerge(clsx(inputs))
}

export function pluralize (count, singular, plural) {
  return count === 1 ? singular : plural
}

export function formatDate (timestamp) {
  return format(new Date(timestamp), "PP")
}
