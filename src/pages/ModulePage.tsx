import { useEffect, useMemo } from "react";
import type { ModuleContent } from "../types/content";
import { useProgress } from "../context/useProgress";
import { ModuleHero } from "../components/module/ModuleHero";
import { StageSequence } from "../components/module/StageSequence";
import { FlagshipInteractionSlot } from "../components/module/FlagshipInteractionSlot";
import { MissionCheck } from "../components/module/MissionCheck";
import { ModuleTransition } from "../components/module/ModuleTransition";
import { ProgressRail } from "../components/layout/ProgressRail";

interface ModulePageProps {
  module: ModuleContent;
}

/**
 * The single reusable page shell every module renders through.
 * Content-specific behaviour comes entirely from the `module` data
 * object — this component has no scientific content of its own and
 * should never need to change when M1–M5 content is updated.
 *
 * Supports two layouts, both driven by data rather than per-module
 * branching here:
 *  - Default (M1, M2): all stages, then the flagship interaction.
 *  - Split (M3): stages up to `flagshipInsertAfterStageId`, the
 *    flagship interaction, then the remaining stages — because M3's
 *    locked spec places its tokamak diagram mid-sequence, not at
 *    the end (see that decision's rationale in ModuleContent's own
 *    type documentation).
 */
export function ModulePage({ module }: ModulePageProps) {
  const { setCurrent, markCompleted } = useProgress();

  useEffect(() => {
    setCurrent(module.id);
  }, [module.id, setCurrent]);

  const { stagesBefore, stagesAfter } = useMemo(() => {
    if (!module.flagshipInsertAfterStageId) {
      return { stagesBefore: module.stages, stagesAfter: [] };
    }
    const splitIndex = module.stages.findIndex((s) => s.id === module.flagshipInsertAfterStageId);
    if (splitIndex === -1) {
      return { stagesBefore: module.stages, stagesAfter: [] };
    }
    return {
      stagesBefore: module.stages.slice(0, splitIndex + 1),
      stagesAfter: module.stages.slice(splitIndex + 1),
    };
  }, [module.stages, module.flagshipInsertAfterStageId]);

  return (
    <article>
      <ProgressRail />
      <ModuleHero
        order={module.order}
        title={module.title}
        subtitle={module.subtitle}
        missionFraming={module.missionFraming}
      />
      <StageSequence stages={stagesBefore} />
      <FlagshipInteractionSlot interaction={module.flagshipInteraction} />
      {stagesAfter.length > 0 ? <StageSequence stages={stagesAfter} /> : null}
      {module.secondaryInteraction ? (
        <FlagshipInteractionSlot interaction={module.secondaryInteraction} />
      ) : null}
      {module.missionCheck.questions.length > 0 ? (
        <MissionCheck missionCheck={module.missionCheck} />
      ) : null}
      <ModuleTransition
        currentId={module.id}
        transitionText={module.transitionToNext}
        onAdvance={() => markCompleted(module.id)}
      />
    </article>
  );
}
