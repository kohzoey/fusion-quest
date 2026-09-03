/**
 * FUSION QUEST — Fusion Lab types.
 *
 * These mirror the LOCKED Fusion Lab scientific specification exactly.
 * Do not rename fields, change default values, or change the status
 * thresholds without returning to the locked spec first.
 */

export interface SliderSpec {
  min: number;
  max: number;
  default: number;
  unit: string;
  scale: "linear" | "log";
}

/**
 * Status thresholds are named for what they mean scientifically
 * (the ratio value at which the state changes), not for the color
 * used to present them. Presentation maps these to
 * --color-status-far / --color-status-approaching / --color-status-reached
 * in the component layer — never the reverse.
 *
 *   ratio < approaching        -> Far below educational reference
 *   approaching <= ratio < reached  -> Approaching educational reference
 *   ratio >= reached           -> Educational reference level reached
 */
export interface FusionLabStatusThresholds {
  approaching: number; // 0.1
  reached: number; // 1
}

export interface IterMarker {
  label: "ITER projected design point"; // locked label, not "ITER operating point"
  temperatureKeV: number; // ~20
  temperatureMK: number; // ~232
  density: number; // ~1e20 m^-3
  confinementTime: number; // ~3.7 s
  tripleProduct: number; // ~7.4e21
  isProjected: true; // always true — ITER has not begun full fusion operation
}

export interface FusionLabDisclaimers {
  temperature: string;
  general: string;
}

export interface FusionLabConfig {
  temperature: SliderSpec; // MK, converted internally to keV
  density: SliderSpec; // m^-3, logarithmic
  confinementTime: SliderSpec; // s
  educationalReferenceLevel: number; // 5e21 m^-3 keV s
  statusThresholds: FusionLabStatusThresholds;
  iterMarker: IterMarker;
  disclaimers: FusionLabDisclaimers;
  keVPerMK: number; // 0.0862 — locked conversion constant
}

export type FusionLabStatus = "farBelow" | "approaching" | "reached";

export function resolveFusionLabStatus(
  ratio: number,
  thresholds: FusionLabStatusThresholds
): FusionLabStatus {
  if (ratio < thresholds.approaching) return "farBelow";
  if (ratio < thresholds.reached) return "approaching";
  return "reached";
}
