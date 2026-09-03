import { useState } from "react";
import type { Claim, ClaimClassification } from "../../types/content";
import { Card } from "../ui/Card";
import { SourceTag } from "../ui/SourceTag";
import styles from "./RealityCheck.module.css";

interface RealityCheckProps {
  claims: Claim[];
}

const CATEGORY_LABELS: Record<ClaimClassification, string> = {
  demonstrated: "Demonstrated",
  projected: "Projected / Planned",
  openChallenge: "Still an Open Challenge",
  false: "False / Misleading as Stated",
};

const CATEGORY_ORDER: ClaimClassification[] = ["demonstrated", "projected", "openChallenge", "false"];

/**
 * "Fusion Reality Check" — Module 5's flagship interaction.
 * Students classify each real, sourced claim into exactly one of
 * four categories. No score or ranking of ITER/NIF/CFS/Helion
 * against each other is computed anywhere — feedback is per-claim
 * and educational only, per the locked Flagship Interaction spec.
 */
export function RealityCheck({ claims }: RealityCheckProps) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, ClaimClassification | undefined>>({});

  const claim = claims[index];
  const answered = answers[claim?.id ?? ""];

  const classify = (classification: ClaimClassification) => {
    setAnswers((prev) => ({ ...prev, [claim.id]: classification }));
  };

  const next = () => setIndex((i) => Math.min(i + 1, claims.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  if (!claim) return null;

  const isCorrect = answered === claim.classification;

  return (
    <div className={styles.wrapper}>
      <h2>Fusion Reality Check</h2>
      <p className={styles.progress}>
        Claim {index + 1} of {claims.length}
      </p>

      <Card raised className={styles.claimCard}>
        <p className={styles.claimText}>&ldquo;{claim.text}&rdquo;</p>

        <div className={styles.categories} role="radiogroup" aria-label="Classify this claim">
          {CATEGORY_ORDER.map((cat) => (
            <button
              key={cat}
              type="button"
              role="radio"
              aria-checked={answered === cat}
              disabled={Boolean(answered)}
              onClick={() => classify(cat)}
              className={[
                styles.categoryButton,
                answered === cat && cat === claim.classification ? styles.correct : "",
                answered === cat && cat !== claim.classification ? styles.incorrect : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {answered ? (
          <div className={styles.feedback} role="status">
            <p className={isCorrect ? styles.correctText : styles.incorrectText}>
              {isCorrect ? "Correct." : `Actually: ${CATEGORY_LABELS[claim.classification]}.`}
            </p>
            <p>{claim.explanation}</p>
            <SourceTag source={claim.source} />
          </div>
        ) : null}
      </Card>

      <div className={styles.nav}>
        <button type="button" className={styles.navButton} onClick={prev} disabled={index === 0}>
          ← Previous
        </button>
        <button
          type="button"
          className={styles.navButton}
          onClick={next}
          disabled={index === claims.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
