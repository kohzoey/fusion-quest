import type { Stage } from "../../types/content";
import { isPlaceholder } from "../../data/placeholders";
import { SourceTag } from "../ui/SourceTag";
import { ComparisonTable } from "../ui/ComparisonTable";
import { module5ComparisonColumns, module5ComparisonRows } from "../../data/module5.projects";
import styles from "./StageBlock.module.css";

interface StageBlockProps {
  stage: Stage;
}

export function StageBlock({ stage }: StageBlockProps) {
  const pending = isPlaceholder(stage.explanation);
  const paragraphs = stage.explanation.split("\n\n");

  return (
    <article className={styles.stage} aria-labelledby={`${stage.id}-title`}>
      <h2 id={`${stage.id}-title`}>{stage.title}</h2>
      {paragraphs.map((para, i) => (
        <p key={i} className={pending ? styles.pendingText : undefined}>
          {para}
        </p>
      ))}

      {stage.analogy ? <p className={styles.analogy}>{stage.analogy}</p> : null}

      {stage.visual && stage.visual.ref === "module5-comparison" ? (
        <ComparisonTable
          columns={module5ComparisonColumns}
          rows={module5ComparisonRows}
          caption={stage.visual.alt}
        />
      ) : stage.visual ? (
        <div className={styles.visualPlaceholder} role="img" aria-label={stage.visual.alt}>
          <span className={styles.visualTag}>{stage.visual.kind}</span>
          <span>{stage.visual.ref}</span>
        </div>
      ) : null}

      {stage.misconception ? (
        <div className={styles.misconception} role="note">
          <span className={styles.misconceptionIcon} aria-hidden="true">
            ⚠
          </span>
          <p>
            <strong>Watch out for:</strong> {stage.misconception}
          </p>
        </div>
      ) : null}

      {stage.source ? <SourceTag source={stage.source} /> : null}
    </article>
  );
}
