import type { Stage } from "../../types/content";
import { isPlaceholder } from "../../data/placeholders";
import { SourceTag } from "../ui/SourceTag";
import { ComparisonTable } from "../ui/ComparisonTable";
import { module5ComparisonColumns, module5ComparisonRows } from "../../data/module5.projects";
import { StageIcon } from "./StageIcon";
import styles from "./StageBlock.module.css";

interface StageBlockProps {
  stage: Stage;
}

export function StageBlock({ stage }: StageBlockProps) {
  const pending = isPlaceholder(stage.explanation);
  const paragraphs = stage.explanation.split("\n\n");
  const hasImage = Boolean(stage.visual && stage.visual.ref.startsWith("/illustrations/"));
  const hasComparisonTable = Boolean(stage.visual && stage.visual.ref === "module5-comparison");

  const textContent = (
    <div className={styles.textCol}>
      <h2 id={`${stage.id}-title`} className={styles.titleRow}>
        <StageIcon />
        <span>{stage.title}</span>
      </h2>
      {paragraphs.map((para, i) => (
        <p key={i} className={pending ? styles.pendingText : undefined}>
          {para}
        </p>
      ))}

      {stage.analogy ? <p className={styles.analogy}>{stage.analogy}</p> : null}

      {stage.visual && !hasComparisonTable && !hasImage ? (
        <div className={styles.visualPlaceholder} role="img" aria-label={stage.visual.alt}>
          <span className={styles.visualTag}>{stage.visual.kind}</span>
          <span>{stage.visual.ref}</span>
        </div>
      ) : null}

      {!hasComparisonTable && stage.misconception ? (
        <p className={styles.misconception}>
          <strong>Watch out for:</strong> {stage.misconception}
        </p>
      ) : null}

      {!hasComparisonTable && stage.source ? <SourceTag source={stage.source} /> : null}
    </div>
  );

  if (hasComparisonTable) {
    return (
      <article className={styles.stage} aria-labelledby={`${stage.id}-title`}>
        {textContent}
        <ComparisonTable
          columns={module5ComparisonColumns}
          rows={module5ComparisonRows}
          caption={stage.visual!.alt}
        />
        {stage.misconception ? (
          <p className={[styles.misconception, styles.textCol].join(" ")}>
            <strong>Watch out for:</strong> {stage.misconception}
          </p>
        ) : null}
        {stage.source ? (
          <div className={styles.textCol}>
            <SourceTag source={stage.source} />
          </div>
        ) : null}
      </article>
    );
  }

  if (hasImage) {
    return (
      <article className={styles.stageWithImage} aria-labelledby={`${stage.id}-title`}>
        {textContent}
        <figure className={styles.illustration}>
          <img
            src={`${import.meta.env.BASE_URL}${stage.visual!.ref.replace(/^\//, "")}`}
            alt={stage.visual!.alt}
            loading="lazy"
          />
        </figure>
      </article>
    );
  }

  return (
    <article className={styles.stage} aria-labelledby={`${stage.id}-title`}>
      {textContent}
    </article>
  );
}
