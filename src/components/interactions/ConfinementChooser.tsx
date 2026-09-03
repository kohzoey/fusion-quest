import { useState } from "react";
import { confinementOptions, closingPrompt, type ConfinementOption } from "../../data/module3.confinementChoices";
import { Card } from "../ui/Card";
import styles from "./ConfinementChooser.module.css";

/**
 * "Design Your Fusion Machine" — Module 3's Challenge (Stage 10).
 * Deliberately has no "best" outcome: selecting an approach reveals
 * its strength/challenge card, then a reasoning question with no
 * scored right answer — every option's feedback affirms it as a
 * genuine, real engineering priority, per the locked Challenge
 * Specification.
 */
export function ConfinementChooser() {
  const [selected, setSelected] = useState<ConfinementOption | null>(null);
  const [reasoningChoice, setReasoningChoice] = useState<string | null>(null);

  const choose = (option: ConfinementOption) => {
    setSelected(option);
    setReasoningChoice(null);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Challenge: Design Your Fusion Machine</h2>
      <p className={styles.intro}>Choose an approach to explore its trade-offs.</p>

      <div className={styles.optionGrid} role="group" aria-label="Choose a confinement approach">
        {confinementOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            className={[styles.optionButton, selected?.id === option.id ? styles.selected : ""]
              .filter(Boolean)
              .join(" ")}
            aria-pressed={selected?.id === option.id}
            onClick={() => choose(option)}
          >
            {option.name}
          </button>
        ))}
      </div>

      {selected ? (
        <Card raised className={styles.detailCard}>
          <h3>{selected.name}</h3>
          <p>{selected.whyItCanWork}</p>
          <dl className={styles.tradeoff}>
            <div>
              <dt>Major strength</dt>
              <dd>{selected.strength}</dd>
            </div>
            <div>
              <dt>Major challenge</dt>
              <dd>{selected.challenge}</dd>
            </div>
          </dl>

          <div className={styles.reasoning}>
            <p className={styles.reasoningQuestion}>{selected.reasoningQuestion}</p>
            <div className={styles.reasoningOptions} role="radiogroup" aria-label={selected.reasoningQuestion}>
              {selected.reasoningOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  role="radio"
                  aria-checked={reasoningChoice === opt.id}
                  className={[styles.reasoningOption, reasoningChoice === opt.id ? styles.selected : ""]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setReasoningChoice(opt.id)}
                >
                  {opt.text}
                </button>
              ))}
            </div>
            {reasoningChoice ? (
              <p className={styles.reasoningFeedback} role="status">
                That's a genuine, real engineering priority — researchers are actively working on
                exactly this today.
              </p>
            ) : null}
          </div>
        </Card>
      ) : null}

      {selected && reasoningChoice ? <p className={styles.closing}>{closingPrompt}</p> : null}
    </div>
  );
}
