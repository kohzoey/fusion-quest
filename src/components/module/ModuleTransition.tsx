import { Link } from "react-router-dom";
import { moduleSummaries } from "../../data/moduleSummaries";
import type { ModuleId } from "../../types/content";
import { Button } from "../ui/Button";
import styles from "./ModuleTransition.module.css";

interface ModuleTransitionProps {
  currentId: ModuleId;
  transitionText?: string;
  /** Called when the student advances forward (Next Module / Mission
   * Complete) — the signal used to mark this module as completed.
   * Not called for backward navigation (Previous / Home). */
  onAdvance?: () => void;
}

export function ModuleTransition({ currentId, transitionText, onAdvance }: ModuleTransitionProps) {
  const index = moduleSummaries.findIndex((m) => m.id === currentId);
  const prev = index > 0 ? moduleSummaries[index - 1] : null;
  const next = index < moduleSummaries.length - 1 ? moduleSummaries[index + 1] : null;

  return (
    <nav className={styles.wrapper} aria-label="Module navigation">
      {transitionText ? <p className={styles.transitionText}>{transitionText}</p> : null}
      <div className={styles.buttons}>
        {prev ? (
          <Link to={prev.path}>
            <Button variant="secondary">← {prev.title}</Button>
          </Link>
        ) : (
          <Link to="/">
            <Button variant="secondary">← Home</Button>
          </Link>
        )}
        {next ? (
          <Link to={next.path} onClick={onAdvance}>
            <Button variant="primary">{next.title} →</Button>
          </Link>
        ) : (
          <Link to="/complete" onClick={onAdvance}>
            <Button variant="primary">Mission Complete →</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
