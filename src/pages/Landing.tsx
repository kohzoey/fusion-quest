import { Link } from "react-router-dom";
import { moduleSummaries } from "../data/moduleSummaries";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import styles from "./Landing.module.css";

/**
 * Structural landing page. Per the implementation brief: if exact
 * locked landing-page copy is not yet in the data layer, use a
 * clearly marked placeholder rather than invented fusion claims.
 * The heading/subtitle below are the project's own approved
 * working title and subtitle (from the original brief), not new
 * content — everything else is a structural placeholder.
 */
export function Landing() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>FUSION QUEST</h1>
        <p className={styles.subtitle}>From the Stars to the Future of Energy</p>
        <p className={styles.placeholderNote}>
          [LOCKED LANDING CONTENT TO BE INSERTED] — introduction copy pending transfer
          from the approved content blueprints.
        </p>
        <Link to="/module-1">
          <Button variant="primary">Start Mission</Button>
        </Link>
      </section>

      <section aria-labelledby="modules-heading" className={styles.moduleGrid}>
        <h2 id="modules-heading">Your Mission</h2>
        <div className={styles.cards}>
          {moduleSummaries.map((m) => (
            <Card key={m.id} className={styles.card}>
              <span className={styles.cardOrder}>{m.order}</span>
              <h3>{m.title}</h3>
              <p>{m.shortDescription}</p>
              <Link to={m.path}>
                <Button variant="secondary">Begin</Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
