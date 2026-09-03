import { useState } from "react";
import type { MissionCheck as MissionCheckType } from "../../types/content";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import styles from "./MissionCheck.module.css";

interface MissionCheckProps {
  missionCheck: MissionCheckType;
}

/**
 * Structural implementation: renders questions, tracks a selected
 * option per question, shows correct/incorrect state and the
 * locked explanation immediately, with a retry control. No scoring
 * or pass/fail gate — these are learning checks, not examinations,
 * per the brief.
 */
export function MissionCheck({ missionCheck }: MissionCheckProps) {
  const [answers, setAnswers] = useState<Record<string, string | undefined>>({});

  const selectAnswer = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const retry = (questionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: undefined }));
  };

  return (
    <section aria-labelledby="mission-check-title" className={styles.wrapper}>
      <h2 id="mission-check-title">Mission Check</h2>
      {missionCheck.questions.map((q) => {
        const selected = answers[q.id];
        const isAnswered = Boolean(selected);
        const isCorrect = selected === q.correctOptionId;

        return (
          <Card key={q.id} className={styles.question}>
            <p className={styles.questionText}>{q.question}</p>
            <div className={styles.options} role="radiogroup" aria-label={q.question}>
              {q.options.map((opt) => {
                const isSelected = selected === opt.id;
                const showCorrect = isAnswered && opt.id === q.correctOptionId;
                const showIncorrectSelected =
                  isAnswered && isSelected && opt.id !== q.correctOptionId;

                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    disabled={isAnswered}
                    onClick={() => selectAnswer(q.id, opt.id)}
                    className={[
                      styles.option,
                      showCorrect ? styles.correct : "",
                      showIncorrectSelected ? styles.incorrect : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {opt.text}
                    {showCorrect ? <span aria-hidden="true"> ✓</span> : null}
                    {showIncorrectSelected ? <span aria-hidden="true"> ✕</span> : null}
                  </button>
                );
              })}
            </div>

            {isAnswered ? (
              <div className={styles.feedback} role="status">
                <p className={isCorrect ? styles.correctText : styles.incorrectText}>
                  {isCorrect ? "Correct." : "Not quite."}
                </p>
                <p>{q.explanation}</p>
                <Button variant="secondary" onClick={() => retry(q.id)}>
                  Try again
                </Button>
              </div>
            ) : null}
          </Card>
        );
      })}
    </section>
  );
}
