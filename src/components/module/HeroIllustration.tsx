import styles from "./HeroIllustration.module.css";

export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 640 360"
      className={styles.svg}
      role="img"
      aria-label="A stylised illustration of a star's fusion core on the left, connected by a flowing energy trail to a tokamak's confined plasma ring on the right"
    >
      <g className={styles.star}>
        {Array.from({ length: 10 }, (_, i) => {
          const angle = (360 / 10) * i;
          const rad = (angle * Math.PI) / 180;
          const x1 = 120 + Math.cos(rad) * 34;
          const y1 = 180 + Math.sin(rad) * 34;
          const x2 = 120 + Math.cos(rad) * 62;
          const y2 = 180 + Math.sin(rad) * 62;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className={styles.spike}
              style={{ animationDelay: `${i * 90}ms` }}
            />
          );
        })}
        <circle cx="120" cy="180" r="34" className={styles.core} />
        <circle cx="120" cy="180" r="18" className={styles.coreInner} />
      </g>

      <path
        d="M 165 180 C 260 100, 340 260, 460 180"
        className={styles.trail}
        fill="none"
      />
      {[0, 1, 2, 3, 4].map((i) => {
        const t = i / 4;
        const x = Math.round(165 + (460 - 165) * t);
        const y = Math.round(180 - Math.sin(t * Math.PI) * 55);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3.5"
            className={styles.particle}
            style={{ animationDelay: `${i * 180}ms` }}
          />
        );
      })}

      <g className={styles.tokamak}>
        <ellipse cx="500" cy="180" rx="90" ry="60" className={styles.ringOuter} />
        <ellipse cx="500" cy="180" rx="55" ry="34" className={styles.ringInner} />
        <ellipse cx="500" cy="180" rx="90" ry="60" className={styles.orbitPath} />
        <circle cx="500" cy="120" r="5" className={styles.orbitDot} />
      </g>
    </svg>
  );
}
