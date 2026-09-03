import { PLACEHOLDER_PREFIX } from "../types/content";

/**
 * Produces a clearly marked placeholder string for any piece of
 * copy not yet transferred from the locked blueprints. Never used
 * to invent scientific content — see IMPLEMENTATION FLAG in the
 * Phase 1 report.
 */
export function placeholder(description: string): string {
  return `${PLACEHOLDER_PREFIX} — ${description}`;
}

export function isPlaceholder(text: string): boolean {
  return text.startsWith(PLACEHOLDER_PREFIX);
}
