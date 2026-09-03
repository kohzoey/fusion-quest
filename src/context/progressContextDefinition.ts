import { createContext } from "react";
import type { ModuleId, ModuleProgress } from "../types/content";

export interface ProgressContextValue extends ModuleProgress {
  markCompleted: (id: ModuleId) => void;
  setCurrent: (id: ModuleId | null) => void;
}

/**
 * Context object only, in its own file, so ProgressProvider.tsx
 * (a component) and useProgress.ts (a hook) can each export
 * exactly one thing — keeps React Fast Refresh happy and resolves
 * the Phase 1 oxlint warning.
 */
export const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);
