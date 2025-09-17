import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEmailConfirmationRedirectUrl() {
  const domain = `${window.location.protocol}//${window.location.host}`;
  return `${domain}/email-confirmation-redirect`;
}
