import { useState } from "react";
import type { GridPriority } from "../../data/module4.gridPriorities";
import { gridBuilderClosing } from "../../data/module4.gridPriorities";
import { Card } from "../ui/Card";
import styles from "./FusionGridBuilder.module.css";

interface FusionGridBuilderProps {
  priorities: GridPriority[];
}

/**
 * "Would You Build a Fusion Grid?" — Module 4's flagship
 * interaction. Deliberately has no scoring system of any kind: the
 * component contains no numeric total, no ranking, and no code
 * path that could produce a "fusion wins" outcome. Every selected
 * priority reveals its potential strength paired with its open
 * challenge in the same view — never one without the other.
 */
export function FusionGridBuilder({ priorities }: FusionGridBuilderProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));
  };

  const selectedPriorities = priorities.filter((p) => selectedIds.includes(p.id));

  return (
    <div className={styles.wrapper}>
      <h2>Would You Build a Fusion Grid?</h2>
      <p className={styles.intro}>
        Choose the priorities that matter most to you for a future electricity system.
      </p>

      <div className={styles.chips} role="group" aria-label="Choose priorities">
        {priorities.map((p) => {
          const isSelected = selectedIds.includes(p.id);
          return (
            <button
              key={p.id}
              type="button"
              className={[styles.chip, isSelected ? styles.chipSelected : ""].filter(Boolean).join(" ")}
              aria-pressed={isSelected}
              onClick={() => toggle(p.id)}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      {selectedPriorities.length > 0 ? (
        <div className={styles.results}>
          {selectedPriorities.map((p) => (
            <Card key={p.id} raised className={styles.resultCard}>
              <h3>{p.label}</h3>
              <div className={styles.pair}>
                <div className={styles.potential}>
                  <span className={styles.pairLabel}>Fusion could offer</span>
                  <p>{p.potential}</p>
                </div>
                <div className={styles.challenge}>
                  <span className={styles.pairLabel}>Open challenge</span>
                  <p>{p.challenge}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : null}

      {selectedPriorities.length >= 2 ? <p className={styles.closing}>{gridBuilderClosing}</p> : null}
    </div>
  );
}
