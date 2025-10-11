import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const MIN_PASSWORD_LENGTH = 6;
export const MAX_PASSWORD_LENGTH = 32;
export const MIN_NAME_LENGTH = 2;
export const MAX_NAME_LENGTH = 32;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDomain() {
  return `${window.location.protocol}//${window.location.host}`;
}

export function getEmailConfirmationRedirectUrl() {
  const domain = getDomain();
  return `${domain}/email-confirmation-redirect`;
}

export function getResetPasswordForEmailRedirectUrl() {
  const domain = `${window.location.protocol}//${window.location.host}`;
  return `${domain}/forgot-password-redirect`;
}

export function getShuffled<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
