import { Link } from "react-router-dom";
import { moduleSummaries } from "../../data/moduleSummaries";
import type { ModuleId } from "../../types/content";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import styles from "./ModuleTransition.module.css";

interface ModuleTransitionProps {
  currentId: ModuleId;
  transitionText?: string;
  onAdvance?: () => void;
}

export function ModuleTransition({ currentId, transitionText, onAdvance }: ModuleTransitionProps) {
  const index = moduleSummaries.findIndex((m) => m.id === currentId);
  const prev = index > 0 ? moduleSummaries[index - 1] : null;
  const next = index < moduleSummaries.length - 1 ? moduleSummaries[index + 1] : null;

  return (
    <nav aria-label="Module navigation" className={styles.wrapper}>
      <Card raised className={styles.card}>
        <span className={styles.badge}>Mission Milestone Completed</span>
        {transitionText ? <p className={styles.transitionText}>{transitionText}</p> : null}
        {next ? (
          <p className={styles.nextLabel}>
            Next: <strong>{next.title}</strong>
          </p>
        ) : null}
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
              <Button variant="primary">Proceed to Next Mission →</Button>
            </Link>
          ) : (
            <Link to="/complete" onClick={onAdvance}>
              <Button variant="primary">View Mission Final Report →</Button>
            </Link>
          )}
        </div>
      </Card>
    </nav>
  );
}
