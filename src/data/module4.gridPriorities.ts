export interface GridPriority {
  id: string;
  label: string;
  potential: string;
  challenge: string;
}

/**
 * Content for "Would You Build a Fusion Grid?" — Module 4's
 * flagship interaction. The locked blueprint specified the 7
 * priority names and gave two worked examples (reliability, cost)
 * showing the paired potential/challenge format; the remaining five
 * pairs were written afterward using only claims already
 * established elsewhere in Module 4 (Stages 2–8) — no new facts,
 * figures, or claims are introduced here. Flag this for review the
 * same way Module 3's gap-filled Mission Check was flagged.
 */
export const gridPriorities: GridPriority[] = [
  {
    id: "low-carbon",
    label: "Low carbon emissions",
    potential:
      "Unlike burning coal, oil, or gas, the fusion reaction itself doesn't release CO₂.",
    challenge:
      "This benefit only matters at the scale of an actual working power plant — and no commercial fusion plant has been built yet.",
  },
  {
    id: "reliability",
    label: "Reliability",
    potential:
      "If it can be made to work reliably, fusion could offer a steady, always-available power source, unlike solar and wind, which depend on weather and time of day.",
    challenge:
      "Achieving sustained — not just brief — operation is one of the system-level challenges still to be solved before that reliability is proven.",
  },
  {
    id: "fuel-availability",
    label: "Fuel availability",
    potential: "Deuterium, one of fusion's two main fuels, is abundant and extractable from ordinary water.",
    challenge:
      "Tritium, the other fuel, is not naturally abundant — future plants would need to breed their own tritium using lithium, a fuel cycle that hasn't been demonstrated at commercial scale.",
  },
  {
    id: "land-resource-use",
    label: "Land / resource use",
    potential: "Fusion releases enormous energy from a very small amount of fuel — a high energy density.",
    challenge:
      "What that means for land and resource use at real plant scale hasn't been demonstrated, since no commercial fusion plant currently exists to measure it against.",
  },
  {
    id: "waste-management",
    label: "Waste management",
    potential:
      "Fusion does not produce the same kind of high-activity, long-lived radioactive waste associated with fission.",
    challenge:
      "It still produces activated reactor materials and radioactive tritium that require dedicated management systems — systems that are not yet an established, working solution at commercial scale.",
  },
  {
    id: "cost",
    label: "Cost",
    potential: "Fusion's high energy density means, in principle, a small amount of fuel could release a very large amount of energy.",
    challenge: "No commercial fusion plant has yet demonstrated a cost structure that competes with other electricity sources.",
  },
  {
    id: "technological-maturity",
    label: "Technological maturity",
    potential:
      "Serious, well-funded fusion research has been underway for decades, and real physics milestones have already been demonstrated.",
    challenge:
      "A physics experiment proving fusion conditions can be reached is a genuinely major achievement — but it is not the same thing as a commercially viable power plant.",
  },
];

export const gridBuilderClosing =
  "There's no clear \"yes\" or \"no\" answer yet — fusion shows real potential across several of these priorities, but every one of them also comes with a genuine unresolved challenge. That combination — real promise and real open problems — is exactly why fusion research continues, and exactly why it's not yet a commercial reality.";
