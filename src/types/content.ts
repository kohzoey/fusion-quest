/**
 * FUSION QUEST — Core content type definitions.
 *
 * These types are the contract between the locked scientific content
 * (src/data/*) and the presentation layer (src/components, src/pages).
 * Presentation components should never contain long-form scientific
 * text directly — they render whatever these types describe.
 */

export type ModuleId = "m1" | "m2" | "m3" | "m4" | "m5";

/** Where a piece of information comes from, for the compact
 * "Source" / "Learn more" affordance rather than inline citations. */
export type SourceType =
  | "primary" // e.g. ITER Organization, LLNL — direct primary source
  | "companyReported" // stated by the company itself
  | "independentlyReported"; // third-party journalism / independent analysis

export interface Source {
  label: string; // e.g. "LLNL, \"Achieving Fusion Ignition\""
  type: SourceType;
  date?: string; // e.g. "June 2026" — required for time-sensitive claims
  url?: string;
}

/** A single explanatory beat within a module. Corresponds to one
 * "Stage" in the locked content blueprints. */
export interface Stage {
  id: string;
  title: string;
  /** Plain-language explanation. May be a placeholder string until
   * the locked copy is transferred — see PLACEHOLDER_PREFIX below. */
  explanation: string;
  keyIdea?: string;
  analogy?: string;
  visual?: VisualRef;
  misconception?: string;
  source?: Source;
}

export type VisualKind = "diagram" | "comparisonTable" | "timeline" | "chart" | "none";

export interface VisualRef {
  kind: VisualKind;
  /** Identifier used to select the concrete visual component,
   * e.g. "coulomb-barrier-diagram". Resolved in Phase 2. */
  ref: string;
  alt: string;
}

/** How a future date/status must be labelled — enforced by the
 * TargetLabel component so this can never be silently omitted. */
export type TemporalStatus = "target" | "projected" | "demonstrated";

export interface TemporalClaim {
  text: string;
  status: TemporalStatus;
  date?: string;
  source?: Source;
}

/** M5's four-way claim classification. Exactly these four values —
 * do not add a fifth without updating the locked Module 5 blueprint
 * and its Fusion Reality Check interaction first. */
export type ClaimClassification = "demonstrated" | "projected" | "openChallenge" | "false";

export interface Claim {
  id: string;
  text: string;
  classification: ClaimClassification;
  explanation: string;
  source: Source;
}

export interface MissionCheckQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
}

export interface MissionCheck {
  moduleId: ModuleId;
  questions: MissionCheckQuestion[];
}

/** Identifies which concrete interaction component a module's
 * flagship slot should render, plus its config payload. The config
 * shape is intentionally `unknown` here and narrowed per-interaction
 * (see e.g. FusionLabConfig in types/fusionLab.ts) so this file
 * doesn't need to know about every interaction's internals. */
export interface InteractionConfig<TConfig = unknown> {
  component: string; // e.g. "FusionLab", "TokamakDiagram", "RealityCheck"
  config: TConfig;
}

export interface ModuleContent {
  id: ModuleId;
  order: number;
  title: string;
  subtitle: string;
  missionFraming: string;
  stages: Stage[];
  flagshipInteraction: InteractionConfig;
  /**
   * If set, the flagship interaction renders immediately after the
   * stage with this id, rather than after all stages. Used by
   * Module 3, whose locked spec places the tokamak diagram between
   * "Magnetic Confinement" and "How Do Magnetic Fields Actually
   * Control the Plasma?" for a specific pedagogical reason (see
   * that module's Content Blueprint, Section 3). When omitted, the
   * flagship interaction renders after all stages, before the
   * secondary interaction (if any) and the Mission Check — this is
   * correct for M1 and M2, whose locked specs place their single
   * interaction at the end of the stage sequence.
   */
  flagshipInsertAfterStageId?: string;
  /**
   * A module's second interaction, if it has one (only M3 currently
   * does — the "Design Your Fusion Machine" challenge). Always
   * renders after all stages and after the flagship interaction,
   * before the Mission Check.
   */
  secondaryInteraction?: InteractionConfig;
  missionCheck: MissionCheck;
  transitionToNext?: string;
}

export interface ModuleSummary {
  id: ModuleId;
  order: number;
  title: string;
  shortDescription: string;
  path: string;
}

/** Tracks the student's progress through the site. Held in a
 * lightweight React context (see src/context/ProgressContext.tsx);
 * no backend, no scoring — completion only. */
export interface ModuleProgress {
  completed: Record<ModuleId, boolean>;
  current: ModuleId | null;
}

/** Marker used by placeholder copy so it is visually and
 * programmatically distinguishable from locked content — never a
 * silent, invented sentence. See src/data/placeholders.ts. */
export const PLACEHOLDER_PREFIX = "[LOCKED CONTENT PENDING]";
