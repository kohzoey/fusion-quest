import type { FusionLabConfig } from "../types/fusionLab";

/**
 * LOCKED equations — transcribed exactly from the Fusion Lab Final
 * Locked Specification. Do not add reaction-rate, Q, ignition, or
 * pressure terms here.
 */
export function temperatureKeV(temperatureMK: number, config: FusionLabConfig): number {
  return temperatureMK * config.keVPerMK;
}

export function tripleProduct(
  densityM3: number,
  temperatureMK: number,
  confinementTimeS: number,
  config: FusionLabConfig
): number {
  return densityM3 * temperatureKeV(temperatureMK, config) * confinementTimeS;
}

export function referenceRatio(tp: number, config: FusionLabConfig): number {
  return tp / config.educationalReferenceLevel;
}

/** Formats a value in scientific notation, e.g. 2.155e20 -> "2.16 × 10²⁰". */
const SUPERSCRIPT_DIGITS: Record<string, string> = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  "-": "⁻",
};

function toSuperscript(exp: string): string {
  return exp
    .split("")
    .map((ch) => SUPERSCRIPT_DIGITS[ch] ?? ch)
    .join("");
}

export function formatScientific(value: number, precision = 2): string {
  if (value === 0) return "0";
  const exponent = Math.floor(Math.log10(Math.abs(value)));
  const mantissa = value / Math.pow(10, exponent);
  return `${mantissa.toFixed(precision)} × 10${toSuperscript(String(exponent))}`;
}
