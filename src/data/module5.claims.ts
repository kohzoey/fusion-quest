import type { Claim } from "../types/content";

/**
 * LOCKED. Transcribed verbatim from the Module 5 Final Scientific
 * Verification Register — these are the same five approved claims
 * used in the flagship "Fusion Reality Check" interaction. Do not
 * add, remove, or reword claims without returning to that register.
 */
export const module5Claims: Claim[] = [
  {
    id: "iter-commercial",
    text: "ITER is a commercial fusion power plant.",
    classification: "false",
    explanation:
      "ITER is an experimental facility, not a commercial power plant — it isn't designed to sell electricity to anyone. This statement is simply inaccurate.",
    source: { label: "ITER Organization", type: "primary", date: "2026" },
  },
  {
    id: "nif-target-gain",
    text: "NIF achieved fusion energy output exceeding the laser energy delivered to the target.",
    classification: "demonstrated",
    explanation:
      "Demonstrated repeatedly, most recently in June 2026 — about 7.9 megajoules of fusion energy, roughly 3.8 times the laser energy delivered to the target.",
    source: { label: "LLNL, \"Achieving Fusion Ignition\"", type: "primary", date: "June 2026" },
  },
  {
    id: "nif-facility-net",
    text: "NIF's whole facility produced more electricity than it consumed.",
    classification: "openChallenge",
    explanation:
      "NIF's laser system draws vastly more electricity from the grid than the laser energy it delivers to the target. This has not been demonstrated and is not close.",
    source: { label: "LLNL public communications; independent reporting (Physics World, AIP)", type: "independentlyReported", date: "2026" },
  },
  {
    id: "cfs-first-plasma",
    text: "Commonwealth Fusion Systems' SPARC has achieved first plasma.",
    classification: "projected",
    explanation:
      "First plasma is targeted for 2027 — a stated company target, not yet achieved as of this module's research date.",
    source: { label: "Commonwealth Fusion Systems (CEO statements, company blog)", type: "companyReported", date: "2026" },
  },
  {
    id: "helion-orion-2028",
    text: "Helion is targeting initial operations for its Orion fusion plant in 2028.",
    classification: "projected",
    explanation:
      "A stated project target and commercial commitment (Microsoft is the contracted customer) — not a demonstrated result. Fusion electricity has not yet been produced for Microsoft or anyone else.",
    source: { label: "Helion Energy; World Nuclear Association", type: "companyReported", date: "2025–2026" },
  },
];
