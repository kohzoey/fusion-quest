import type { ModuleSummary } from "../types/content";

/**
 * Lightweight metadata used by navigation, the progress rail, and
 * the landing page's module preview cards. Full module content
 * (stages, mission checks, flagship interaction config) lives in
 * separate per-module data files, added as that content is
 * transferred from the locked blueprints.
 */
export const moduleSummaries: ModuleSummary[] = [
  {
    id: "m1",
    order: 1,
    title: "The Dawn of Fusion",
    shortDescription: "From Stars to Controlled Fusion — history.",
    path: "/module-1",
  },
  {
    id: "m2",
    order: 2,
    title: "The Core Mechanics",
    shortDescription: "What fusion needs — physics, and the Fusion Lab.",
    path: "/module-2",
  },
  {
    id: "m3",
    order: 3,
    title: "Building the Machine",
    shortDescription: "Taming the plasma — engineering the fusion reactor.",
    path: "/module-3",
  },
  {
    id: "m4",
    order: 4,
    title: "Can Fusion Power the World?",
    shortDescription: "Applications, environment, and impact.",
    path: "/module-4",
  },
  {
    id: "m5",
    order: 5,
    title: "The Horizon of Nuclear Energy",
    shortDescription: "Latest developments — where things actually stand.",
    path: "/module-5",
  },
];
