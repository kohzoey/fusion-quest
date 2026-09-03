import { useMemo, useState, type ReactNode } from "react";
import type { ModuleId } from "../types/content";
import { ProgressContext, type ProgressContextValue } from "./progressContextDefinition";

const initialCompleted: Record<ModuleId, boolean> = {
  m1: false,
  m2: false,
  m3: false,
  m4: false,
  m5: false,
};

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<Record<ModuleId, boolean>>(initialCompleted);
  const [current, setCurrent] = useState<ModuleId | null>(null);

  const value = useMemo<ProgressContextValue>(
    () => ({
      completed,
      current,
      markCompleted: (id: ModuleId) => setCompleted((prev) => ({ ...prev, [id]: true })),
      setCurrent,
    }),
    [completed, current]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
