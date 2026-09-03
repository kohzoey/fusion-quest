import type { ComparisonRow } from "../components/ui/ComparisonTable";
import { TargetLabel } from "../components/ui/TargetLabel";

/**
 * LOCKED. Transcribed verbatim from the Module 5 Final Scientific
 * Verification Register (Stage 5 comparison table content). Do not
 * change any status, date, or figure here without re-verifying
 * against the sources in that register first. The "What remains"
 * row wraps each target date in the shared TargetLabel component
 * (added during the final integration audit) so every forward-
 * looking date carries a visible TARGET badge, not just the word
 * "target" in prose — satisfying that requirement structurally
 * rather than relying on wording alone.
 */
export const module5ComparisonColumns = ["ITER", "NIF", "CFS / SPARC", "Helion / Polaris"];

export const module5ComparisonRows: ComparisonRow[] = [
  {
    label: "Fusion approach",
    cells: ["Magnetic (tokamak)", "Inertial (laser)", "Magnetic (tokamak)", "Pulsed (linear device)"],
  },
  {
    label: "Main goal",
    cells: [
      "Demonstrate reactor-scale net fusion power",
      "Demonstrate target-level ignition physics",
      "Demonstrate compact net-energy tokamak",
      "Demonstrate direct-conversion fusion electricity",
    ],
  },
  {
    label: "Current stage",
    cells: [
      "Under construction, ~two-thirds assembled",
      "Operating — repeated ignition shots achieved",
      "Under construction, CFS estimates ~80% complete",
      "Prototype testing",
    ],
  },
  {
    label: "What's been demonstrated",
    cells: [
      "Magnet and construction milestones",
      "Repeated target-level fusion gain",
      "Magnet and vessel construction milestones",
      "Measurable D-T fusion and high plasma temperatures (company-reported)",
    ],
  },
  {
    label: "What remains",
    cells: [
      <>
        Start of Research Operation <TargetLabel status="target" date="2034" />; D-T operation{" "}
        <TargetLabel status="target" date="2039" />
      </>,
      "Whole-facility net energy; commercial application",
      <>
        First plasma <TargetLabel status="target" date="2027" />, then net energy gain
      </>,
      <>
        Net electricity production; commercial plant <TargetLabel status="target" date="2028" />
      </>,
    ],
  },
  {
    label: "Electricity generation status",
    cells: ["None", "None", "None", "None"],
  },
];
