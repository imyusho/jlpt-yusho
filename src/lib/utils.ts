import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const MIN_PASSWORD_LENGTH = 6;
export const MAX_PASSWORD_LENGTH = 32;
export const MIN_NAME_LENGTH = 2;
export const MAX_NAME_LENGTH = 32;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEmailConfirmationRedirectUrl() {
  const domain = `${window.location.protocol}//${window.location.host}`;
  return `${domain}/email-confirmation-redirect`;
}

export function getResetPasswordForEmailRedirectUrl() {
  const domain = `${window.location.protocol}//${window.location.host}`;
  return `${domain}/forgot-password-redirect`;
}
