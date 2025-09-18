"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export default function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateDarkModeState = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(updateDarkModeState);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    updateDarkModeState();

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="dark-mode">
        <Sun className="size-4" />
      </Label>
      <Switch
        id="dark-mode"
        checked={isDarkMode}
        onCheckedChange={(isChecked) => {
          document.documentElement.classList.toggle("dark", isChecked);
        }}
      />
      <Label htmlFor="dark-mode">
        <Moon className="size-4" />
      </Label>
    </div>
  );
}
