import type { Stage } from "../../types/content";
import { StageBlock } from "./StageBlock";

interface StageSequenceProps {
  stages: Stage[];
}

export function StageSequence({ stages }: StageSequenceProps) {
  return (
    <div>
      {stages.map((stage) => (
        <StageBlock key={stage.id} stage={stage} />
      ))}
    </div>
  );
}
