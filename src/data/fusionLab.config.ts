import type { FusionLabConfig } from "../types/fusionLab";

/**
 * LOCKED. Transcribed directly from the Fusion Lab Final Locked
 * Specification. Do not change any value here without returning to
 * that document first — see IMPLEMENTATION FLAGS in the Phase 1
 * report for the one open question about this file.
 */
export const fusionLabConfig: FusionLabConfig = {
  temperature: {
    min: 10,
    max: 300,
    default: 100,
    unit: "MK",
    scale: "linear",
  },
  density: {
    min: 1e19,
    max: 1e21,
    default: 5e19,
    unit: "m⁻³",
    scale: "log",
  },
  confinementTime: {
    min: 0.1,
    max: 10,
    default: 0.5,
    unit: "s",
    scale: "linear",
  },
  educationalReferenceLevel: 5e21,
  statusThresholds: {
    approaching: 0.1,
    reached: 1,
  },
  iterMarker: {
    label: "ITER projected design point",
    temperatureKeV: 20,
    temperatureMK: 232,
    density: 1e20,
    confinementTime: 3.7,
    tripleProduct: 7.4e21,
    isProjected: true,
  },
  disclaimers: {
    temperature:
      "In this simplified model, temperature is treated as a simple multiplying factor for clarity. In real plasmas, temperature behaves differently from density and confinement time — pushing temperature very high does not keep improving performance indefinitely. Real fusion research targets an appropriate temperature range, not simply \"as hot as possible.\"",
    general:
      "This is a simplified educational model of part of fusion physics. It does not model plasma stability, detailed fusion reaction rates, engineering constraints, or whole-facility energy balance. Reaching the educational reference level does not mean that a real fusion reactor would operate successfully.",
  },
  keVPerMK: 0.0862,
};
