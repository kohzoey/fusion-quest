import { Link } from "react-router-dom";
import { moduleSummaries } from "../data/moduleSummaries";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { HeroIllustration } from "../components/module/HeroIllustration";
import styles from "./Landing.module.css";

export function Landing() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>FUSION QUEST</h1>
          <p className={styles.subtitle}>From the Stars to the Future of Energy</p>
          <p className={styles.intro}>
            For over a century, scientists have chased the same reaction that powers every
            star in the sky. This is the story of how far that chase has come — and how far
            it still has to go. Five missions. Real physics, real machines, real trade-offs.
          </p>
          <Link to="/module-1">
            <Button variant="primary">Start Mission</Button>
          </Link>
        </div>
        <div className={styles.heroVisual}>
          <HeroIllustration />
        </div>
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
