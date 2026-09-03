import { moduleSummaries } from "../../data/moduleSummaries";
import { useProgress } from "../../context/useProgress";
import styles from "./ProgressRail.module.css";

/**
 * Visual "1 → 2 → 3 → 4 → 5" progress indicator. Distinct from
 * NavBar (which is for navigation); this communicates completion
 * state at a glance. Completion is shown via both fill color and
 * a checkmark glyph — never color alone.
 */
export function ProgressRail() {
  const { completed, current } = useProgress();

  return (
    <ol className={styles.rail} aria-label="Mission progress">
      {moduleSummaries.map((m, i) => {
        const isCompleted = completed[m.id];
        const isCurrent = current === m.id;
        return (
          <li key={m.id} className={styles.step}>
            <span
              className={[
                styles.marker,
                isCompleted ? styles.completed : "",
                isCurrent ? styles.current : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-current={isCurrent ? "step" : undefined}
            >
              {isCompleted ? "✓" : m.order}
            </span>
            {i < moduleSummaries.length - 1 ? (
              <span className={styles.connector} aria-hidden="true" />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
