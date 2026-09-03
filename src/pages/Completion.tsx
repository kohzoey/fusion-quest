import { useState } from "react";
import { Card } from "../components/ui/Card";
import styles from "./Completion.module.css";

/**
 * "Mission Complete" page. The central conclusion line is the
 * locked project conclusion (from the implementation brief itself,
 * Section 2 / 21) — not invented copy. The reflection prompt has
 * no "correct" model answer, per the brief's explicit instruction.
 */
export function Completion() {
  const [reflection, setReflection] = useState("");

  return (
    <div className={styles.page}>
      <h1>Mission Complete</h1>
      <p className={styles.journey}>History → Physics → Engineering → Applications → Current Reality</p>

      <Card className={styles.conclusion}>
        <p>
          Fusion is no longer purely speculative science — but it is not yet a commercial
          electricity source either.
        </p>
      </Card>

      <section aria-labelledby="reflection-heading" className={styles.reflection}>
        <h2 id="reflection-heading">One last question</h2>
        <label htmlFor="reflection-input">
          What do you think is the biggest remaining challenge before fusion can become a
          practical power source?
        </label>
        <textarea
          id="reflection-input"
          className={styles.textarea}
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          rows={4}
        />
        <p className={styles.note}>
          There's no single correct answer here — this is a space to think, not a graded
          question.
        </p>
      </section>
    </div>
  );
}
