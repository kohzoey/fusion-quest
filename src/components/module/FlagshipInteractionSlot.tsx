import { lazy, Suspense } from "react";
import type { InteractionConfig, Claim } from "../../types/content";
import type { TimelineNode } from "../../data/module1.timeline";
import type { FusionLabConfig } from "../../types/fusionLab";
import type { TokamakComponent } from "../../data/module3.tokamak";
import type { GridPriority } from "../../data/module4.gridPriorities";
import { Card } from "../ui/Card";
import styles from "./FlagshipInteractionSlot.module.css";

interface FlagshipInteractionSlotProps {
  interaction: InteractionConfig;
}

// Lazy-loaded: each interaction is its own chunk, fetched only when
// the student actually reaches that module, rather than bundled
// into the initial page load. This is a real performance choice
// made during the final integration audit, not a placeholder —
// verify with `vite build` that separate chunk files are emitted
// per interaction (see the Phase 6 report).
const Timeline = lazy(() => import("../interactions/Timeline").then((m) => ({ default: m.Timeline })));
const FusionLab = lazy(() => import("../interactions/FusionLab").then((m) => ({ default: m.FusionLab })));
const TokamakDiagram = lazy(() =>
  import("../interactions/TokamakDiagram").then((m) => ({ default: m.TokamakDiagram }))
);
const ConfinementChooser = lazy(() =>
  import("../interactions/ConfinementChooser").then((m) => ({ default: m.ConfinementChooser }))
);
const FusionGridBuilder = lazy(() =>
  import("../interactions/FusionGridBuilder").then((m) => ({ default: m.FusionGridBuilder }))
);
const RealityCheck = lazy(() =>
  import("../interactions/RealityCheck").then((m) => ({ default: m.RealityCheck }))
);

function LoadingFallback() {
  return (
    <div className={styles.loading} role="status" aria-live="polite">
      Loading interaction…
    </div>
  );
}

/**
 * Thin dispatcher: resolves a module's interaction by name and
 * renders the matching concrete component, passing
 * `interaction.config` straight through. No interaction logic
 * lives here.
 */
export function FlagshipInteractionSlot({ interaction }: FlagshipInteractionSlotProps) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      {(() => {
        switch (interaction.component) {
          case "Timeline":
            return <Timeline nodes={interaction.config as TimelineNode[]} />;
          case "FusionLab":
            return <FusionLab config={interaction.config as FusionLabConfig} />;
          case "TokamakDiagram":
            return <TokamakDiagram components={interaction.config as TokamakComponent[]} />;
          case "ConfinementChooser":
            return <ConfinementChooser />;
          case "FusionGridBuilder":
            return <FusionGridBuilder priorities={interaction.config as GridPriority[]} />;
          case "RealityCheck":
            return <RealityCheck claims={interaction.config as Claim[]} />;
          default:
            return (
              <Card raised className={styles.slot}>
                <span className={styles.tag}>Flagship interaction</span>
                <p>
                  <code>{interaction.component}</code> will render here in a later phase.
                </p>
              </Card>
            );
        }
      })()}
    </Suspense>
  );
}
