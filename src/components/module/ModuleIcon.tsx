import type { ModuleId } from "../../types/content";
import styles from "./ModuleIcon.module.css";

interface ModuleIconProps {
  moduleId: ModuleId;
}

export function ModuleIcon({ moduleId }: ModuleIconProps) {
  return (
    <svg viewBox="0 0 28 28" className={styles.icon} aria-hidden="true">
      {moduleId === "m1" ? (
        <g>
          <circle cx="14" cy="14" r="4" fill="currentColor" />
          {Array.from({ length: 6 }, (_, i) => {
            const a = (Math.PI / 3) * i;
            const x1 = 14 + Math.cos(a) * 7;
            const y1 = 14 + Math.sin(a) * 7;
            const x2 = 14 + Math.cos(a) * 12;
            const y2 = 14 + Math.sin(a) * 12;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="round" />;
          })}
        </g>
      ) : null}

      {moduleId === "m2" ? (
        <g fill="none" strokeLinecap="round">
          <circle cx="10" cy="14" r="6" />
          <circle cx="18" cy="14" r="6" />
        </g>
      ) : null}

      {moduleId === "m3" ? (
        <g fill="none">
          <ellipse cx="14" cy="14" rx="10" ry="6.5" />
          <ellipse cx="14" cy="14" rx="5" ry="3" />
        </g>
      ) : null}

      {moduleId === "m4" ? (
        <path
          d="M 15.5 4 L 8 15.5 H 13 L 12 24 L 20 12 H 15 Z"
          fill="none"
          strokeLinejoin="round"
        />
      ) : null}

      {moduleId === "m5" ? (
        <g fill="none" strokeLinecap="round">
          <circle cx="14" cy="14" r="2" fill="currentColor" stroke="none" />
          <path d="M 9 14 A 5 5 0 0 1 19 14" />
          <path d="M 5.5 14 A 8.5 8.5 0 0 1 22.5 14" opacity="0.5" />
        </g>
      ) : null}
    </svg>
  );
}
