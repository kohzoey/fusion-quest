import styles from "./ModuleHero.module.css";

interface ModuleHeroProps {
  order: number;
  title: string;
  subtitle: string;
  missionFraming: string;
}

export function ModuleHero({ order, title, subtitle, missionFraming }: ModuleHeroProps) {
  return (
    <header className={styles.hero}>
      <span className={styles.eyebrow}>Module {order}</span>
      <h1>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.framing}>{missionFraming}</p>
    </header>
  );
}
