"use client";

import { useEffect, useState } from "react";

type PerformanceMode = "A" | "B" | "C";

export default function usePerformance() {
  const [mode, setMode] = useState<PerformanceMode>("A");

  useEffect(() => {
    const memory =
      "deviceMemory" in navigator
        ? (navigator as Navigator & {
            deviceMemory?: number;
          }).deviceMemory
        : undefined;

    const cores = navigator.hardwareConcurrency || 2;

    const lowDevice =
      (memory && memory <= 4) ||
      cores <= 4;

    if (lowDevice) {
      setMode("A");
    } else {
      setMode("B");
    }
  }, []);

  return mode;
}