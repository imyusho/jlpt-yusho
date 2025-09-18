"use client";

import { FC, useEffect } from "react";

export const ClientDarkModeDetector: FC = () => {
  useEffect(() => {
    const isDarkModePrefered = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.documentElement.classList.toggle("dark", isDarkModePrefered);
  }, []);

  return null;
};
